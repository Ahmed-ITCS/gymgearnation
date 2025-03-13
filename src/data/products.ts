
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'gloves' | 'straps' | 'belts' | 'sleeves' | 'wraps';
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
];
