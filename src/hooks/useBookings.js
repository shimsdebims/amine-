import { useState, useEffect, useCallback } from 'react';
import { bookingAPI, paymentAPI } from '../api';
import { useAuth } from '../context/AuthContext';

/**
 * Custom hook for managing booking operations
 * @returns {Object} Booking methods and state
 */
const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  /**
   * Fetch all bookings for the current user
   */
  const fetchBookings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await bookingAPI.getBookings();
      if (response.data && response.data.success) {
        setBookings(response.data.data);
      } else {
        throw new Error(response.data?.message || 'Failed to fetch bookings');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while fetching bookings');
      console.error('Fetch bookings error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Refresh bookings list (for pull-to-refresh functionality)
   */
  const refreshBookings = useCallback(async () => {
    setRefreshing(true);
    setError(null);
    try {
      const response = await bookingAPI.getBookings();
      if (response.data && response.data.success) {
        setBookings(response.data.data);
      } else {
        throw new Error(response.data?.message || 'Failed to refresh bookings');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while refreshing bookings');
      console.error('Refresh bookings error:', err);
    } finally {
      setRefreshing(false);
    }
  }, []);

  /**
   * Get details of a specific booking
   * @param {string} id Booking ID
   * @returns {Object|null} Booking details or null if error
   */
  const getBookingDetails = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await bookingAPI.getBookingById(id);
      if (response.data && response.data.success) {
        setCurrentBooking(response.data.data);
        return response.data.data;
      } else {
        throw new Error(response.data?.message || 'Failed to fetch booking details');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while fetching booking details');
      console.error('Get booking details error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Create a new booking
   * @param {Object} bookingData Booking information
   * @returns {Object|null} Created booking or null if error
   */
  const createBooking = useCallback(async (bookingData) => {
    setLoading(true);
    setError(null);
    try {
      // Ensure all required fields are present
      if (!bookingData.provider || !bookingData.date || !bookingData.startTime) {
        throw new Error('Missing required booking information');
      }

      const response = await bookingAPI.createBooking(bookingData);
      if (response.data && response.data.success) {
        // Add the new booking to the list
        setBookings(prev => [response.data.data, ...prev]);
        setCurrentBooking(response.data.data);
        return response.data.data;
      } else {
        throw new Error(response.data?.message || 'Failed to create booking');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while creating the booking');
      console.error('Create booking error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Update an existing booking
   * @param {string} id Booking ID
   * @param {Object} updateData Updated booking information
   * @returns {Object|null} Updated booking or null if error
   */
  const updateBooking = useCallback(async (id, updateData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await bookingAPI.updateBooking(id, updateData);
      if (response.data && response.data.success) {
        // Update the booking in the list
        setBookings(prev => 
          prev.map(booking => 
            booking.id === id ? response.data.data : booking
          )
        );
        
        // Update current booking if it's the one being edited
        if (currentBooking && currentBooking.id === id) {
          setCurrentBooking(response.data.data);
        }
        
        return response.data.data;
      } else {
        throw new Error(response.data?.message || 'Failed to update booking');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while updating the booking');
      console.error('Update booking error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [currentBooking]);

  /**
   * Cancel a booking
   * @param {string} id Booking ID
   * @returns {boolean} Success status
   */
  const cancelBooking = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      // Update booking status to cancelled
      const response = await bookingAPI.updateBooking(id, { status: 'cancelled' });
      if (response.data && response.data.success) {
        // Update the booking in the list
        setBookings(prev => 
          prev.map(booking => 
            booking.id === id ? { ...booking, status: 'cancelled' } : booking
          )
        );
        
        // Update current booking if it's the one being cancelled
        if (currentBooking && currentBooking.id === id) {
          setCurrentBooking({ ...currentBooking, status: 'cancelled' });
        }
        
        return true;
      } else {
        throw new Error(response.data?.message || 'Failed to cancel booking');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while cancelling the booking');
      console.error('Cancel booking error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  }, [currentBooking]);

  /**
   * Process payment for a booking
   * @param {Object} paymentData Payment information
   * @returns {Object|null} Payment result or null if error
   */
  const processPayment = useCallback(async (paymentData) => {
    setLoading(true);
    setError(null);
    try {
      if (!paymentData.booking || !paymentData.paymentMethod) {
        throw new Error('Missing required payment information');
      }

      const response = await paymentAPI.createPayment(paymentData);
      if (response.data && response.data.success) {
        // Fetch updated booking after payment
        await getBookingDetails(paymentData.booking);
        return response.data.data;
      } else {
        throw new Error(response.data?.message || 'Payment processing failed');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while processing payment');
      console.error('Payment processing error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [getBookingDetails]);

  // Load bookings when the hook is first used
  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user, fetchBookings]);

  return {
    bookings,
    currentBooking,
    loading,
    refreshing,
    error,
    fetchBookings,
    refreshBookings,
    getBookingDetails,
    createBooking,
    updateBooking,
    cancelBooking,
    processPayment,
    clearError: () => setError(null)
  };
};

export default useBookings;

