import { useLocation } from "react-router-dom";
import About from "../../About";
import Contact from "../../Contact";
import Education from "../../Education";
import Skills from "../../Skills";
import Project from "../Project";
import Section from "../Section";


const Home = () => {
    const location = useLocation();
    const path = location.pathname.includes('/')
    return (

        <div>
            <Section></Section>
            {path || <About></About>}
            {path || <Project></Project>}
            {path || <Education></Education>}
            {path || <Skills></Skills>}
            {path || <Contact></Contact>}
        </div>

    );
};

export default Home;