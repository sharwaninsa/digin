
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Heart, 
  Users, 
  BookOpen, 
  Globe,
  Camera,
  Newspaper,
  Mail,
  Phone,
  MapPin,
  Target,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Star,
  HelpCircle,
  FileText,
  Split
} from 'lucide-react';

export const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/mission', label: 'Our Mission' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/press-release', label: 'Press Release' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact Us' }
];

export const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/mission', label: 'Our Mission' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/press-release', label: 'Press Release' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact Us' },
  { path: '/get-involved', label: 'Get Involved' },
  { path: '/faq', label: 'FAQ' },
  { path: '/annual-reports', label: 'Annual Reports' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
  { path: '/sitemap', label: 'Sitemap' }
];

export const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/digin' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/digin' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/digin' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/digin' }
];

export const contactInfo = {
  address: '57, Kotla Village, Shamas Pur, East Delhi, Delhi - 110091',
  phone: '+91 99999 99999',
  email: 'info@digin.org.in',
  mapLocation: 'https://maps.google.com/?q=57+Kotla+Village+Delhi',
  officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM'
};

export const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1488521787991-1c5e3e1836c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Empowering Communities Through Digital Literacy',
    description: 'Bridging the digital divide in rural India with innovative education programs.',
    alt: 'Community digital literacy program',
    category: 'Digital Empowerment'
  },
  {
    url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Preserving India\'s Rich Cultural Heritage',
    description: 'Documenting and promoting traditional arts, music, and crafts for future generations.',
    alt: 'Cultural preservation initiative',
    category: 'Cultural Heritage'
  },
  {
    url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Nurturing Young Leaders',
    description: 'Comprehensive youth development programs shaping tomorrow\'s change-makers.',
    alt: 'Youth leadership program',
    category: 'Youth Development'
  },
  {
    url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Sustainable Healthcare Initiatives',
    description: 'Bringing quality healthcare and awareness to underserved communities.',
    alt: 'Healthcare awareness camp',
    category: 'Healthcare'
  }
];

export const homeStats = [
  { value: '15+', label: 'Years of Service', icon: "Clock" },
  { value: '100K+', label: 'Lives Impacted', icon: "Users" },
  { value: '250+', label: 'Projects Completed', icon: "Award" },
  { value: '500+', label: 'Active Volunteers', icon: "Heart" }
];

export const impactMetrics = [
  {
    icon: Users,
    title: 'Community Reach',
    description: 'Direct beneficiaries across India',
    value: '100,000+'
  },
  {
    icon: TrendingUp,
    title: 'Digital Literacy',
    description: 'People trained in digital skills',
    value: '50,000+'
  },
  {
    icon: Shield,
    title: 'Program Success Rate',
    description: 'Sustainable impact achievement',
    value: '94%'
  }
];


export const homeFeatures = [
  {
    icon: Heart,
    title: 'Community Development',
    description: 'Holistic development programs focusing on education, healthcare, and livelihood enhancement for marginalized communities.',
    link: '/mission'
  },
  {
    icon: Users,
    title: 'Youth Leadership',
    description: 'Comprehensive training programs nurturing young leaders through workshops, mentorship, and hands-on project experience.',
    link: '/mission'
  },
  {
    icon: BookOpen,
    title: 'Digital Education',
    description: 'Cutting-edge digital literacy initiatives bridging the technology gap in rural and underserved areas.',
    link: '/mission'
  },
  {
    icon: Globe,
    title: 'Cultural Preservation',
    description: 'Documentation and promotion of traditional arts, crafts, and cultural practices for future generations.',
    link: '/mission'
  }
];


export const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Community Leader',
    image: 'https://images.unsplash.com/photo-1494790108777-766dab1e9c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    quote: 'DIGIN transformed our village with digital literacy programs. Now our youth can compete in the modern world.',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    role: 'Volunteer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    quote: 'Being part of DIGIN has been life-changing. The impact we create together is truly remarkable.',
    rating: 5
  },
  {
    name: 'Anita Desai',
    role: 'Beneficiary',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    quote: 'Through DIGIN\'s skill training, I started my own small business. I\'m now financially independent.',
    rating: 5
  }
];


