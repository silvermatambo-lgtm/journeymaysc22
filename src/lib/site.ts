// Shared site data. Media belongs to this repository under public/media/.
// Original photographs, logo and videos must be copied into that folder.
export const FOUNDATION_ADDRESS = "Machadodorp, eMthonjeni Location, 1170, Mpumalanga Province, South Africa";

export const SITE = {
  name: "My Journey My Scars Foundation",
  slogan: "From Pain to Power",
  motto: "Building the Future Today to Enjoy the Benefits Tomorrow",
  phone: "076 943 7774",
  phoneIntl: "+27769437774",
  whatsapp: "27769437774",
  email: "info@myjourneymyscars.co.za",
  website: "www.myjourneymyscars.co.za",
  facebook: "https://www.facebook.com/profile.php?id=61578901354083",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb8BwGO3LdQSpfaNNX2c",
  founder: "Sandile P Sibande",
  address: FOUNDATION_ADDRESS,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(FOUNDATION_ADDRESS)}&output=embed`,
};

export const ASSETS = {
  logo: "/media/logo.png",
  founder: "/media/founder.jpg",
  mm1: "/media/mm1.jpg",
  mm5: "/media/mm5.jpg",
  mm8: "/media/mm8.jpg",
  mm13: "/media/mm13.jpg",
  mm14: "/media/mm14.jpg",
  mmmain: "/media/mmmain.jpg",
  video1: "/media/video1.mp4",
  video2: "/media/video2.mp4",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/initiatives", label: "Initiatives" },
  { to: "/gallery", label: "Gallery" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
] as const;
