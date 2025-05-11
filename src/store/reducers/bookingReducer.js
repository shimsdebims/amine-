const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

export default function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BOOKINGS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_BOOKINGS_SUCCESS':
      return { ...state, loading: false, bookings: action.payload };
    case 'FETCH_BOOKINGS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_BOOKING':
      return { ...state, bookings: [...state.bookings, action.payload] };
    case 'UPDATE_BOOKING_STATUS':
      return {
        ...state,
        bookings: state.bookings.map(booking =>
          booking.id === action.payload.id
            ? { ...booking, status: action.payload.status }
            : booking
        ),
      };
    default:
      return state;
  }
}