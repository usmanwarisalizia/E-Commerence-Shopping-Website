// src/data.js

//---------------------------------------Brand Assets--------------------------------------------------//
import Jarvisimg1 from "./assets/Brandimg/Jarvisimg1.webp";
import Jarvisimg2 from "./assets/Brandimg/Jarvisimg2.webp";
import Sleek from "./assets/Brandimg/Sleek.webp";
import Bold from "./assets/Brandimg/Bold.webp";
import Chics from "./assets/Brandimg/Chics.webp";
import FengFly from "./assets/Brandimg/FengFly.webp";

//-----------------------------------------Video Assets------------------------------------------------//
import video1 from './assets/Videosrc/video1.webm';
import video2 from './assets/Videosrc/video2.webm';
import video3 from './assets/Videosrc/video3.webm';
import video4 from './assets/Videosrc/video4.webm';
import video5 from './assets/Videosrc/video5.webm';
import video6 from './assets/Videosrc/video6.webm';
import poster1 from './assets/Videopostersrc/poster1.webm';
import poster2 from './assets/Videopostersrc/poster2.webm';
import poster3 from './assets/Videopostersrc/poster3.webm';
import poster4 from './assets/Videopostersrc/poster4.webm';
import poster5 from './assets/Videopostersrc/poster5.webm';
import poster6 from './assets/Videopostersrc/poster6.webm';


//-----------------------------------------Banners  Assets--------------------------------------------------//
import MenWearingglasses from "./assets/MenWearingglasses.webp";
import WomenWearingglasses from "./assets/WomenWearingglasses.webp";


//------------------------------------------Services-Assets------------------------------------------------//


import icon1 from "./assets/ServicesIcon/icon1.avif";
import icon2 from "./assets/ServicesIcon/icon2.avif";
import icon3 from "./assets/ServicesIcon/icon3.avif";
import icon4 from "./assets/ServicesIcon/icon4.avif";

//-----------------------------------------Explore Shades Categories Assets---------------------------------//


//------------------------------------------Shape-Section---------------------------------------------------//
import Aviator from "./assets/Explorshadeimg/Aviator.webp";
import CatEye from "./assets/Explorshadeimg/CatEye.webp";
import RectangleSquareImg from "./assets/Explorshadeimg/RectangleSquareImg.webp";
import Rimless from "./assets/Explorshadeimg/Rimless.webp";
import Round from "./assets/Explorshadeimg/Round.webp";
import SportWrap from "./assets/Explorshadeimg/SportWrap.webp";
//-----------------------------------------Collection-Section-----------------------------------------------//
import NewArival from "./assets/Explorshadeimg/NewArival.webp";
import AllSunglasses from "./assets/Explorshadeimg/AllSunglasses.webp";
import SportPerform from "./assets/Explorshadeimg/SportPerform.webp";
import LifeStyle from "./assets/Explorshadeimg/LifeStyle.webp";
import BestSeller from "./assets/Explorshadeimg/BestSeller.webp";
import Goggles from "./assets/Explorshadeimg/Goggles.webp";

//------------------------------------------Footer-Assests-------------------------------------------------//




//-------------------------------------------brands---------------------------------------------------------//

export const brands = [
    {
        name: "Jarvis",
        image: Jarvisimg1,
        link: "/search?search_key=jarvis",
        width: 346,
        height: 456
    },
    {
        name: "Jarvis",
        image: Jarvisimg2,
        link: "/search?search_key=jarvis",
        width: 346,
        height: 456
    },
    {
        name: "Sleek",
        image: Sleek,
        link: "/search?search_key=sleek",
        title: "Sleek",
        width: 346,
        height: 456
    },
    {
        name: "Bold",
        image: Bold,
        link: "/search?search_key=86582",
        title: "Bold",
        width: 346,
        height: 456
    },
    {
        name: "Chics",
        image: Chics,
        link: "/search?search_key=3393",
        title: "Chics",
        width: 346,
        height: 456
    },
    {
        name: "Feng - Fly",
        image: FengFly,
        link: "/search?search_key=feng",
        title: "Feng - Fly",
        width: 346,
        height: 456
    }
];


