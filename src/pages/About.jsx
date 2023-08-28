import PageTitle from "../components/PageTitle";


const About = () => {
    return (
        <>
        <PageTitle title='Protfolio-About'/>
            <section className="about flex justify-between items-center flex-col gap-8 mt-60 pt-10 ">
                <h2 className="text-5xl font-bold mb-5">About <span>Me</span></h2>
                <div className="about-img relative flex justify-center items-center">
                    <img className="" src="https://i.ibb.co/GMQrHYc/IMG-8554.jpg" alt="" />
                    <span className="circle-sain"></span>
                </div>

                <div className="about-content text-center">
                    <h3 className="text-4xl">Full Stack Developer</h3>
                    <p className="text-2xl">Frontend Developer: Designs and develops user interfaces. Expertise in HTML, CSS, JavaScript,React. Creates visually appealing and interactive websites. Collaborates with designers and back-end developers. Ensures seamless user experiences</p>
                </div>
                <div className="btn-box btns ">
                    <button className="btn">Read More</button>
                </div>
            </section>
        </>
    );
};

export default About;