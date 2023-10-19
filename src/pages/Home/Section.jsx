// import { Link } from "react-router-dom";
import { ImFacebook } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import PageTitle from '../../components/PageTitle';
import { Helmet } from 'react-helmet';




const Section = () => {

    return (
       
           
           <>
           <Helmet>
             <title>Protfolio-Home</title>
           </Helmet>
           
                <section style={{}} className="home mt-64" id="home">
                    <div className="home-content">
                        <h1 className="text-6xl font-bold ">Hi,I'm <span>Juyel Haque</span></h1>
                        <div className="text-animate ">
                            <h2>Full Stack Developer</h2>
                        </div>
                        <p className="text-2xl text-gray-400">A Full Stack Web Developer is a professional skilled in both front-end and back-end web technologies. They design, build, and maintain web applications, ensuring functionality, usability, and seamless user experiences across all aspects of a website or web application.</p>

                        <div className="btn-box">
                            <button className="btn">Hire me</button>
                            <button className="btn">Let's talk</button>
                        </div>
                        <div className="home-icon mt-32">
                            <Link to='' target=''> <ImFacebook /></Link>
                            <Link to='https://github.com/jewelrana3' target='_blank'> <FiGithub /></Link>
                            <Link to='https://www.linkedin.com/in/md-jewel-rana-585bb2251/' target='_blank'> <FaLinkedinIn /></Link>

                        </div>
                    </div>



                </section>

             
            </>
            );
};

            export default Section;