export const aboutContent = {
  title: 'About DIGIN',
  description: 'Dynamic Initiative for Grassroot Impact Network (DIGIN) is a premier public charitable trust established in 2026 with a visionary approach to create sustainable social impact through the strategic integration of digital media, education, and community engagement.',
  vision: 'To create an empowered, equitable, and progressive society where every individual, regardless of their background, has access to quality education, information, digital resources, and opportunities for holistic growth and development.',
  mission: 'To leverage cutting-edge digital media technologies and active community participation for comprehensive social development, cultural preservation, and sustainable transformation at the grassroots level.',
  history: [
    {
      year: '2024',
      title: 'Foundation & Vision',
      description: 'DIGIN was conceptualized by a group of passionate social workers and digital media experts envisioning technology-driven social change.'
    },
    {
      year: '2025',
      title: 'Pilot Programs',
      description: 'Successfully launched pilot digital literacy programs in Delhi-NCR, reaching over 5,000 beneficiaries.'
    },
    {
      year: '2026',
      title: 'Official Registration',
      description: 'Registered as a public charitable trust with expanded programs in education, culture, and community development.'
    },
    {
      year: '2026',
      title: 'National Expansion',
      description: 'Expanded operations to multiple states, establishing partnerships with government bodies and international organizations.'
    }
  ],
  team: [
    {
      name: 'Ramesh Chander Pathak',
      role: 'Founder & Managing Trustee',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Visionary leader with 15+ years in social development and digital innovation. Previously led multiple award-winning community programs.'
    },
    {
      name: 'Nityanand Gayen',
      role: 'Vice President & Media Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Award-winning journalist dedicated to community media and grassroots storytelling. Pioneered citizen journalism initiatives across India.'
    },
    {
      name: 'Anand Sharma',
      role: 'Secretary & Operations Head',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Operations expert with background in corporate social responsibility. Streamlined organizational processes for maximum impact.'
    },
    {
      name: 'Ashutosh Rai',
      role: 'Treasurer & Research Lead',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Research scholar specializing in social development economics. Leads impact assessment and program evaluation.'
    },
    {
      name: 'Sharwan Kumar',
      role: 'Trustee & Youth Coordinator',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Young leader passionate about youth empowerment and education. Coordinates volunteer programs and youth initiatives.'
    },
    {
      name: 'Himmat Singh',
      role: 'Trustee & Media Advisor',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Experienced journalist and media consultant. Guides DIGIN\'s communication strategy and media partnerships.'
    }
  ]
};


export const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Digital Literacy Workshop in Rural Delhi',
    category: 'Education',
    description: 'Empowering rural youth with essential digital skills for the modern economy.',
    location: 'Bhalswa, Delhi',
    date: 'March 2026'
  },
  {
    url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Annual Cultural Heritage Festival',
    category: 'Culture',
    description: 'Celebrating India\'s diverse cultural traditions through music, dance, and art.',
    location: 'Lucknow, UP',
    date: 'February 2026'
  },
  {
    url: 'https://images.unsplash.com/photo-1488521787991-1c5e3e1836c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Community Health Awareness Camp',
    category: 'Healthcare',
    description: 'Providing free health check-ups and awareness sessions in underserved areas.',
    location: 'Baruipur, West Bengal',
    date: 'January 2026'
  },
  {
    url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Youth Leadership Summit',
    category: 'Youth',
    description: 'Training young leaders in community organizing and social entrepreneurship.',
    location: 'New Delhi',
    date: 'December 2025'
  },
  {
    url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Environmental Awareness Drive',
    category: 'Environment',
    description: 'Tree plantation and environmental education program in urban communities.',
    location: 'East Delhi',
    date: 'November 2025'
  },
  {
    url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Women Empowerment Workshop',
    category: 'Women Empowerment',
    description: 'Skill development and entrepreneurship training for women entrepreneurs.',
    location: 'Mau, UP',
    date: 'October 2025'
  },
  {
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Traditional Arts Documentation',
    category: 'Culture',
    description: 'Preserving dying art forms through digital documentation and archiving.',
    location: 'Various Locations',
    date: 'September 2025'
  },
  {
    url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Disaster Relief Training',
    category: 'Emergency Response',
    description: 'Training community volunteers in disaster preparedness and response.',
    location: 'Delhi NCR',
    date: 'August 2025'
  }
];


