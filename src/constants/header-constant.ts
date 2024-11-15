import { Home, MapPin, Popcorn, Tags } from "lucide-react";

export const HeaerLogo = "/assets/logos/moviehub.png";
export const navbarMenu = [
    {
        id: 1,
        label: "Home",
        link: "/",
        icon: Home
    },
    {
        id: 2,
        label: "Cienmas",
        link: "/cinemas",
        icon: MapPin
    },
    {
        id: 3,
        label: "Offers",
        link: "/offers",
        icon: Tags
    },
    {
        id: 4,
        label: "F&B",
        link: "/food",
        icon: Popcorn
    } 
];