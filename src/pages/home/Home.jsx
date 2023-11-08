import Banner from "../../components/banner/Banner";
import ClientBrands from "../../components/clientBrands/ClientBrands";
import Contact from "../../components/contact/Contact";
import Features from "../../components/features/Features";
import Gardening from "../../components/gardening/Gardening";
import LatestProjects from "../../components/latestProjects/LatestProjects";
import News from "../../components/news/News";
// import Services from "../../components/services/Services";
import Statistics from "../../components/statistics/Statistics";
import Testimonial from "../../components/testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Gardening></Gardening>
            <Contact></Contact>
            <Statistics></Statistics>
            {/* <Services></Services> */}
            <LatestProjects></LatestProjects>
            <Testimonial></Testimonial>
            <News></News>
            <ClientBrands></ClientBrands>
        </div>
    );
};

export default Home;