//------------------------------------------------------------Social Media Slides---------------------------------//
export const socialMediaSlides = [
    {
        id: 0,
        title: "See What's New with Nina Suess",
        subtitle: "Discover fresh arrivals from Ray-Ban and Michael Kors in our Oxford Street store.",
        cta: "DISCOVER MORE",
        ctaLink: "/us/new-sunglasses",
        videoSrc: video1,
        posterSrc: poster1,
        color: '#ffffff',
        gradient: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
        textShadow: '0 2px 10px rgba(0,0,0,0.8)',
        trackingId: "CTA1_SeeWhat'sNew",
        navLabel: "SEE WHAT'S NEW"
    },
    {
        id: 1,
        title: "OWN YOUR MOMENT",
        subtitle: "This summer, your shades are your ally to feel confident no matter the occasion.",
        videoSrc: video2,
        posterSrc: poster2,
        color: '#ffffff',
        gradient: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
        textShadow: '0 2px 8px rgba(0,0,0,0.7)',
        navLabel: "SUMMER SELECTION"
    },
    {
        id: 2,
        title: "See what's new with Miguel Cobs",
        subtitle: "Discover the latest styles at our flagship store in Madrid.",
        cta: "DISCOVER MORE",
        ctaLink: "/us/new-sunglasses",
        videoSrc: video3,
        posterSrc: poster3,
        color: '#ffffff',
        gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)',
        textShadow: '0 2px 10px rgba(0,0,0,0.9)',
        trackingId: "CTA1_NewArrivals",
        navLabel: "NEW ARRIVALS"
    },
    {
        id: 3,
        title: "Justine Soranzo seen at Fashion Week - Paris",
        subtitle: "Take a lesson in elegant fashion from the runways of Paris.",
        cta: "DISCOVER MORE",
        ctaLink: "/us/sunglasses/shop-the-runway",
        videoSrc: video4,
        posterSrc: poster4,
        color: '#ffffff',
        gradient: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)',
        textShadow: '0 2px 8px rgba(0,0,0,0.8)',
        trackingId: "CTA1_FashionWeek",
        navLabel: "FASHION WEEK"
    },
    {
        id: 4,
        title: "Amalie Gassmann seen at Fashion Week - London",
        subtitle: "Own the streets with sunglasses that stole the spotlight on runways in London.",
        cta: "DISCOVER MORE",
        ctaLink: "/us/sunglasses/shop-the-runway",
        videoSrc: video5,
        posterSrc: poster6,
        color: '#ffffff',
        gradient: 'linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
        textShadow: '0 2px 8px rgba(0,0,0,0.8)',
        trackingId: "CTA1_FashionWeek",
        navLabel: "FASHION WEEK"
    },
    {
        id: 5,
        title: "Yvesmark Chery seen at Fashion Week - New York",
        subtitle: "Bring high-fashion to your everyday look with runway-approved shades.",
        cta: "DISCOVER MORE",
        ctaLink: "/us/sunglasses/shop-the-runway",
        videoSrc: video6,
        posterSrc: poster5,
        color: '#ffffff',
        gradient: 'linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
        textShadow: '0 2px 8px rgba(0,0,0,0.8)',
        trackingId: "CTA1_FashionWeek",
        navLabel: "FASHION WEEK"
    }
];

//------------------------------------------------banerdata-------------------------------------------//
export const bannerData = {
    men: {
        image: MenWearingglasses,
        title: "SHOP MEN'S SUNGLASSES",
        link: "/men",
        buttonText: "SHOP NOW"
    },
    women: {
        image: WomenWearingglasses,
        title: "SHOP WOMEN'S SUNGLASSES",
        link: "/women",
        buttonText: "SHOP NOW"
    }
};

//-----------------------------------------Explore Shades Categories Assets---------------------------------//
export const shapeSlides = [
    {
        image: Aviator,
        title: 'Aviator/Navigator',
        bgColor: '#f1f1f1'
    },
    {
        image: CatEye,
        title: 'Butterfly/Cat-Eye',
        bgColor: '#f1f1f1'
    },
    {
        image: RectangleSquareImg,
        title: 'Rectangle/Square',
        bgColor: '#f1f1f1'
    },
    {
        image: Rimless,
        title: 'Semi-Rimless',
        bgColor: '#f1f1f1'
    },
    {
        image: Round,
        title: 'Round',
        bgColor: '#f1f1f1'
    },
    {
        image: SportWrap,
        title: 'Wrap Around',
        bgColor: '#f1f1f1'
    }
];

export const collectionSlides = [
    {
        image: NewArival,
        title: 'New Arrivals',
        bgColor: '#f1f1f1'
    },
    {
        image: AllSunglasses,
        title: 'All Sunglasses',
        bgColor: '#f1f1f1'
    },
    {
        image: SportPerform,
        title: 'Sport Performance',
        bgColor: '#f1f1f1'
    },
    {
        image: LifeStyle,
        title: 'Lifestyle Collection',
        bgColor: '#f1f1f1'
    },
    {
        image: BestSeller,
        title: 'Bestsellers',
        bgColor: '#f1f1f1'
    },
    {
        image: Goggles,
        title: 'Goggles',
        bgColor: '#f1f1f1'
    }
];


//-----------------------------------------Services-Assests---------------------------------//
// src/data/servicesData.js
export const services = [
    {
        id: 1,
        title: "IN-STORE PICKUP",
        description: "Free and faster: Order online and pick up in store in just 2 business hours.",
        icon: icon1,
        link: "/discover-more",
        cta: "Discover more"
    },
    {
        id: 2,
        title: "FREE SHIPPING & RETURN",
        description: "Enjoy free shipping and free returns via mail or in store within 30 days of purchase.",
        icon: icon2,
        link: "/discover-more",
        cta: "Discover more"
    },
    {
        id: 3,
        title: "E-GIFT CARD",
        description: "Give the gift of choice with a gift card or an e-gift card. Redeemable online and in store.",
        icon: icon3,
        link: "/shop-now",
        cta: "Shop now"
    },
    {
        id: 4,
        title: "PAYMENT SERVICES",
        description: "You can shop now and pay later in 3 interest-free installments. Available online and in store at checkout.",
        icon: icon4,
        link: "/discover-more",
        cta: "Discover more"
    }
];

export const swiperBreakpoints = {
    320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16
    },
    480: {
        slidesPerView: 1.5,
        spaceBetween: 16
    },
    600: {
        slidesPerView: 2,
        spaceBetween: 16
    }
};


//----------------------------------------Footer---------------------------------------------------------//



