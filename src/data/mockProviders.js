// Mock data for Ouagadougou-based service providers
export const mockProviders = [
  {
    id: '1',
    name: 'John Doe',
    category: 'Plumber',
    rating: 4.5,
    isAvailable: true,
    latitude: 12.3717,
    longitude: -1.5197,
    services: ['Pipe repair', 'Installation', 'Maintenance'],
    phone: '+226 70123456',
    price: '5000-15000 FCFA',
    experience: '5 years',
    certifications: ['Professional Plumber Certificate'],
    reviews: [
      { rating: 5, comment: 'Excellent work, very professional', date: '2024-05-20' },
      { rating: 4, comment: 'Good service, on time', date: '2024-05-15' }
    ]
  },
  {
    id: '2',
    name: 'Marie Ouedraogo',
    category: 'Electrician',
    rating: 4.8,
    isAvailable: true,
    latitude: 12.3723,
    longitude: -1.5177,
    services: ['Wiring', 'Installation', 'Repairs'],
    phone: '+226 70123457',
    price: '3000-20000 FCFA',
    experience: '8 years',
    certifications: ['Master Electrician'],
    reviews: [
      { rating: 5, comment: 'Very knowledgeable and efficient', date: '2024-05-18' }
    ]
  },
  {
    id: '3',
    name: 'Ibrahim Sawadogo',
    category: 'Carpenter',
    rating: 4.2,
    isAvailable: false,
    latitude: 12.3697,
    longitude: -1.5217,
    services: ['Furniture repair', 'Custom builds', 'Installation'],
    phone: '+226 70123458',
    price: '10000-50000 FCFA',
    experience: '10 years',
    certifications: ['Certified Carpenter'],
    reviews: [
      { rating: 4, comment: 'Quality work but took longer than expected', date: '2024-05-10' }
    ]
  }
];

export const categories = [
  'Plumber',
  'Electrician',
  'Carpenter',
  'Painter',
  'Cleaner',
  'Mechanic',
  'Gardener',
  'Security'
];

