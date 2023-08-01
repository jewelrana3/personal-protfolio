

const About = () => {
    return (
       <section className="about flex justify-between items-center flex-col gap-8 mt-44 ">
        <h2 className="text-5xl font-bold mb-5">About <span>Me</span></h2>
        <div className="about-img relative flex justify-center items-center">
            <img className="" src="https://i.ibb.co/GMQrHYc/IMG-8554.jpg" alt="" />
            <span className="circle-sain"></span>
        </div>

        <div className="about-content text-center">
            <h3 className="text-4xl">Fronted Developer</h3>
            <p className="text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et necessitatibus harum animi magnam iste iusto praesentium quisquam assumenda voluptates ipsum id dolor, incidunt unde non. Saepe commodi ut consequuntur reiciendis!</p>
        </div>
        <div className="btn-box btns ">
            <button className="btn">Read More</button>
        </div>
       </section>
    );
};

export default About;