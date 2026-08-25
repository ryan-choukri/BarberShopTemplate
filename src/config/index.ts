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
import { BarberKluHouse } from "./barberKluHouse";
import { JBCoiffure } from "./JBCoiffure";
import { DEFAULTCONFIG } from "./DEFAULTCONFIG";
import { ChezBenCoiffure } from "./chezBenCoiffure";
import { MammeriCoiffure } from "./mammeriCoiffure";
import { FloStudioBarber } from "./floStudioBarber";
import { GentlemanCoiffure } from "./gentlemanCoiffure";
import { OussBarberShop } from "./oussBarberShop";
import { RkBarberShop } from "./rkBarberShop";
import { DLatinBarber } from "./dlatinBarber";
import { JockerBarber } from "./jockerBarber";
import { TheApocalypseBarber72 } from "./theApocalypseBarber72";
import { LaTondeuse } from "./laTondeuse";
import { BarberChasseRoyale } from "./barberChasseRoyale";
import { BarberShopRoyal } from "./barberShopRoyal";
import { LeMansBarberShopSansRendezVous } from "./barberShopSansRdv";
import { GentlemanBarbu } from "./gentlemanBarbu";
import { HairKBarber } from "./hairKBarber";
import { PrimoBarber } from "./PrimoBarber";
import { TopKingBarbier } from "./topKingBarbier";

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

export type BarberConfigIncomplete = {
  domain: string;
  title: string;
  subTitle?: string;
  name: string;
  legalName: string;
  slogan?: string;
  description: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  instagram: string;
  bookingUrl: string;
  mapsUrl: string;
  logo?: string;
  accentColor?: string;
  openingHours?: OpeningHours[];
  services?: Service[];
  team?: TeamMember[];
  reviews?: Review[];
  galleryImages?: GalleryImage[];
  socialImages?: SocialImage[];
};

export type BarberConfig = {
  domain: string;
  title: string;
  subTitle: string;
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
  "barber-240": { ...DEFAULTCONFIG, ...Barber240Config },
  "46th-barber-street": { ...DEFAULTCONFIG, ...Barber46Config },
  "celine-barber": { ...DEFAULTCONFIG, ...BarberCelineConfig },
  "lhomme-et-jean": { ...DEFAULTCONFIG, ...BarberHommeEtJeanConfig },
  "haircut-factory": { ...DEFAULTCONFIG, ...BarberHaircutFactory },
  barber31: { ...DEFAULTCONFIG, ...Barber31Config },
  "best-barber-coiffure": { ...DEFAULTCONFIG, ...BestBarberCoiffureConfig },
  "barber-shop-radouane": { ...DEFAULTCONFIG, ...BarberShopRadouaneConfig },
  "yan-barber": { ...DEFAULTCONFIG, ...YanBarberConfig },
  "34-barberstreet": { ...DEFAULTCONFIG, ...Barber34streetConfig },
  "barber-le-clangeoffrey": { ...DEFAULTCONFIG, ...BarberLeClangeoffreyConfig },
  "barber-la-moustache-de-gaston": {
    ...DEFAULTCONFIG,
    ...BarberLaMoustacheDeGastonConfig,
  },
  "barber-latelier-du-barber": {
    ...DEFAULTCONFIG,
    ...BarberLatelierDuBarberConfig,
  },
  "la-barberie": { ...DEFAULTCONFIG, ...LaBarberieConfig },
  "barber-urban-cutz": { ...DEFAULTCONFIG, ...BarberUrbanCutzConfig },
  mybarber31: { ...DEFAULTCONFIG, ...MyBarber31Config },
  "mammeri-coiffure": { ...DEFAULTCONFIG, ...MammeriCoiffure },
  "flo-studio-barber": { ...DEFAULTCONFIG, ...FloStudioBarber },
  "jb-coiffure": { ...DEFAULTCONFIG, ...JBCoiffure },
  "klu-house": { ...DEFAULTCONFIG, ...BarberKluHouse },
  "chez-ben-coiffure": { ...DEFAULTCONFIG, ...ChezBenCoiffure },
  "gentleman-coiffure": { ...DEFAULTCONFIG, ...GentlemanCoiffure },
  "ouss-barber-shop": { ...DEFAULTCONFIG, ...OussBarberShop },
  rkbarbershop: { ...DEFAULTCONFIG, ...RkBarberShop },
  "dlatin-barber": { ...DEFAULTCONFIG, ...DLatinBarber },
  "jocker-barber": { ...DEFAULTCONFIG, ...JockerBarber },
  "the-apocalypse-barber-72": {
    ...DEFAULTCONFIG,
    ...TheApocalypseBarber72,
  },
  "la-tondeuse-barber-shop": { ...DEFAULTCONFIG, ...LaTondeuse },
  "barber-chasse-royale": { ...DEFAULTCONFIG, ...BarberChasseRoyale },
  "barber-shop-royal": { ...DEFAULTCONFIG, ...BarberShopRoyal },
  "barber-shop-sans-rdv": {
    ...DEFAULTCONFIG,
    ...LeMansBarberShopSansRendezVous,
  },
  "gentleman-barbu": { ...DEFAULTCONFIG, ...GentlemanBarbu },
  "hair-k-barber": { ...DEFAULTCONFIG, ...HairKBarber },
  "primo-barber": { ...DEFAULTCONFIG, ...PrimoBarber },
  "top-king-barbier": { ...DEFAULTCONFIG, ...TopKingBarbier },
};
