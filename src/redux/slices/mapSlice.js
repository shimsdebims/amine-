import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userLocation: null,
  region: null,
  selectedProvider: null,
  providers: [],
  loading: false,
  error: null,
  filters: {
    category: null,
    maxDistance: 10, // kilometers
    minRating: 0,
    availability: 'all' // 'all', 'available', 'unavailable'
  }
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    updateUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
    updateRegion: (state, action) => {
      state.region = action.payload;
    },
    setSelectedProvider: (state, action) => {
      state.selectedProvider = action.payload;
    },
    setProviders: (state, action) => {
      state.providers = action.payload;
    },
    updateProviderStatus: (state, action) => {
      const { providerId, isAvailable } = action.payload;
      const provider = state.providers.find(p => p.id === providerId);
      if (provider) {
        provider.isAvailable = isAvailable;
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    }
  }
});

// Export actions
export const {
  updateUserLocation,
  updateRegion,
  setSelectedProvider,
  setProviders,
  updateProviderStatus,
  setLoading,
  setError,
  updateFilters,
  clearFilters
} = mapSlice.actions;

// Thunks
export const fetchNearbyProviders = ({ latitude, longitude, radius }) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // Replace with your API call
    const response = await fetch(`/api/providers/nearby?lat=${latitude}&lng=${longitude}&radius=${radius}`);
    const data = await response.json();
    
    if (response.ok) {
      dispatch(setProviders(data));
    } else {
      dispatch(setError(data.message));
    }
  } catch (error) {
    dispatch(setError('Failed to fetch providers'));
  } finally {
    dispatch(setLoading(false));
  }
};

// Selectors
export const selectFilteredProviders = (state) => {
  const { providers, filters } = state.map;
  return providers.filter(provider => {
    // Filter by category
    if (filters.category && provider.category !== filters.category) {
      return false;
    }
    
    // Filter by availability
    if (filters.availability !== 'all') {
      const isAvailable = filters.availability === 'available';
      if (provider.isAvailable !== isAvailable) {
        return false;
      }
    }
    
    // Filter by rating
    if (provider.rating < filters.minRating) {
      return false;
    }
    
    // Add distance filtering here when implemented
    
    return true;
  });
};

export default mapSlice.reducer;

