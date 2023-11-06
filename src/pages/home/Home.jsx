import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Features from "../../components/features/Features";
import Gardening from "../../components/gardening/Gardening";
import LatestProjects from "../../components/latestProjects/LatestProjects";
// import Services from "../../components/services/Services";
import Statistics from "../../components/statistics/Statistics";


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
        </div>
    );
};

export default Home;