export const mockProviders = [
  {
    id: '1',
    name: 'Amina Ouédraogo',
    service: 'Nettoyage',
    rating: 4.8,
    reviews: 124,
    location: 'Ouagadougou, Secteur 15',
    price: 2500,
    photo: 'https://example.com/photo1.jpg',
    bio: 'Professionnelle du nettoyage avec 5 ans d\'expérience. Je m\'engage à fournir un service de qualité.',
    availability: ['Lundi', 'Mercredi', 'Vendredi'],
    prices: {
      hourly: 2500,
      daily: 15000
    },
    reviews: [
      {
        user: 'Jean K.',
        rating: 5,
        comment: 'Excellent travail, très professionnelle!',
        date: '2023-05-15'
      },
      {
        user: 'Marie B.',
        rating: 4,
        comment: 'Très bon service, je recommande.',
        date: '2023-04-22'
      }
    ]
  },
  {
    id: '2',
    name: 'Issa Diarra',
    service: 'Plomberie',
    rating: 4.5,
    reviews: 89,
    location: 'Ouagadougou, Secteur 10',
    price: 5000,
    photo: 'https://example.com/photo2.jpg',
    bio: 'Plombier qualifié avec 8 ans d\'expérience. Réparation, installation et maintenance.',
    availability: ['Mardi', 'Jeudi', 'Samedi'],
    prices: {
      callout: 5000,
      hourly: 4000
    }
  }
  // Add more providers as needed
];

export const mockServices = [
  { id: 'clean', name: 'Nettoyage', icon: 'broom' },
  { id: 'plumbing', name: 'Plomberie', icon: 'pipe' },
  { id: 'electric', name: 'Électricité', icon: 'lightning-bolt' },
  { id: 'garden', name: 'Jardinage', icon: 'leaf' },
  { id: 'cook', name: 'Cuisine', icon: 'food' },
  { id: 'care', name: 'Aide à domicile', icon: 'home-heart' }
];