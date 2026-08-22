import { Barber240Config } from "./barber240";
import { Barber46Config } from "./barber46";

export type OpeningHours = {
  day: string;
  hours: string;
};

export type Service = {
  name: string;
  description: string;
  duration: string;
  price: string;
  highlighted?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
  imageAlt: string;
};

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "large";
};

export type SocialImage = {
  src: string;
  alt: string;
};

export type BarberConfig = {
  domain: string;
  title: string;
  subTitle?: string;
  name: string;
  logo: string;
  legalName: string;
  slogan: string;
  description: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  bookingUrl: string;
  mapsUrl: string;
  accentColor: string;
  openingHours: OpeningHours[];
  services: Service[];
  team: TeamMember[];
  reviews: Review[];
  galleryImages: GalleryImage[];
  socialImages: SocialImage[];
};

export const barberConfigs: Record<string, BarberConfig> = {
  "barber-240": Barber240Config,
  "46th-barber-street": Barber46Config,
};
