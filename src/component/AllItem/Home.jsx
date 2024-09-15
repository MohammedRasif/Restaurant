import Chefs from "./Chefs";
import Choose from "./Choose";
import Gallary from "./Gallary";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="  font-abc">
            
            <Header ></Header>
            <Main></Main>
            <Choose></Choose>
            <Menu></Menu>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <Gallary></Gallary>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;