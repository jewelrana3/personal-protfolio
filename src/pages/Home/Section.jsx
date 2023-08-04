// import { Link } from "react-router-dom";
import { ImFacebook } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Section = () => {
    return (
        <>
            <section style={{}} className="home mt-64" id="home">
                <div className="home-content">
                    <h1 className="text-6xl font-bold ">Hi,I'm <span>Jewel Rana</span></h1>
                    <div className="text-animate ">
                        <h2>Frontend Developer</h2>
                    </div>
                    <p className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem, odit atque optio ut facere nobis error, illo sint at alias sit repellat cum praesentium ex reprehenderit non, ea omnis?</p>

                    <div className="btn-box">
                        <button className="btn">Hire me</button>
                        <button className="btn">Let's talk</button>
                    </div>
                    <div className="home-icon mt-32">
                        <Link to='https://web.facebook.com/profile.php?id=100073733827614' target='_blank'> <ImFacebook /></Link>
                        <Link to='https://github.com/jewelrana3' target='_blank'> <FiGithub /></Link>
                        <Link to='https://www.linkedin.com/in/md-jewel-rana-585bb2251/' target='_blank'> <FaLinkedinIn /></Link>

                    </div>
                </div>

               

            </section>


        </>
    );
};

export default Section;