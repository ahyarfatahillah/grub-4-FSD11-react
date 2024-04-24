import "../assets/styles/home.css";
import Main from "../components/ListProduct"
import Header from "../components/Headerh"
import Footer from "../components/Footerh"
const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}
export default Home;