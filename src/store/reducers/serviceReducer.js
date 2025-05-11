const initialState = {
  providers: [],
  loading: false,
  error: null,
};

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROVIDERS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PROVIDERS_SUCCESS':
      return { ...state, loading: false, providers: action.payload };
    case 'FETCH_PROVIDERS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_PROVIDER':
      return { ...state, providers: [...state.providers, action.payload] };
    case 'UPDATE_PROVIDER':
      return {
        ...state,
        providers: state.providers.map(provider =>
          provider.id === action.payload.id ? action.payload : provider
        ),
      };
    case 'DELETE_PROVIDER':
      return {
        ...state,
        providers: state.providers.filter(provider => provider.id !== action.payload),
      };
    default:
      return state;
  }
}