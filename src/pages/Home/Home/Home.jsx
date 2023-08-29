import About from "../../About";
import Contact from "../../Contact";
import Education from "../../Education";
import Skills from "../../Skills";
import Project from "../Project";
import Section from "../Section";


const Home = () => {
    return (
        <div>
            <Section></Section>
            <About></About>
            <Project></Project>
            <Education></Education>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;