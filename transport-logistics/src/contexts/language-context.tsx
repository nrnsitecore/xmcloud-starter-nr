"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: any
}

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      shipping: "Shipping",
      returns: "Returns", 
      shopping: "Shopping",
      sellOnline: "Sell Online",
      marketing: "Marketing",
      ecommerce: "Ecommerce",
      identityServices: "Identity Services",
      postalServices: "Postal Services",
      signIn: "Sign In"
    },
    userTypes: {
      personal: "Personal",
      smallBusiness: "Small Business",
      commercial: "Commercial",
      smallBusinessDesc: "Special rates and tools for small businesses",
      commercialDesc: "Enterprise solutions and volume discounts"
    },
    hero: {
      title: "Reliable Postal Services",
      subtitle: "Fast, secure, and affordable shipping solutions for all your needs",
      trackPlaceholder: "Enter tracking number",
      personal: {
        title: "Reliable Postal Services",
        subtitle: "Fast, secure, and affordable shipping solutions for all your needs"
      },
      "small-business": {
        title: "Grow Your Business with National Post",
        subtitle: "Professional shipping solutions, marketing tools, and e-commerce support to help your small business thrive"
      },
      commercial: {
        title: "Enterprise Postal Solutions",
        subtitle: "Comprehensive shipping, marketing, and identity services designed for large-scale commercial operations"
      }
    },
    quickActions: {
      title: "Quick Actions",
      personal: [
        {
          title: "Send Package",
          desc: "Create shipping labels and schedule pickups",
          icon: "Package"
        },
        {
          title: "Track Package", 
          desc: "Follow your shipments in real-time",
          icon: "Truck"
        },
        {
          title: "Find Locations",
          desc: "Locate nearby postal offices and drop boxes",
          icon: "MapPin"
        },
        {
          title: "Calculate Rates",
          desc: "Get instant shipping quotes",
          icon: "Calculator"
        }
      ],
      "small-business": [
        {
          title: "Track Shipment",
          desc: "Monitor all your business shipments",
          icon: "Truck"
        },
        {
          title: "Snap Ship",
          desc: "Quick shipping for small businesses",
          icon: "Package"
        },
        {
          title: "Snap Admail",
          desc: "Direct mail marketing campaigns",
          icon: "BarChart3"
        },
        {
          title: "Find a Rate",
          desc: "Business shipping rates and discounts",
          icon: "Calculator"
        }
      ],
      commercial: [
        {
          title: "Shipping Manager",
          desc: "Enterprise shipping management platform",
          icon: "Truck"
        },
        {
          title: "Schedule Pickup",
          desc: "Bulk pickup scheduling and management",
          icon: "Calendar"
        },
        {
          title: "Precision Targeter",
          desc: "Advanced demographic targeting tools",
          icon: "Target"
        },
        {
          title: "Find Rates",
          desc: "Commercial pricing and volume discounts",
          icon: "Calculator"
        }
      ]
    },
    services: {
      title: "Our Services",
      domestic: {
        title: "Domestic Shipping",
        desc: "Fast and reliable delivery across the country",
        features: ["Next-day delivery available", "Package tracking included", "Insurance options"]
      },
      international: {
        title: "International Shipping",
        desc: "Worldwide delivery with customs support",
        features: ["Global network coverage", "Customs documentation", "Express options available"]
      },
      business: {
        title: "Business Solutions",
        desc: "Tailored services for businesses of all sizes",
        features: ["Volume discounts", "Account management", "API integration"]
      }
    },
    testimonials: {
      title: "What Our Customers Say",
      items: [
        {
          text: "Excellent service and fast delivery. I use PostalCorp for all my business shipping needs.",
          author: "Sarah Johnson",
          role: "Small Business Owner"
        },
        {
          text: "The tracking system is fantastic. I always know exactly where my packages are.",
          author: "Mike Chen",
          role: "Online Seller"
        },
        {
          text: "Great rates and reliable service. Highly recommended for international shipping.",
          author: "Emma Wilson",
          role: "Import/Export Manager"
        }
      ]
    },
    servicesPage: {
      title: "Shipping Services",
      subtitle: "Choose the perfect shipping solution for your needs",
      standard: {
        title: "Standard Shipping",
        desc: "Reliable delivery for everyday shipping needs",
        features: ["Package tracking", "Basic insurance included", "Delivery confirmation"],
        price: "From $12.99",
        delivery: "3-5 business days"
      },
      express: {
        title: "Express Shipping",
        desc: "Fast delivery when time matters",
        features: ["Priority handling", "Enhanced tracking", "Signature required"],
        price: "From $24.99",
        delivery: "1-2 business days"
      },
      international: {
        title: "International Shipping",
        desc: "Worldwide delivery with customs support",
        features: ["Customs documentation", "International tracking", "Duty and tax calculation"],
        price: "From $39.99",
        delivery: "5-10 business days"
      },
      business: {
        title: "Business Solutions",
        desc: "Comprehensive shipping for businesses",
        features: ["Volume discounts", "Account management", "API integration"],
        price: "Custom pricing",
        delivery: "Flexible options"
      },
      additional: {
        title: "Additional Services",
        items: [
          {
            title: "Insurance",
            desc: "Protect your valuable shipments with comprehensive coverage"
          },
          {
            title: "Signature Confirmation",
            desc: "Ensure secure delivery with required signature"
          },
          {
            title: "Hold for Pickup",
            desc: "Have packages held at postal locations for convenient pickup"
          }
        ]
      }
    },
    sending: {
      title: "Send a Package",
      subtitle: "Create your shipping label in just a few steps",
      step1: {
        title: "Addresses",
        desc: "Enter sender and recipient information",
        from: "From Address",
        fromPlaceholder: "Your name and address...",
        to: "To Address", 
        toPlaceholder: "Recipient name and address..."
      },
      step2: {
        title: "Package Details",
        desc: "Describe your package",
        packageType: "Package Type",
        selectPackage: "Select package type",
        envelope: "Envelope",
        smallBox: "Small Box",
        mediumBox: "Medium Box",
        largeBox: "Large Box",
        weight: "Weight",
        dimensions: "Dimensions"
      },
      step3: {
        title: "Service & Options",
        desc: "Choose your shipping service",
        service: "Shipping Service",
        selectService: "Select service",
        standard: "Standard (3-5 days)",
        express: "Express (1-2 days)",
        overnight: "Overnight",
        insurance: "Add insurance coverage",
        signature: "Require signature on delivery",
        estimate: "Shipping Estimate",
        cost: "Cost",
        delivery: "Delivery",
        businessDays: "business days"
      },
      step4: {
        title: "Payment",
        desc: "Complete your shipment",
        summary: "Order Summary",
        service: "Service",
        total: "Total",
        delivery: "Delivery",
        businessDays: "business days",
        cardNumber: "Card Number",
        expiry: "Expiry Date",
        cvv: "CVV",
        complete: "Complete Order"
      }
    },
    receiving: {
      title: "Receiving Packages",
      subtitle: "Track, manage, and receive your shipments",
      tabs: {
        track: "Track Package",
        manage: "Manage Delivery",
        locations: "Pickup Locations"
      },
      track: {
        title: "Track Your Package",
        desc: "Enter your tracking number to see the latest updates",
        placeholder: "Enter tracking number",
        button: "Track Package",
        package: "Package",
        estimated: "Estimated Delivery",
        currentLocation: "Current Location",
        updates: "Recent Updates",
        statuses: {
          "delivered": "Delivered",
          "in-transit": "In Transit",
          "delayed": "Delayed"
        }
      },
      manage: {
        delivery: {
          title: "Delivery Options",
          desc: "Manage how and when you receive your packages",
          reschedule: "Reschedule Delivery",
          redirect: "Redirect Package",
          hold: "Hold for Pickup"
        },
        notifications: {
          title: "Delivery Notifications",
          desc: "Stay updated on your package status",
          email: "Email Address",
          phone: "Phone Number",
          setup: "Setup Notifications"
        }
      },
      locations: {
        title: "Pickup Locations",
        desc: "Find nearby locations to pick up your packages",
        search: "Enter postal code or address",
        directions: "Get Directions",
        nearby: [
          {
            name: "Downtown Postal Office",
            address: "123 Main St, Toronto, ON M5V 3A8",
            hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
            distance: "0.5 km"
          },
          {
            name: "Westside Postal Outlet",
            address: "456 Queen St W, Toronto, ON M5V 2B7",
            hours: "Mon-Fri: 8AM-7PM, Sat: 9AM-5PM",
            distance: "1.2 km"
          },
          {
            name: "North York Distribution Center",
            address: "789 Yonge St, North York, ON M2M 3K1",
            hours: "Mon-Fri: 7AM-8PM, Sat: 8AM-6PM",
            distance: "2.8 km"
          }
        ]
      }
    },
    shopping: {
      title: "Postal Shop",
      subtitle: "Stamps, coins, and postal supplies",
      cart: "Cart",
      search: "Search products...",
      addToCart: "Add to Cart",
      filters: "Filters",
      tabs: {
        stamps: "Stamps",
        coins: "Coins", 
        supplies: "Supplies"
      },
      sort: {
        featured: "Featured",
        priceLow: "Price: Low to High",
        priceHigh: "Price: High to Low",
        newest: "Newest First"
      },
      stamps: {
        items: [
          {
            name: "Canadian Flag Commemorative",
            desc: "Beautiful commemorative stamp featuring the Canadian flag"
          },
          {
            name: "Wildlife Series - Moose",
            desc: "Part of our popular Canadian wildlife stamp collection"
          },
          {
            name: "Holiday Collection 2024",
            desc: "Limited edition holiday-themed stamps"
          }
        ]
      },
      coins: {
        items: [
          {
            name: "Canada 150 Commemorative Coin",
            desc: "Special edition coin celebrating Canada's 150th anniversary"
          },
          {
            name: "Silver Maple Leaf Collector Edition",
            desc: "Premium silver coin with detailed maple leaf design"
          },
          {
            name: "Wildlife Coin Set",
            desc: "Complete set featuring Canadian wildlife designs"
          }
        ]
      },
      supplies: {
        title: "Postal Supplies",
        desc: "Everything you need for shipping and mailing",
        browse: "Browse Supplies"
      }
    },
    common: {
      next: "Next",
      back: "Back",
      search: "Search",
      learnMore: "Learn More",
      selectService: "Select Service"
    },
    footer: {
      description: "Your trusted postal service provider for over 50 years",
      services: {
        title: "Services",
        items: ["Domestic Shipping", "International Shipping", "Business Solutions", "Package Tracking"]
      },
      support: {
        title: "Support",
        items: ["Help Center", "Contact Us", "Shipping Calculator", "Find Locations"]
      },
      company: {
        title: "Company",
        items: ["About Us", "Careers", "News", "Investor Relations"]
      },
      rights: "All rights reserved."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      shipping: "Expédition",
      returns: "Retours",
      shopping: "Boutique",
      sellOnline: "Vendre en ligne",
      marketing: "Marketing",
      ecommerce: "Commerce électronique",
      identityServices: "Services d'identité",
      postalServices: "Services postaux",
      signIn: "Se connecter"
    },
    userTypes: {
      personal: "Personnel",
      smallBusiness: "Petite entreprise",
      commercial: "Commercial",
      smallBusinessDesc: "Tarifs spéciaux et outils pour petites entreprises",
      commercialDesc: "Solutions d'entreprise et remises sur volume"
    },
    hero: {
      title: "Services postaux fiables",
      subtitle: "Solutions d'expédition rapides, sécurisées et abordables pour tous vos besoins",
      trackPlaceholder: "Entrez le numéro de suivi",
      personal: {
        title: "Services postaux fiables",
        subtitle: "Solutions d'expédition rapides, sécurisées et abordables pour tous vos besoins"
      },
      "small-business": {
        title: "Développez votre entreprise avec Postes Nationales",
        subtitle: "Solutions d'expédition professionnelles, outils marketing et support e-commerce pour aider votre petite entreprise à prospérer"
      },
      commercial: {
        title: "Solutions postales d'entreprise",
        subtitle: "Services complets d'expédition, marketing et d'identité conçus pour les opérations commerciales à grande échelle"
      }
    },
    quickActions: {
      title: "Actions rapides",
      personal: [
        {
          title: "Envoyer un colis",
          desc: "Créer des étiquettes d'expédition et planifier les collectes",
          icon: "Package"
        },
        {
          title: "Suivre un colis",
          desc: "Suivez vos expéditions en temps réel",
          icon: "Truck"
        },
        {
          title: "Trouver des emplacements",
          desc: "Localiser les bureaux de poste et boîtes de dépôt à proximité",
          icon: "MapPin"
        },
        {
          title: "Calculer les tarifs",
          desc: "Obtenez des devis d'expédition instantanés",
          icon: "Calculator"
        }
      ],
      "small-business": [
        {
          title: "Suivre l'expédition",
          desc: "Surveillez toutes vos expéditions d'entreprise",
          icon: "Truck"
        },
        {
          title: "Expédition rapide",
          desc: "Expédition rapide pour petites entreprises",
          icon: "Package"
        },
        {
          title: "Publipostage rapide",
          desc: "Campagnes de marketing direct par courrier",
          icon: "BarChart3"
        },
        {
          title: "Trouver un tarif",
          desc: "Tarifs d'expédition d'entreprise et remises",
          icon: "Calculator"
        }
      ],
      commercial: [
        {
          title: "Gestionnaire d'expédition",
          desc: "Plateforme de gestion d'expédition d'entreprise",
          icon: "Truck"
        },
        {
          title: "Planifier la collecte",
          desc: "Planification et gestion de collecte en vrac",
          icon: "Calendar"
        },
        {
          title: "Ciblage de précision",
          desc: "Outils de ciblage démographique avancés",
          icon: "Target"
        },
        {
          title: "Trouver les tarifs",
          desc: "Tarification commerciale et remises sur volume",
          icon: "Calculator"
        }
      ]
    },
    services: {
      title: "Nos services",
      domestic: {
        title: "Expédition domestique",
        desc: "Livraison rapide et fiable à travers le pays",
        features: ["Livraison le lendemain disponible", "Suivi de colis inclus", "Options d'assurance"]
      },
      international: {
        title: "Expédition internationale",
        desc: "Livraison mondiale avec support douanier",
        features: ["Couverture du réseau mondial", "Documentation douanière", "Options express disponibles"]
      },
      business: {
        title: "Solutions d'affaires",
        desc: "Services adaptés aux entreprises de toutes tailles",
        features: ["Remises sur volume", "Gestion de compte", "Intégration API"]
      }
    },
    testimonials: {
      title: "Ce que disent nos clients",
      items: [
        {
          text: "Excellent service et livraison rapide. J'utilise PostalCorp pour tous mes besoins d'expédition d'entreprise.",
          author: "Sarah Johnson",
          role: "Propriétaire de petite entreprise"
        },
        {
          text: "Le système de suivi est fantastique. Je sais toujours exactement où sont mes colis.",
          author: "Mike Chen",
          role: "Vendeur en ligne"
        },
        {
          text: "Excellents tarifs et service fiable. Hautement recommandé pour l'expédition internationale.",
          author: "Emma Wilson",
          role: "Gestionnaire import/export"
        }
      ]
    },
    servicesPage: {
      title: "Services d'expédition",
      subtitle: "Choisissez la solution d'expédition parfaite pour vos besoins",
      standard: {
        title: "Expédition standard",
        desc: "Livraison fiable pour les besoins d'expédition quotidiens",
        features: ["Suivi de colis", "Assurance de base incluse", "Confirmation de livraison"],
        price: "À partir de 12,99 $",
        delivery: "3-5 jours ouvrables"
      },
      express: {
        title: "Expédition express",
        desc: "Livraison rapide quand le temps compte",
        features: ["Traitement prioritaire", "Suivi amélioré", "Signature requise"],
        price: "À partir de 24,99 $",
        delivery: "1-2 jours ouvrables"
      },
      international: {
        title: "Expédition internationale",
        desc: "Livraison mondiale avec support douanier",
        features: ["Documentation douanière", "Suivi international", "Calcul des droits et taxes"],
        price: "À partir de 39,99 $",
        delivery: "5-10 jours ouvrables"
      },
      business: {
        title: "Solutions d'affaires",
        desc: "Expédition complète pour les entreprises",
        features: ["Remises sur volume", "Gestion de compte", "Intégration API"],
        price: "Tarification personnalisée",
        delivery: "Options flexibles"
      },
      additional: {
        title: "Services supplémentaires",
        items: [
          {
            title: "Assurance",
            desc: "Protégez vos expéditions précieuses avec une couverture complète"
          },
          {
            title: "Confirmation de signature",
            desc: "Assurez une livraison sécurisée avec signature requise"
          },
          {
            title: "Retenir pour collecte",
            desc: "Faire retenir les colis aux emplacements postaux pour une collecte pratique"
          }
        ]
      }
    },
    sending: {
      title: "Envoyer un colis",
      subtitle: "Créez votre étiquette d'expédition en quelques étapes",
      step1: {
        title: "Adresses",
        desc: "Entrez les informations de l'expéditeur et du destinataire",
        from: "Adresse de l'expéditeur",
        fromPlaceholder: "Votre nom et adresse...",
        to: "Adresse du destinataire",
        toPlaceholder: "Nom et adresse du destinataire..."
      },
      step2: {
        title: "Détails du colis",
        desc: "Décrivez votre colis",
        packageType: "Type de colis",
        selectPackage: "Sélectionnez le type de colis",
        envelope: "Enveloppe",
        smallBox: "Petite boîte",
        mediumBox: "Boîte moyenne",
        largeBox: "Grande boîte",
        weight: "Poids",
        dimensions: "Dimensions"
      },
      step3: {
        title: "Service et options",
        desc: "Choisissez votre service d'expédition",
        service: "Service d'expédition",
        selectService: "Sélectionnez le service",
        standard: "Standard (3-5 jours)",
        express: "Express (1-2 jours)",
        overnight: "Livraison le lendemain",
        insurance: "Ajouter une couverture d'assurance",
        signature: "Exiger une signature à la livraison",
        estimate: "Estimation d'expédition",
        cost: "Coût",
        delivery: "Livraison",
        businessDays: "jours ouvrables"
      },
      step4: {
        title: "Paiement",
        desc: "Complétez votre expédition",
        summary: "Résumé de la commande",
        service: "Service",
        total: "Total",
        delivery: "Livraison",
        businessDays: "jours ouvrables",
        cardNumber: "Numéro de carte",
        expiry: "Date d'expiration",
        cvv: "CVV",
        complete: "Finaliser la commande"
      }
    },
    receiving: {
      title: "Réception de colis",
      subtitle: "Suivez, gérez et recevez vos expéditions",
      tabs: {
        track: "Suivre un colis",
        manage: "Gérer la livraison",
        locations: "Lieux de collecte"
      },
      track: {
        title: "Suivez votre colis",
        desc: "Entrez votre numéro de suivi pour voir les dernières mises à jour",
        placeholder: "Entrez le numéro de suivi",
        button: "Suivre le colis",
        package: "Colis",
        estimated: "Livraison estimée",
        currentLocation: "Emplacement actuel",
        updates: "Mises à jour récentes",
        statuses: {
          "delivered": "Livré",
          "in-transit": "En transit",
          "delayed": "Retardé"
        }
      },
      manage: {
        delivery: {
          title: "Options de livraison",
          desc: "Gérez comment et quand vous recevez vos colis",
          reschedule: "Reprogrammer la livraison",
          redirect: "Rediriger le colis",
          hold: "Retenir pour collecte"
        },
        notifications: {
          title: "Notifications de livraison",
          desc: "Restez informé du statut de votre colis",
          email: "Adresse e-mail",
          phone: "Numéro de téléphone",
          setup: "Configurer les notifications"
        }
      },
      locations: {
        title: "Lieux de collecte",
        desc: "Trouvez des emplacements à proximité pour récupérer vos colis",
        search: "Entrez le code postal ou l'adresse",
        directions: "Obtenir des directions",
        nearby: [
          {
            name: "Bureau de poste du centre-ville",
            address: "123 rue Main, Toronto, ON M5V 3A8",
            hours: "Lun-Ven: 9h-18h, Sam: 9h-16h",
            distance: "0,5 km"
          },
          {
            name: "Point de vente postal Westside",
            address: "456 rue Queen O, Toronto, ON M5V 2B7",
            hours: "Lun-Ven: 8h-19h, Sam: 9h-17h",
            distance: "1,2 km"
          },
          {
            name: "Centre de distribution North York",
            address: "789 rue Yonge, North York, ON M2M 3K1",
            hours: "Lun-Ven: 7h-20h, Sam: 8h-18h",
            distance: "2,8 km"
          }
        ]
      }
    },
    shopping: {
      title: "Boutique postale",
      subtitle: "Timbres, pièces de monnaie et fournitures postales",
      cart: "Panier",
      search: "Rechercher des produits...",
      addToCart: "Ajouter au panier",
      filters: "Filtres",
      tabs: {
        stamps: "Timbres",
        coins: "Pièces de monnaie",
        supplies: "Fournitures"
      },
      sort: {
        featured: "En vedette",
        priceLow: "Prix: Bas à élevé",
        priceHigh: "Prix: Élevé à bas",
        newest: "Plus récent en premier"
      },
      stamps: {
        items: [
          {
            name: "Commémoratif du drapeau canadien",
            desc: "Magnifique timbre commémoratif avec le drapeau canadien"
          },
          {
            name: "Série faune - Orignal",
            desc: "Partie de notre collection populaire de timbres de la faune canadienne"
          },
          {
            name: "Collection des fêtes 2024",
            desc: "Timbres à thème des fêtes en édition limitée"
          }
        ]
      },
      coins: {
        items: [
          {
            name: "Pièce commémorative Canada 150",
            desc: "Pièce d'édition spéciale célébrant le 150e anniversaire du Canada"
          },
          {
            name: "Édition de collection Feuille d'érable argentée",
            desc: "Pièce d'argent premium avec design détaillé de feuille d'érable"
          },
          {
            name: "Ensemble de pièces de la faune",
            desc: "Ensemble complet avec des designs de la faune canadienne"
          }
        ]
      },
      supplies: {
        title: "Fournitures postales",
        desc: "Tout ce dont vous avez besoin pour l'expédition et l'envoi postal",
        browse: "Parcourir les fournitures"
      }
    },
    common: {
      next: "Suivant",
      back: "Retour",
      search: "Rechercher",
      learnMore: "En savoir plus",
      selectService: "Sélectionner le service"
    },
    footer: {
      description: "Votre fournisseur de services postaux de confiance depuis plus de 50 ans",
      services: {
        title: "Services",
        items: ["Expédition domestique", "Expédition internationale", "Solutions d'affaires", "Suivi de colis"]
      },
      support: {
        title: "Support",
        items: ["Centre d'aide", "Nous contacter", "Calculateur d'expédition", "Trouver des emplacements"]
      },
      company: {
        title: "Entreprise",
        items: ["À propos de nous", "Carrières", "Nouvelles", "Relations avec les investisseurs"]
      },
      rights: "Tous droits réservés."
    }
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
