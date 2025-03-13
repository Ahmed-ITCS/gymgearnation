
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'gloves' | 'straps' | 'belts' | 'sleeves' | 'wraps' | 'shirts' | 'trousers' | 'shakers';
  rating: number;
  inStock: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Lifting Gloves",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    category: 'gloves',
    rating: 4.5,
    inStock: true,
    description: "These premium lifting gloves provide excellent grip and wrist support for heavy lifting sessions."
  },
  {
    id: 2,
    name: "Heavy Duty Lifting Straps",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: 'straps',
    rating: 4.8,
    inStock: true,
    description: "Improve your grip strength and lift heavier weights with these durable lifting straps."
  },
  {
    id: 3,
    name: "Powerlifting Belt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    category: 'belts',
    rating: 4.9,
    inStock: true,
    description: "This powerlifting belt provides excellent core support for squats, deadlifts, and other heavy compound movements."
  },
  {
    id: 4,
    name: "Knee Sleeves (Pair)",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'sleeves',
    rating: 4.7,
    inStock: true,
    description: "Protect your knees during heavy squats and provide warmth and compression with these durable knee sleeves."
  },
  {
    id: 5,
    name: "Wrist Wraps (Pair)",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'wraps',
    rating: 4.6,
    inStock: true,
    description: "Get extra wrist support for pressing movements with these professional-grade wrist wraps."
  },
  {
    id: 6,
    name: "Fingerless Gym Gloves",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'gloves',
    rating: 4.3,
    inStock: true,
    description: "These fingerless gloves provide palm protection while maintaining finger dexterity for a natural grip feel."
  },
  {
    id: 7,
    name: "Figure 8 Lifting Straps",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'straps',
    rating: 4.9,
    inStock: true,
    description: "Advanced figure 8 design provides maximum support for your heaviest deadlifts and pulls."
  },
  {
    id: 8,
    name: "Elbow Sleeves (Pair)",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'sleeves',
    rating: 4.4,
    inStock: false,
    description: "Reduce elbow strain during pressing movements and provide compression with these high-quality elbow sleeves."
  },
  // New Shirts
  {
    id: 9,
    name: "Performance Gym T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    category: 'shirts',
    rating: 4.7,
    inStock: true,
    description: "Breathable, moisture-wicking fabric that keeps you cool and dry during intense workouts."
  },
  {
    id: 10,
    name: "Muscle Fit Training Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'shirts',
    rating: 4.6,
    inStock: true,
    description: "Form-fitting design highlights your physique while providing maximum range of motion for all exercises."
  },
  {
    id: 11,
    name: "Compression Long Sleeve",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    category: 'shirts',
    rating: 4.8,
    inStock: true,
    description: "Compression technology improves blood flow and muscle support during training and recovery."
  },
  // New Trousers
  {
    id: 12,
    name: "Athletic Training Shorts",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80",
    category: 'trousers',
    rating: 4.5,
    inStock: true,
    description: "Lightweight, quick-drying shorts with built-in liner for comfort during leg day and cardio sessions."
  },
  {
    id: 13,
    name: "Performance Joggers",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    category: 'trousers',
    rating: 4.9,
    inStock: true,
    description: "Tapered fit joggers with stretch fabric for unrestricted movement during workouts and stylish everyday wear."
  },
  {
    id: 14,
    name: "Compression Leggings",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1542574621-e088a4464f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: 'trousers',
    rating: 4.7,
    inStock: false,
    description: "High-performance compression tights that reduce muscle fatigue and provide support during intense training."
  },
  // New Shakers
  {
    id: 15,
    name: "Premium Protein Shaker",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'shakers',
    rating: 4.8,
    inStock: true,
    description: "BPA-free protein shaker with blender ball technology for smooth, clump-free shakes every time."
  },
  {
    id: 16,
    name: "Insulated Gym Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    category: 'shakers',
    rating: 4.9,
    inStock: true,
    description: "Double-walled stainless steel bottle that keeps your drinks cold for up to 24 hours or hot for up to 12 hours."
  },
  {
    id: 17,
    name: "Electric Protein Mixer",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1593040086357-9fcf21fd0769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'shakers',
    rating: 4.6,
    inStock: false,
    description: "USB rechargeable electric protein shaker that mixes your supplements at the touch of a button for the perfect shake."
  }
];
