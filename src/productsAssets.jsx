import Productimg1 from './assets/ProductCards/Productimg1.png';
import Productimg2 from './assets/ProductCards/Productimg2.png';
import Productimg3 from './assets/ProductCards/Productimg3.png';
import Productimg4 from './assets/ProductCards/Productimg4.png';


import Resentcard1 from './assets/ProductCards/Resentcard1.avif';
import Resentcard2 from './assets/ProductCards/Resentcard2.avif';
import Resentcard3 from './assets/ProductCards/Resentcard3.avif';

// Sample data for recent items
export const recentItems = [
    {
        id: 1,
        name: "Round Metal Frames",
        image: Resentcard1,
        rating: 4.5,
        regularPrice: 189.99,
        offerPrice: 149.99
    },
    {
        id: 2,
        name: "Oversized Square Frames",
        image: Resentcard2,
        rating: 4.7,
        regularPrice: 199.99,
        offerPrice: 169.99
    },
    {
        id: 3,
        name: "Half-Rim Titanium Frames",
        image: Resentcard3,
        rating: 4.4,
        regularPrice: 229.99,
        offerPrice: 199.99
    }
];

// Sample tags
export const tags = [
    "Classic", "Modern", "Metal", "Acetate", "Round", "Square",
    "Aviator", "Cat-Eye", "Minimalist"
];


export const singleProduct = {
    id: "5068286",
    title: "CLASSIC ROUND EYEGLASSES",
    productCode: "E9877/03/001-5068286",
    image: Productimg1,
    price: 24990,
    description: "Elevate your look with these timeless classic round eyeglasses. Featuring a lightweight metal frame with subtle detailing, these glasses offer both style and comfort. The round shape complements most face shapes, while the spring hinges ensure a perfect fit. Ideal for everyday wear, these glasses come with anti-reflective coating for optimal vision clarity.",
    frameType: "Full Rim",
    frameMaterial: "Metal",
    colors: ["Black", "Gold", "Silver"],
    sizes: ["Small", "Medium", "Large"],
    genders: ["Male", "Female", "Unisex"],
    links: [
        { text: "PRODUCT DETAILS & COMPOSITION" },
        { text: "LENS OPTIONS" },
        { text: "DELIVERIES & RETURNS" }
    ]
};

