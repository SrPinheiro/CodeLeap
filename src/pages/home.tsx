import { HomePageProvider } from "src/contexts/pages/HomePageContext";
import HomePageView from "src/view/homePage/HomePageView";

const Home = () => {
    return (
        <HomePageProvider>
            <HomePageView /> 
        </HomePageProvider>
    )
}

export default Home;
