// import { Link } from "react-router-dom";
import { ImFacebook } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Section = () => {
    return (
        <>
            <section style={{}} className="home mt-64" id="home">
                <div className="max-w-5xl">
                    <h1 className="text-6xl font-bold  ">Hi,I'm <span>Jewel Rana</span></h1>
                    <div className="text-animate ">
                        <h3 className="">Fronted Developer</h3>
                    </div>
                    <p className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem, odit atque optio ut facere nobis error, illo sint at alias sit repellat cum praesentium ex reprehenderit non, ea omnis?</p>

                    <div className="btn-box">
                        <button className="btn">Hire me</button>
                        <button className="btn">Let's talk</button>
                    </div>

                </div>
                <div className="home-icon">
                    <Link> <ImFacebook /></Link>
                    <Link> <FiGithub /></Link>
                    <Link> <FaLinkedinIn /></Link>
                  
                </div>
                <div className="imgHover">

                </div>
             
            </section>
           
           
        </>
    );
};

export default Section;