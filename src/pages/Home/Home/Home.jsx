// import { useLocation } from "react-router-dom";
import About from "../../About";
import Contact from "../../Contact";
import Education from "../../Education";
import Skills from "../../Skills";
import Project from "../Project";
import Section from "../Section";


const Home = () => {
    // const pathname = window.location.pathname;
    // const path = pathname.includes('/');
    return (

        <div>
            <Section></Section>
             <About></About>
             <Project></Project>
             <Education></Education>
             <Skills></Skills>
             <Contact></Contact>
            {/* <Section></Section>
            {path || <About></About>}
            {path || <Project></Project>}
            {path || <Education></Education>}
            {path || <Skills></Skills>}
            {path || <Contact></Contact>} */}
        </div>

    );
};

export default Home;