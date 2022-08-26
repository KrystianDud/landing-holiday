import './App.css';
import Nav from './Views/NavBar.js/Nav';
import Landing from './Views/Landing/Landing';
import TripConfig from './Components/TripConfig/TripConfig';
import Categories from './Views/Categories/Categories';
import Footer from './Views/Footer/Footer';
import Contact from './Views/Contact/Contact';
import Destinations from './Views/Destinations/Destinations';

function App() {
    return (
        <div className="App">
            <Nav />
            <Landing />

            <div className="trip-config-container">
                <TripConfig />
            </div>

            <Categories />
            <Destinations />

            <Contact />

            <Footer />
        </div>
    );
}

export default App;