export const pressReleases = [
  {
    id: 1,
    title: 'DIGIN Launches Comprehensive Digital Literacy Program in Rural Delhi',
    date: 'March 15, 2026',
    summary: 'Groundbreaking initiative aims to train 10,000+ rural youth in digital skills, media literacy, and online safety over the next year.',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Program Launch',
    author: 'Communications Team',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Community Media Workshop Empowers 500+ Aspiring Journalists',
    date: 'March 10, 2026',
    summary: 'Intensive workshop on citizen journalism and community media attracts participants from across Delhi NCR, fostering grassroots storytelling.',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Workshop',
    author: 'Media Team',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'DIGIN Recognized for Excellence in Cultural Preservation',
    date: 'March 5, 2026',
    summary: 'National award for outstanding contribution to preserving and promoting India\'s intangible cultural heritage through digital innovation.',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a0c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Award',
    author: 'Executive Office',
    readTime: '3 min read'
  },
  {
    id: 4,
    title: 'Strategic Partnership with Government for Rural Development',
    date: 'February 28, 2026',
    summary: 'MoU signed with Ministry of Rural Development to implement digital literacy programs across 100 villages in Uttar Pradesh.',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Partnership',
    author: 'Development Team',
    readTime: '6 min read'
  }
];


export const missionObjectives = [
  {
    category: 'Digital Media & Education',
    icon: BookOpen,
    description: 'Leveraging technology for widespread educational impact',
    objectives: [
      'Promote comprehensive digital literacy and social media awareness across all age groups',
      'Create and distribute high-quality educational content for YouTube, Facebook, Instagram, and emerging platforms',
      'Train youth and community members in content creation, digital journalism, and media ethics',
      'Counter misinformation and promote scientific temper through fact-based digital campaigns',
      'Establish digital resource centers in underserved communities'
    ]
  },
  {
    category: 'Cultural Preservation',
    icon: Globe,
    description: 'Safeguarding India\'s rich cultural heritage for future generations',
    objectives: [
      'Document and archive traditional arts, music, rituals, and oral traditions through digital media',
      'Organize cultural festivals, exhibitions, and performances showcasing diverse traditions',
      'Support traditional artists through platforms, stipends, and market linkages',
      'Promote folk arts, crafts, and regional languages through dedicated programs',
      'Establish cultural resource centers and museums in rural areas'
    ]
  },
  {
    category: 'Community Development',
    icon: Heart,
    description: 'Holistic development through community-led initiatives',
    objectives: [
      'Empower marginalized communities through access to information and digital resources',
      'Promote sustainable environmental practices and climate change awareness',
      'Organize health camps and awareness programs on critical health issues',
      'Support livelihood enhancement through skill development and entrepreneurship',
      'Advocate for social justice, human rights, and inclusive development'
    ]
  },
  {
    category: 'Social Welfare',
    icon: Target,
    description: 'Comprehensive welfare programs for vulnerable populations',
    objectives: [
      'Advocate for social security and workers\' rights, especially for unorganized labor',
      'Promote blood and organ donation awareness through targeted campaigns',
      'Work for animal welfare, wildlife protection, and environmental conservation',
      'Support disaster relief, rehabilitation, and community preparedness',
      'Ensure access to clean water, sanitation, and basic amenities in rural areas'
    ]
  }
];



export const contactPageInfo = {
  formFields: [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
    { name: 'subject', label: 'Subject', type: 'text', required: true },
    { name: 'message', label: 'Message', type: 'textarea', required: true }
  ],
  officeHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ],
  faq: [
    {
      question: 'How can I volunteer with DIGIN?',
      answer: 'You can volunteer by filling out our volunteer registration form in the Get Involved section. We welcome volunteers with diverse skills and backgrounds.'
    },
    {
      question: 'How are donations utilized?',
      answer: '90% of donations go directly to program implementation, with 10% used for administrative costs. We maintain complete transparency in fund utilization.'
    },
    {
      question: 'Do you have programs outside Delhi?',
      answer: 'Yes, we currently operate in multiple states including Uttar Pradesh, West Bengal, and expanding to more regions.'
    }
  ]
};