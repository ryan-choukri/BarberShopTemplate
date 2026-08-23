import { Barber240Config } from "./barber240";
import { Barber46Config } from "./barber46";
import { BarberCelineConfig } from "./barberCeline";
import { BarberHommeEtJeanConfig } from "./BarberHommeEtJean";
import { BarberHaircutFactory } from "./barberHaircutFactory";
import { Barber31Config } from "./barber31";
import { BestBarberCoiffureConfig } from "./bestBarberCoiffure";
import { BarberShopRadouaneConfig } from "./barberShopRadouane";
import { YanBarberConfig } from "./YanBarber";
import { Barber34streetConfig } from "./Barber34street";
import { BarberLeClangeoffreyConfig } from "./barberLeClangeoffrey";
import { BarberLaMoustacheDeGastonConfig } from "./barberLaMoustacheDeGaston";
import { BarberLatelierDuBarberConfig } from "./barberLatelierDuBarber";
import { LaBarberieConfig } from "./laBarberie";
import { BarberUrbanCutzConfig } from "./barberUrbanCutz";
import { MyBarber31Config } from "./myBarber31";

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
  "celine-barber": BarberCelineConfig,
  "lhomme-et-jean": BarberHommeEtJeanConfig,
  "haircut-factory": BarberHaircutFactory,
  barber31: Barber31Config,
  "best-barber-coiffure": BestBarberCoiffureConfig,
  "barber-shop-radouane": BarberShopRadouaneConfig,
  "yan-barber": YanBarberConfig,
  "34-barberstreet": Barber34streetConfig,
  "barber-le-clangeoffrey": BarberLeClangeoffreyConfig,
  "barber-la-moustache-de-gaston": BarberLaMoustacheDeGastonConfig,
  "barber-latelier-du-barber": BarberLatelierDuBarberConfig,
  "la-barberie": LaBarberieConfig,
  "barber-urban-cutz": BarberUrbanCutzConfig,
  mybarber31: MyBarber31Config,
};
