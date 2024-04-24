import "../assets/styles/home.css";
import Main from "../components/listproduct"
import Header from "../components/header"
import Footer from "../components/footer"
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