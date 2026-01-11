
export interface PricingTier {
  pack: string;
  images: number;
  recolle: number;
  duration: string;
  price: string;
  pricePerPhoto: string;
  highlight?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
