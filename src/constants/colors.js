// App color palette
export const colors = {
  // Primary colors
  primary: '#FF7F50', // Coral - main brand color
  primaryDark: '#FF6347', // Darker shade of primary
  primaryLight: '#FFA07A', // Lighter shade of primary

  // Secondary colors
  secondary: '#2196F3', // Blue - secondary brand color
  secondaryDark: '#1976D2',
  secondaryLight: '#64B5F6',

  // Status colors
  success: '#4CAF50', // Green for success states
  warning: '#FFC107', // Yellow for warnings
  error: '#F44336', // Red for errors
  info: '#2196F3', // Blue for information

  // Common UI colors
  background: '#FFFFFF',
  surface: '#F5F5F5',
  divider: '#E0E0E0',

  // Text colors
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
    inverse: '#FFFFFF',
  },

  // Status indicators
  status: {
    pending: '#FFC107',
    confirmed: '#2196F3',
    inProgress: '#FF7F50',
    completed: '#4CAF50',
    cancelled: '#F44336',
  },

  // Rating colors
  rating: {
    star: '#FFC107', // Gold color for stars
    empty: '#E0E0E0', // Gray for empty stars
  },

  // Category colors (for category buttons)
  category: {
    active: '#FF7F50',
    inactive: '#F5F5F5',
    textActive: '#FFFFFF',
    textInactive: '#757575',
  },
};

// Named color constants for specific use cases
export const TRANSPARENT = 'transparent';
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';

export default colors;
// Include additional payment colors from second definition
colors.payment = {
  orangeMoney: '#FF6D00',
};
