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
  name: string;
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

export const barberConfig: BarberConfig = {
  name: "Barber 240",
  legalName: "Barber 240",
  slogan: "COUPES PRECISES. ATTITUDE LIBRE.",
  description:
    "Barber studio premium a Saint-Jean. Degrades nets, tailles de barbe structurees et direction stylistique urbaine pour ceux qui veulent plus qu une coupe.",
  city: "Saint-Jean",
  address: "Rue Paul Riello 6, 31240 Saint-Jean",
  phone: "0952833055",
  email: "contact@ateliernord.fr",
  instagram: "@barber.240",
  instagramUrl: "https://www.instagram.com/barber.240/",
  bookingUrl: "https://www.planity.com/atelier-nord-angers",
  mapsUrl: "https://maps.app.goo.gl/sFtkSdFTzy6dXSY8A",
  accentColor: "#006b53",
  openingHours: [
    { day: "Lundi", hours: "Ferme" },
    { day: "Mardi", hours: "10:00 - 19:00" },
    { day: "Mercredi", hours: "10:00 - 19:00" },
    { day: "Jeudi", hours: "10:00 - 20:00" },
    { day: "Vendredi", hours: "10:00 - 20:00" },
    { day: "Samedi", hours: "09:00 - 18:00" },
    { day: "Dimanche", hours: "Ferme" },
  ],
  services: [
    {
      name: "Coupe Signature",
      description:
        "Diagnostic morphologie, coupe ciseaux-tondeuse et styling final texture.",
      duration: "45 min",
      price: "39 EUR",
      highlighted: true,
    },
    {
      name: "Coupe + Barbe Sculptee",
      description:
        "Ligne barbe redessinee au coupe-chou, serviette chaude et finitions precises.",
      duration: "60 min",
      price: "55 EUR",
      highlighted: true,
    },
    {
      name: "Barbe Premium",
      description:
        "Rituel complet barbe avec taille, contours nets et soin hydratant.",
      duration: "30 min",
      price: "27 EUR",
    },
    {
      name: "Skin Fade Expert",
      description:
        "Degrade a blanc progressif ultra propre avec travail de textures.",
      duration: "50 min",
      price: "44 EUR",
    },
    {
      name: "Rasage Tradition",
      description:
        "Serviette chaude, preparation de peau, rasage de precision et baume apaisant.",
      duration: "35 min",
      price: "32 EUR",
    },
  ],
  team: [
    {
      name: "Nassim Benali",
      role: "Fondateur / Barber Director",
      bio: "Forme entre Paris et Bruxelles, Nassim combine rigueur technique et culture street contemporaine.",
      experience: "12 ans d experience",
      image: "/images/team/deuxbarber.jpg",
      imageAlt: "Portrait du fondateur Nassim Benali",
    },
    {
      name: "Lenny Costa",
      role: "Senior Barber",
      bio: "Specialiste des degrades courts et des transitions naturelles pour cheveux textures.",
      experience: "7 ans d experience",
      image: "/images/team/deuxbarber.jpg",
      imageAlt: "Portrait du barber Lenny Costa",
    },
  ],
  reviews: [
    {
      author: "Thomas R.",
      rating: 5,
      source: "Google",
      text: "Le niveau de detail est incroyable. Tu arrives avec une idee vague, tu repars avec une vraie direction de style.",
    },
    {
      author: "Mehdi K.",
      rating: 5,
      source: "Planity",
      text: "Accueil, ambiance, precision: tout est premium sans etre surfait. Probablement la meilleure adresse d Angers.",
    },
    {
      author: "Julien M.",
      rating: 5,
      source: "Google",
      text: "Enfin un barber qui respecte les volumes et la repousse. Le resultat tient parfaitement 3 semaines.",
    },
  ],
  galleryImages: [
    //     ""public/images/template/tempalte-thu.avif"
    // ""public/images/template/template-barber.avif"
    // ""public/images/template/template-blond.avif"
    // ""public/images/template/template-cut.avif"
    // ""public/images/template/template-ffu.avif"
    // ""public/images/template/template-gd.avif"
    // ""public/images/template/template-laque.avif"
    // ""public/images/template/template-log.avif"
    // ""public/images/template/templatecoiff.avif"
    {
      src: "/images/template/tempalte-thu.avif",
      alt: "Skin fade net en lumiere studio",
      span: "tall",
    },
    {
      src: "/images/template/template-barber.avif",
      alt: "Coupe texturee moderne",
      span: "wide",
    },
    {
      src: "/images/template/template-blond.avif",
      alt: "Rituel barbe serviette chaude",
    },
    {
      src: "/images/template/template-cut.avif",
      alt: "Detail de contours precis",
      span: "large",
    },
    {
      src: "/images/template/template-ffu.avif",
      alt: "Barber en action a la tondeuse",
    },
    {
      src: "/images/template/template-gd.avif",
      alt: "Portrait client apres coupe",
    },
    {
      src: "/images/template/template-laque.avif",
      alt: "Ambiance du studio atelier",
      span: "wide",
    },
    {
      src: "/images/template/template-log.avif",
      alt: "Rasage de precision au coupe-chou",
      span: "tall",
    },
  ],
  socialImages: [
    {
      src: "/images/placeholder-editorial.svg",
      alt: "Realisation haircut publication Instagram 1",
    },
    {
      src: "/images/placeholder-editorial.svg",
      alt: "Realisation haircut publication Instagram 2",
    },
    {
      src: "/images/placeholder-editorial.svg",
      alt: "Realisation haircut publication Instagram 3",
    },
    {
      src: "/images/placeholder-editorial.svg",
      alt: "Realisation haircut publication Instagram 4",
    },
    {
      src: "/images/placeholder-editorial.svg",
      alt: "Realisation haircut publication Instagram 5",
    },
    {
      src: "/images/placeholder-editorial.svg",
      alt: "Realisation haircut publication Instagram 6",
    },
  ],
};
