
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import Bestsellers from '../components/Bestsellers';
import BrandGrid from '../components/BrandGrid';
import ResponsiveBanner from '../components/ResponsiveBanner';
import ExploreShades from '../components/ExploreShades';
import ServicesSection from '../components/ServicesSection';
import SocialMediaVideoSlider from '../components/SocialMediaVideoSlider';
import OurPolicy from '../components/OurPolicy';
import Footer from '../pages/Footer';

const Home = () => {
    return (
        <>
            <HeroSlider />
            <CategorySection />
            <Bestsellers />
            <BrandGrid />
            <ResponsiveBanner />
            <ExploreShades />
            <ServicesSection />
            <SocialMediaVideoSlider />
            <OurPolicy />
            <Footer />
        </>
    );
};

export default Home;