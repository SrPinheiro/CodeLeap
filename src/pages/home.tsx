import useHomePage from "src/hooks/home/useHomePage";
import HomePageView from "src/view/homePage/HomePageView";

const Home = () => {
    const props = useHomePage()
    return <HomePageView {...props} />;
}

export default Home;
