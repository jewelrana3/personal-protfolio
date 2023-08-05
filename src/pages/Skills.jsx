import PageTitle from "../components/PageTitle";

const Skills = () => {
    return (
        <>
            <PageTitle title='Protfolio-Skills' />
            <section className="skills mt-36">
                <h2 className="text-6xl text-center pt-10 mb-10">My <span>Skills</span></h2>
                {/* <div className="skills-row mt-12">
                    <div className="skills-col ">
                        <h3 className="text-4xl mb-8">Codeing Skills</h3>

                        <div className="skill-box">
                            <div className="skill-content">
                                <div className="progess">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progess">
                                    <h3>CSS <span>80%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progess">
                                    <h3>Javascript <span>70%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progess">
                                    <h3>React <span>75%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progess">
                                    <h3>Node Js<span>60%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-col">
                        <h3 className="text-4xl mb-8">Professional Skills</h3>

                        <div className="skill-box">
                            <div className="skill-content">
                                <div className="progess">
                                    <h3>Web Design <span>60%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progess">
                                    <h3>Web Development <span>80%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container">

                    <div className="skills-col">
                        <h3 className="text-4xl mb-8">Codeing Skills</h3>
                        <div className="skills-row">
                            <div className="skill-box">
                                <span className="title">HTML</span>
                                <div className="skill-bar">
                                    <div className="skill-per">
                                        <span className="tooltip">90%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">Css</span>
                                <div className="skill-bar">
                                    <div className="skill-per css">
                                        <span className="tooltip">80%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">Javascript</span>
                                <div className="skill-bar java">
                                    <div className="skill-per">
                                        <span className="tooltip">70%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">React</span>
                                <div className="skill-bar">
                                    <div className="skill-per react">
                                        <span className="tooltip">80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-col">
                        <h3 className="text-4xl mb-8">Professional Skills</h3>
                        <div className="skills-row">
                            <div className="skill-box">
                                <span className="title">Web Design</span>
                                <div className="skill-bar design">
                                    <div className="skill-per">
                                        <span className="tooltip">60%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">Web Development</span>
                                <div className="skill-bar develop">
                                    <div className="skill-per">
                                        <span className="tooltip">80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
