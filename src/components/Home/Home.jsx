import Navbar from "../Navbar/Navbar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            {/* navbar */}
            <div className="fixed left-0 right-0 ">
                <Navbar />
            </div>
            {/* body */}
            <div className=" mt-40 mb-40">
                <Body />
            </div>
            {/* footer */}
            <div className="mb-5">
                <Footer />
            </div>
        </div>
    );
};

export default Home;