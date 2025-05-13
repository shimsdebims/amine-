import { useState, useEffect, useCallback } from 'react';
import { providerAPI } from '../api';
import { useAuth } from '../context/AuthContext';

/**
 * Custom hook for managing provider operations
 * @returns {Object} Provider methods and state
 */
const useProviders = () => {
  const [providers, setProviders] = useState([]);
  const [currentProvider, setCurrentProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    hasMore: false
  });
  const { user, isProvider } = useAuth();

  /**
   * Fetch providers with optional filtering
   * @param {Object} params Query parameters for filtering
   * @param {boolean} reset Whether to reset current providers list
   */
  const fetchProviders = useCallback(async (params = {}, reset = true) => {
    setLoading(true);
    setError(null);
    
    // Set default page if not provided
    const queryParams = {
      page: reset ? 1 : pagination.page,
      limit: pagination.limit,
      ...params
    };
    
    try {
      const response = await providerAPI.getProviders(queryParams);
      if (response.data && response.data.success) {
        const { data, pagination: paginationData } = response.data;
        
        // Update providers list
        setProviders(prev => (reset ? data : [...prev, ...data]));
        
        // Update pagination info
        setPagination({
          page: parseInt(queryParams.page, 10),
          limit: parseInt(queryParams.limit, 10),
          total: paginationData?.total || 0,
          hasMore: paginationData?.next ? true : false
        });
      } else {
        throw new Error(response.data?.message || 'Failed to fetch providers');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while fetching providers');
      console.error('Fetch providers error:', err);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit]);

  /**
   * Load more providers (pagination)
   * @param {Object} params Additional query parameters
   */
  const loadMoreProviders = useCallback((params = {}) => {
    if (!loading && pagination.hasMore) {
      fetchProviders({
        ...params,
        page: pagination.page + 1
      }, false);
    }
  }, [fetchProviders, loading, pagination]);

  /**
   * Refresh providers list (for pull-to-refresh functionality)
   * @param {Object} params Query parameters for filtering
   */
  const refreshProviders = useCallback(async (params = {}) => {
    setRefreshing(true);
    setError(null);
    try {
      const response = await providerAPI.getProviders({
        page: 1,
        limit: pagination.limit,
        ...params
      });
      
      if (response.data && response.data.success) {
        const { data, pagination: paginationData } = response.data;
        
        setProviders(data);
        setPagination({
          page: 1,
          limit: pagination.limit,
          total: paginationData?.total || 0,
          hasMore: paginationData?.next ? true : false
        });
      } else {
        throw new Error(response.data?.message || 'Failed to refresh providers');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while refreshing providers');
      console.error('Refresh providers error:', err);
    } finally {
      setRefreshing(false);
    }
  }, [pagination.limit]);

  /**
   * Search providers by name or service
   * @param {string} query Search query
   */
  const searchProviders = useCallback(async (query) => {
    if (!query) {
      fetchProviders();
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      // Use the search parameter defined in the backend API
      const response = await providerAPI.getProviders({
        search: query,
        page: 1,
        limit: pagination.limit
      });
      
      if (response.data && response.data.success) {
        const { data, pagination: paginationData } = response.data;
        
        setProviders(data);
        setPagination({
          page: 1,
          limit: pagination.limit,
          total: paginationData?.total || 0,
          hasMore: paginationData?.next ? true : false
        });
      } else {
        throw new Error(response.data?.message || 'Search failed');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while searching');
      console.error('Search providers error:', err);
    } finally {
      setLoading(false);
    }
  }, [fetchProviders, pagination.limit]);

  /**
   * Filter providers by category
   * @param {string} category Category to filter by
   */
  const filterByCategory = useCallback((category) => {
    fetchProviders(category ? { category } : {});
  }, [fetchProviders]);

  /**
   * Get details of a specific provider
   * @param {string} id Provider ID
   * @returns {Object|null} Provider details or null if error
   */
  const getProviderDetails = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await providerAPI.getProviderById(id);
      if (response.data && response.data.success) {
        setCurrentProvider(response.data.data);
        return response.data.data;
      } else {
        throw new Error(response.data?.message || 'Failed to fetch provider details');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while fetching provider details');
      console.error('Get provider details error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Create a new provider profile (for logged-in users)
   * @param {Object} providerData Provider information
   * @returns {Object|null} Created provider or null if error
   */
  const createProvider = useCallback(async (providerData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await providerAPI.createProvider(providerData);
      if (response.data && response.data.success) {
        const newProvider = response.data.data;
        setCurrentProvider(newProvider);
        return newProvider;
      } else {
        throw new Error(response.data?.message || 'Failed to create provider profile');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while creating provider profile');
      console.error('Create provider error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Update provider profile (only for the provider's own profile)
   * @param {string} id Provider ID
   * @param {Object} updateData Updated provider information
   * @returns {Object|null} Updated provider or null if error
   */
  const updateProvider = useCallback(async (id, updateData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await providerAPI.updateProvider(id, updateData);
      if (response.data && response.data.success) {
        const updatedProvider = response.data.data;
        
        // Update the provider in the list if it exists
        setProviders(prev => 
          prev.map(provider => 
            provider.id === id ? updatedProvider : provider
          )
        );
        
        // Update current provider if it's the one being edited
        if (currentProvider && currentProvider.id === id) {
          setCurrentProvider(updatedProvider);
        }
        
        return updatedProvider;
      } else {
        throw new Error(response.data?.message || 'Failed to update provider');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while updating provider');
      console.error('Update provider error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [currentProvider]);

  /**
   * Add or update a service for a provider
   * @param {string} providerId Provider ID
   * @param {Object} serviceData Service information
   * @returns {Object|null} Updated provider or null if error
   */
  const addOrUpdateService = useCallback(async (providerId, serviceData) => {
    if (!currentProvider || currentProvider.id !== providerId) {
      // Load the provider first if not loaded
      const provider = await getProviderDetails(providerId);
      if (!provider) {
        return null;
      }
    }
    
    // Services array should be managed through the complete updateProvider function
    // to maintain backend expectations
    const updatedServices = [...(currentProvider.services || [])];
    
    // Check if service already exists (update) or is new (add)
    const serviceIndex = updatedServices.findIndex(s => 
      s.id === serviceData.id || s.name === serviceData.name
    );
    
    if (serviceIndex >= 0) {
      // Update existing service
      updatedServices[serviceIndex] = {
        ...updatedServices[serviceIndex],
        ...serviceData
      };
    } else {
      // Add new service
      updatedServices.push(serviceData);
    }
    
    // Update the provider with the new services array
    return updateProvider(providerId, { services: updatedServices });
  }, [currentProvider, getProviderDetails, updateProvider]);

  /**
   * Remove a service from a provider
   * @param {string} providerId Provider ID
   * @param {string} serviceId Service ID to remove
   * @returns {Object|null} Updated provider or null if error
   */
  const removeService = useCallback(async (providerId, serviceId) => {
    if (!currentProvider || currentProvider.id !== providerId) {
      // Load the provider first if not loaded
      const provider = await getProviderDetails(providerId);
      if (!provider) {
        return null;
      }
    }
    
    // Filter out the service to remove
    const updatedServices = (currentProvider.services || [])
      .filter(service => service.id !== serviceId);
    
    // Update the provider with the filtered services array
    return updateProvider(providerId, { services: updatedServices });
  }, [currentProvider, getProviderDetails, updateProvider]);

  // Load providers when the hook is first used
  useEffect(() => {
    fetchProviders();
  }, [fetchProviders]);

  return {
    providers,
    currentProvider,
    loading,
    refreshing,
    error,
    pagination,
    fetchProviders,
    loadMoreProviders,
    refreshProviders,
    searchProviders,
    filterByCategory,
    getProviderDetails,
    createProvider,
    updateProvider,
    addOrUpdateService,
    removeService,
    clearError: () => setError(null)
  };
};

export default useProviders;

