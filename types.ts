export interface ReviewItem {
  id: string;
  author: string;
  isLocalGuide?: boolean;
  reviewsCount?: number;
  rating: number;
  timeAgo: string;
  text: string;
  tags: string[];
  avatarBg: string;
}

export interface MembershipPackage {
  id: string;
  name: 'Basic' | 'Premium' | 'VIP';
  priceUSD: number;
  priceINR: number;
  duration: string;
  popular?: boolean;
  tagline: string;
  coreBenefit: string;
  benefitsDescription: string;
  features: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  features: string[];
  recommendedFor: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'equipment' | 'cardio' | 'turf' | 'facility';
  imageUrl: string;
  description: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  description: string;
  targetMuscles: string;
  iconName: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
