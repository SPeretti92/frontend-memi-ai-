
import React from 'react';
import { 
  Heart, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  LayoutGrid, 
  Share2, 
  History, 
  Camera, 
  Music, 
  RefreshCcw, 
  Video 
} from 'lucide-react';
import { Benefit, PricingTier, FAQItem, Testimonial } from './types';

export const BENEFITS: Benefit[] = [
  {
    title: "Émotion instantanée",
    description: "Faites vivre vos photos pour créer un moment d'émotion unique qui touche vos proches.",
    icon: "Heart"
  },
  {
    title: "Simple, guidé, en 4 étapes",
    description: "Importez → ordonnez → éditez → exportez. Rien de plus. Aucun logiciel complexe requis.",
    icon: "Zap"
  },
  {
    title: "Résultat pro",
    description: "Transitions propres, rythme musical intelligent, rendu cohérent et élégant automatiquement.",
    icon: "Sparkles"
  },
  {
    title: "Contrôle total",
    description: "Changez l'ordre, supprimez, ajustez la musique, régénérez une scène à votre guise.",
    icon: "LayoutGrid"
  },
  {
    title: "Tous vos événements",
    description: "Mariage, anniversaire, hommage, voyage, naissance, rétrospective… MEMO IA s'adapte.",
    icon: "History"
  },
  {
    title: "Partage en 1 clic",
    description: "Export optimisé pour Instagram, WhatsApp, TV, et cloud. Partagez instantanément.",
    icon: "Share2"
  }
];

export const IA_STANDARD: PricingTier[] = [
  { pack: "Basic", images: 5, recolle: 3, duration: "20 s", price: "7 €", pricePerPhoto: "1,40 €" },
  { pack: "Start", images: 15, recolle: 8, duration: "1 min", price: "19 €", pricePerPhoto: "1,27 €", highlight: true },
  { pack: "Essentiel", images: 30, recolle: 16, duration: "2 min", price: "28 €", pricePerPhoto: "0,93 €" },
  { pack: "Héritage", images: 50, recolle: 30, duration: "3 min 20 s", price: "40 €", pricePerPhoto: "0,80 €" }
];

export const IA_EMOTION: PricingTier[] = [
  { pack: "Basic", images: 5, recolle: 2, duration: "25 s", price: "10 €", pricePerPhoto: "2,00 €" },
  { pack: "Start", images: 15, recolle: 4, duration: "1 min 15 s", price: "27 €", pricePerPhoto: "1,80 €", highlight: true },
  { pack: "Essentiel", images: 30, recolle: 8, duration: "2 min 30 s", price: "42 €", pricePerPhoto: "1,40 €" },
  { pack: "Héritage", images: 50, recolle: 20, duration: "4 min 10 s", price: "65 €", pricePerPhoto: "1,30 €" }
];

export const FAQS: FAQItem[] = [
  {
    question: "Est-ce que c’est compliqué ?",
    answer: "Non. Le flow est entièrement guidé : import → ordre → édition → export. Vous n'avez besoin d'aucune compétence technique."
  },
  {
    question: "Puis-je changer l’ordre des photos après ?",
    answer: "Oui, à tout moment via un simple système de drag & drop (glisser-déposer) intuitif."
  },
  {
    question: "Et si une animation ne me plaît pas ?",
    answer: "Vous pouvez régénérer une scène spécifique sans avoir à refaire toute la vidéo."
  },
  {
    question: "Quels sont les formats d’export ?",
    answer: "Vous pouvez exporter en 720p avec l'IA Standard ou en 1080p haute définition avec l'IA Émotion."
  },
  {
    question: "Mes fichiers sont-ils en sécurité ?",
    answer: "Oui, nous garantissons un stockage hautement sécurisé et vos projets restent strictement privés."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Thomas D.",
    role: "Marié en 2024",
    content: "J'ai créé une vidéo surprise pour ma femme en 10 minutes. Les transitions étaient bluffantes, elle a pleuré d'émotion.",
    avatar: "https://picsum.photos/seed/thomas/100/100"
  },
  {
    id: 2,
    name: "Sophie L.",
    role: "Maman comblée",
    content: "Pour le premier anniversaire de mon fils, j'ai compilé 50 photos. Le résultat ressemble à un film professionnel. Merci MEMO IA !",
    avatar: "https://picsum.photos/seed/sophie/100/100"
  },
  {
    id: 3,
    name: "Marc R.",
    role: "Globe-trotter",
    content: "Fini les albums photos qui dorment dans un placard. Mes voyages sont maintenant des souvenirs vivants que je partage sur Insta.",
    avatar: "https://picsum.photos/seed/marc/100/100"
  },
  {
      id: 4,
      name: "Elise M.",
      role: "Fête d'anniversaire",
      content: "Incroyablement simple. J'ai juste glissé les photos et l'IA a fait le reste. La musique était parfaitement synchronisée.",
      avatar: "https://picsum.photos/seed/elise/100/100"
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6 text-sky-400" />,
  Zap: <Zap className="w-6 h-6 text-indigo-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-sky-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-sky-400" />,
  Share2: <Share2 className="w-6 h-6 text-indigo-400" />,
  History: <History className="w-6 h-6 text-sky-400" />,
  Camera: <Camera className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
  RefreshCcw: <RefreshCcw className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />
};
