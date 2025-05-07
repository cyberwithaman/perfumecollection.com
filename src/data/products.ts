export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  category: string;
  specifications: {
    concentration: string;
    size: string;
    longevity: string;
    sillage: string;
    origin: string;
  };
}

export const products: Product[] = [
  {
    id: 'elegant-noir',
    name: 'Elegant Noir',
    description: 'A sophisticated blend of black vanilla, amber, and sandalwood for an intimate evening experience.',
    price: 89.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Oriental',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '100ml / 3.4 fl.oz',
      longevity: '6-8 hours',
      sillage: 'Moderate to Strong',
      origin: 'France'
    }
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    description: 'Fresh aquatic notes combined with citrus and light musk for a refreshing daytime scent.',
    price: 64.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Fresh',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '100ml / 3.4 fl.oz',
      longevity: '5-7 hours',
      sillage: 'Moderate',
      origin: 'UAE'
    }
  },
  {
    id: 'midnight-rose',
    name: 'Midnight Rose',
    description: 'A romantic fusion of damask rose, patchouli, and bergamot with subtle hints of pepper.',
    price: 74.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Floral',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '75ml / 2.5 fl.oz',
      longevity: '8-10 hours',
      sillage: 'Strong',
      origin: 'USA'
    }
  },
  {
    id: 'cedar-whisper',
    name: 'Cedar Whisper',
    description: 'Woody notes of cedar and vetiver balanced with warm spices and a touch of citrus.',
    price: 79.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Woody',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '50ml / 1.7 fl.oz',
      longevity: '6-8 hours',
      sillage: 'Moderate',
      origin: 'France'
    }
  },
  {
    id: 'velvet-amber',
    name: 'Velvet Amber',
    description: 'A luxurious combination of amber, vanilla, and patchouli creating a warm, enveloping aura.',
    price: 94.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Oriental',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '100ml / 3.4 fl.oz',
      longevity: '10-12 hours',
      sillage: 'Strong',
      origin: 'France'
    }
  },
  {
    id: 'citrus-bloom',
    name: 'Citrus Bloom',
    description: 'Vibrant notes of bergamot, lemon, and orange blossom for an uplifting everyday fragrance.',
    price: 59.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Citrus',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '50ml / 1.7 fl.oz',
      longevity: '4-6 hours',
      sillage: 'Light to Moderate',
      origin: 'Italy'
    }
  },
  {
    id: 'lavender-fields',
    name: 'Lavender Fields',
    description: 'Calming lavender blended with vanilla and light musk for a soothing sensorial experience.',
    price: 69.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Aromatic',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '50ml / 1.7 fl.oz',
      longevity: '6-8 hours',
      sillage: 'Moderate',
      origin: 'France'
    }
  },
  {
    id: 'exotic-spice',
    name: 'Exotic Spice',
    description: 'An intoxicating mix of cinnamon, cardamom, and nutmeg with a base of warm vanilla.',
    price: 84.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Spicy',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '50ml / 1.7 fl.oz',
      longevity: '8-10 hours',
      sillage: 'Strong',
      origin: 'India'
    }
  },
  {
    id: 'forest-mist',
    name: 'Forest Mist',
    description: 'Fresh pine and fir notes with earthy undertones, evoking a walk through a misty forest.',
    price: 72.99,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Woody',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '50ml / 1.7 fl.oz',
      longevity: '6-8 hours',
      sillage: 'Moderate',
      origin: 'Canada'
    }
  },
  {
    id: 'golden-oud',
    name: 'Golden Oud',
    description: 'Precious oud wood combined with golden amber and saffron for an opulent, long-lasting scent.',
    price: 120.00,
    image1: 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7',
    image2: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    image3: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be',
    image4: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    image5: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    category: 'Oriental',
    specifications: {
      concentration: 'Eau de Parfum',
      size: '50ml / 1.7 fl.oz',
      longevity: '12+ hours',
      sillage: 'Very Strong',
      origin: 'France'
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export const categories = [...new Set(products.map(product => product.category))];
