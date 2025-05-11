import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  // Global styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },
  
  // Card styles
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryText,
  },
  service: {
    fontSize: 14,
    color: colors.secondaryText,
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontSize: 12,
    color: colors.secondaryText,
    marginLeft: 4,
  },
  location: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 4,
  },
  bookButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  
  // Filter bar styles
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterPicker: {
    flex: 1,
    height: 40,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginLeft: 8,
  },
  
  // Profile screen styles
  profileContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  largeProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryText,
  },
  profileService: {
    fontSize: 16,
    color: colors.secondaryText,
    marginTop: 4,
  },
  detailsSection: {
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryText,
    marginBottom: 8,
  },
  reviewsSection: {
    backgroundColor: colors.white,
    padding: 16,
  },
  bookNowButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    margin: 16,
  },
  bookNowText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  authTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.primaryText,
  },
  authInput: {
    height: 50,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  authButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  authButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  authLink: {
    color: colors.primary,
    textAlign: 'center',
    marginTop: 10,
  },
  errorText: {
    color: colors.error,
    marginBottom: 15,
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  statCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statTitle: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 5,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 14,
  },
});