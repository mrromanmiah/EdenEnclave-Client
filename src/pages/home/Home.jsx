import Banner from "../../components/banner/Banner";
import Features from "../../components/features/Features";
import Gardening from "../../components/gardening/Gardening";
import Services from "../../components/services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Gardening></Gardening>
            <Services></Services>
        </div>
    );
};

export default Home;