export const products = [
    {
        id: 1,
        image: Productimg1,
        title: "Titanium Rimless Eyeglasses",
        price: 210.99,
        features: "Anti-reflective coating | Hypoallergenic",
        rating: 4.7,
        description: "Our Titanium Rimless Eyeglasses offer featherlight comfort with anti-reflective lenses, while the Sport Wrap Sunglasses provide secure, glare-free vision for active lifestyles. The elegant Cat Eye Frames combine vintage charm with modern acetate construction, and our Browline Designer"
    },
    {
        id: 2,
        image: Productimg2,
        title: "Sport Wrap Sunglasses",
        price: 200.99,
        features: "Wraparound design",
        rating: 4.9,
        description: "Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection combine vintage charm with modern acetate "
    },
    {
        id: 3,
        image: Productimg3,
        title: "Cat Eye Frames",
        price: 195.99,
        features: "Lightweight | acetate Wraparound design",
        rating: 4.4,
        description: "Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 4,
        image: Productimg4,
        title: "Browline Designer Frames",
        price: 185.99,
        features: "Hand-polished | Spring hinges",
        rating: 4.8,
        description: "Sophisticated browline Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 5,
        image: Productimg1,
        title: "Rectangle Reading Glasses",
        price: 180.99,
        features: "Magnification +1.00 to +3.50 | Slim profile",
        rating: 4.2,
        description: "Classic rectangularFrames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 6,
        image: Productimg3,
        title: "Aviator Polarized Sunglasses",
        price: 179.99,
        features: "Mirrored lenses | Metal frame",
        rating: 4.9,
        description: "Timeless aviatorFrames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 7,
        image: Productimg2,
        title: "Oversized Round Frames",
        price: 160.99,
        features: "Blue light blocking",
        rating: 4.5,
        description: "Fashion-forward Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 8,
        image: Productimg4,
        title: "Half-Rim Computer Glasses",
        price: 150.99,
        features: "Anti-fatigue lenses",
        rating: 4.6,
        description: "Modern Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 9,
        image: Productimg3,
        title: "Wireless Rimless Eyeglasses",
        price: 140.99,
        features: "Thin lenses | Titanium frame",
        rating: 4.8,
        description: "Cutting-edge Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 10,
        image: Productimg4,
        title: "Wayfarer Classic Sunglasses",
        price: 130.99,
        features: "100% Durable acetate",
        rating: 4.7,
        description: "Iconic Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 11,
        image: Productimg2,
        title: "Hexagon Frames",
        price: 120.99,
        features: "Modern design",
        rating: 4.3,
        description: "Contemporary Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 12,
        image: Productimg1,
        title: "Transparent Frames",
        price: 129.99,
        features: "Lightweight material",
        rating: 4.5,
        description: "Trendy Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 13,
        image: Productimg1,
        title: "Titanium Rimless Eyeglasses",
        price: 119.99,
        features: "Anti-reflective coating | Hypoallergenic",
        rating: 4.7,
        description: "Premium Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 14,
        image: Productimg2,
        title: "Sport Wrap Sunglasses",
        price: 115.99,
        features: "Wraparound design",
        rating: 4.9,
        description: "Performance Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 15,
        image: Productimg3,
        title: "Cat Eye Frames",
        price: 110.99,
        features: "Lightweight | acetate Wraparound design",
        rating: 4.4,
        description: "Feminine cat-eye Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 16,
        image: Productimg4,
        title: "Browline Designer Frames",
        price: 100.99,
        features: "Hand-polished | Spring hinges",
        rating: 4.8,
        description: "blending metal and acetate with comfortable spring hinges Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 17,
        image: Productimg1,
        title: "Rectangle Reading Glasses",
        price: 95.99,
        features: "Magnification +1.00 to +3.50 | Slim profile",
        rating: 4.2,
        description: "Versatile rectangular Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 18,
        image: Productimg3,
        title: "Aviator Polarized Sunglasses",
        price: 80.99,
        features: "Mirrored lenses | Metal frame",
        rating: 4.9,
        description: "Legendary aviator Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 19,
        image: Productimg2,
        title: "Oversized Round Frames",
        price: 70.99,
        features: "Blue light blocking",
        rating: 4.5,
        description: "Retro-inspired Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 20,
        image: Productimg4,
        title: "Half-Rim Computer Glasses",
        price: 60.99,
        features: "Anti-fatigue lenses",
        rating: 4.6,
        description: "Sleek half-rim Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 21,
        image: Productimg3,
        title: "Wireless Rimless Eyeglasses",
        price: 40.99,
        features: "Thin lenses | Titanium frame",
        rating: 4.8,
        description: "Innovative Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 22,
        image: Productimg4,
        title: "Wayfarer Classic Sunglasses",
        price: 50.99,
        features: "100% Durable acetate",
        rating: 4.7,
        description: "Authentic Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 23,
        image: Productimg2,
        title: "Hexagon Frames",
        price: 199.99,
        features: "Modern design",
        rating: 4.3,
        description: "Edgy Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 24,
        image: Productimg1,
        title: "Transparent Frames",
        price: 319.99,
        features: "Lightweight material",
        rating: 4.5,
        description: "See-through Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 25,
        image: Productimg1,
        title: "Titanium Rimless Eyeglasses",
        price: 379.99,
        features: "Anti-reflective coating | Hypoallergenic",
        rating: 4.7,
        description: "Featherlight Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 26,
        image: Productimg2,
        title: "Sport Wrap Sunglasses",
        price: 292.99,
        features: "Wraparound design",
        rating: 4.9,
        description: "High-performance Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 27,
        image: Productimg3,
        title: "Cat Eye Frames",
        price: 319.99,
        features: "Lightweight | acetate Wraparound design",
        rating: 4.4,
        description: "Vintage-inspired Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 28,
        image: Productimg4,
        title: "Browline Designer Frames",
        price: 349.99,
        features: "Hand-polished | Spring hinges",
        rating: 4.8,
        description: "Classic browline Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 29,
        image: Productimg1,
        title: "Rectangle Reading Glasses",
        price: 359.99,
        features: "Magnification +1.00 to +3.50 | Slim profile",
        rating: 4.2,
        description: "Functional reading Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 30,
        image: Productimg3,
        title: "Aviator Polarized Sunglasses",
        price: 259.99,
        features: "Mirrored lenses | Metal frame",
        rating: 4.9,
        description: "Classic aviators Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 31,
        image: Productimg2,
        title: "Oversized Round Frames",
        price: 99.99,
        features: "Blue light blocking",
        rating: 4.5,
        description: "Fashion-forward Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 32,
        image: Productimg4,
        title: "Half-Rim Computer Glasses",
        price: 129.99,
        features: "Anti-fatigue lenses",
        rating: 4.6,
        description: "Specialized lenses Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 33,
        image: Productimg3,
        title: "Wireless Rimless Eyeglasses",
        price: 219.99,
        features: "Thin lenses | Titanium frame",
        rating: 4.8,
        description: "Minimalist rimless Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 34,
        image: Productimg4,
        title: "Wayfarer Classic Sunglasses",
        price: 149.99,
        features: "100% Durable acetate",
        rating: 4.7,
        description: "Iconic wayfarer Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 35,
        image: Productimg2,
        title: "Hexagon Frames",
        price: 109.99,
        features: "Modern design",
        rating: 4.3,
        description: "Contemporary Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    },
    {
        id: 36,
        image: Productimg1,
        title: "Transparent Frames",
        price: 89.99,
        features: "Lightweight material",
        rating: 4.5,
        description: "Subtle transparent Frames feature hand-polished details with spring hinges for all-day sophistication. Rectangle Reading Glasses deliver precise magnification in a slim profile, complemented by polarized Aviator Sunglasses with mirrored lenses for sun protection. Oversized Round Frames block blue light in a bold silhouette."
    }
];