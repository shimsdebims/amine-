export const mockProviders = [
  {
    id: '1',
    businessName: 'Amina Ouédraogo Services de Nettoyage',
    description: 'Professionnelle du nettoyage avec 5 ans d\'expérience. Je m\'engage à fournir un service de qualité.',
    category: 'Nettoyage',
    rating: 4.8,
    reviewCount: 124,
    phone: '+22675000000',
    email: 'amina@nettoyage.bf',
    address: 'Secteur 15, Ouagadougou',
    image: 'https://example.com/cleaning.jpg',
    availability: ['Lundi', 'Mercredi', 'Vendredi'],
    services: [
      {
        id: '1',
        name: 'Nettoyage de Base',
        description: 'Nettoyage général des espaces de vie, cuisine et salles de bain.',
        price: 2500,
        duration: 120
      },
      {
        id: '2',
        name: 'Nettoyage Approfondi',
        description: 'Nettoyage complet incluant les zones difficiles d\'accès.',
        price: 15000,
        duration: 240
      }
    ]
  },
  {
    id: '2',
    businessName: 'Issa Diarra Plomberie',
    description: 'Plombier qualifié avec 8 ans d\'expérience. Réparation, installation et maintenance.',
    category: 'Plomberie',
    rating: 4.5,
    reviewCount: 89,
    phone: '+22676000000',
    email: 'issa@plomberie.bf',
    address: 'Secteur 10, Ouagadougou',
    image: 'https://example.com/plumbing.jpg',
    availability: ['Mardi', 'Jeudi', 'Samedi'],
    services: [
      {
        id: '3',
        name: 'Réparation de Tuyauterie',
        description: 'Réparation des fuites et tuyaux cassés.',
        price: 5000,
        duration: 90
      },
      {
        id: '4',
        name: 'Installation Évier',
        description: 'Installation de nouveaux éviers ou remplacement.',
        price: 35000,
        duration: 120
      }
    ]
  }
];

export const mockBookings = [
  {
    id: '1',
    service: {
      name: 'Nettoyage de Base',
      price: 2500
    },
    provider: {
      businessName: 'Amina Ouédraogo Services de Nettoyage'
    },
    user: {
      name: 'Jean Kaboré'
    },
    date: '2024-05-20',
    time: '09:00',
    status: 'en attente',
    totalAmount: 2500
  },
  {
    id: '2',
    service: {
      name: 'Réparation de Tuyauterie',
      price: 5000
    },
    provider: {
      businessName: 'Issa Diarra Plomberie'
    },
    user: {
      name: 'Marie Bamogo'
    },
    date: '2024-05-21',
    time: '14:00',
    status: 'terminé',
    totalAmount: 5000
  }
];

export const mockUsers = [
  {
    id: '1',
    name: 'Jean Kaboré',
    email: 'jean@example.bf',
    phone: '+22677000000',
    role: 'utilisateur',
    createdAt: '2024-01-15',
    bookingsCount: 3
  },
  {
    id: '2',
    name: 'Amina Ouédraogo',
    email: 'amina@nettoyage.bf',
    phone: '+22678000000',
    role: 'prestataire',
    createdAt: '2024-01-10',
    bookingsCount: 15,
    provider: {
      businessName: 'Amina Ouédraogo Services de Nettoyage',
      servicesCount: 2
    }
  }
];

export const mockCategories = [
  {
    id: '1',
    name: 'Nettoyage',
    icon: 'broom',
    description: 'Services de nettoyage professionnel'
  },
  {
    id: '2',
    name: 'Plomberie',
    icon: 'water-pump',
    description: 'Services de plomberie expert'
  },
  {
    id: '3',
    name: 'Électricité',
    icon: 'lightning-bolt',
    description: 'Installation et réparation électrique'
  },
  {
    id: '4',
    name: 'Peinture',
    icon: 'format-paint',
    description: 'Services de peinture intérieure et extérieure'
  },
  {
    id: '5',
    name: 'Jardinage',
    icon: 'leaf',
    description: 'Entretien et aménagement de jardins'
  },
  {
    id: '6',
    name: 'Aide à domicile',
    icon: 'home-heart',
    description: 'Services d\'assistance à domicile'
  }
];

export const mockReviews = [
  {
    id: '1',
    user: {
      name: 'Jean Kaboré'
    },
    provider: {
      businessName: 'Amina Ouédraogo Services de Nettoyage'
    },
    rating: 5,
    comment: 'Excellent service, très professionnelle!',
    date: '2024-05-15'
  },
  {
    id: '2',
    user: {
      name: 'Marie Bamogo'
    },
    provider: {
      businessName: 'Issa Diarra Plomberie'
    },
    rating: 4,
    comment: 'Très bon service, ponctuel et efficace',
    date: '2024-05-14'
  }
];

// Add an export for all mock data
export default {
  providers: mockProviders,
  bookings: mockBookings,
  users: mockUsers,
  categories: mockCategories,
  reviews: mockReviews
};
