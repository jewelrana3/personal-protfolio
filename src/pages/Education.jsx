import { SlCalender } from 'react-icons/sl';

const Education = () => {
    return (
        <section className="education mt-44">
            <h2 className="text-5xl text-center mt-10 mb-28">My <span>Journey</span></h2>
            <div className="education-row flex flex-wrap gap-20">
                <div className="education-col">
                    <h3 className='title'>Education</h3>
                    <div className="education-box">
                        <div className="education-content">
                        <div className='content'>
                                <div className="year"><SlCalender className='calender' />2020-2021</div>
                                <h3>SSC</h3>
                              <p>SSC education: Secondary school certificate at 16. Core subjects, critical thinking, career opportunities. Important academic milestone</p>
                            </div>
                        </div>
                        <div className="education-content">
                        <div className='content'>
                                <div className="year"><SlCalender className='calender' />2020-2021</div>
                                <h3>HSC</h3>
                               <p>HSC: Higher Secondary Certificate, age 18. Final stage of secondary education. College/university admission prerequisite, vital for future opportunities</p>
                            </div>
                        </div>
                        <div className="education-content">
                        <div className='content'>
                                <div className="year"><SlCalender className='calender' />2020-2021</div>
                                <h3>Honours Degree</h3>
                               <p>BBA education: Bachelor of Business Administration. A three-year undergraduate program. Covers essential business disciplines like finance, marketing, management. Develops leadership, analytical, and decision-making skills. Ideal for pursuing a career in business and management</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education-col">
                    <h3 className='title'>Exprience</h3>
                    <div className="education-box">
                        <div className="education-content">
                            <div className='content'>
                                <div className="year "><SlCalender className='calender' />2020-2021</div>
                                <h3>Web Design</h3>
                               <p>Web design: create visually appealing, user-friendly websites with minimalism, readable fonts, contrast, white space, consistency, hierarchy, responsive design, accessibility, appropriate line length, and alignment for a positive user experience.</p>
                            </div>
                        </div>
                        <div className="education-content">
                        <div className='content'>
                                <div className="year"><SlCalender className='calender' />2020-2021</div>
                                <h3>Web Development</h3>
                              <p>Web development: Building, designing, and maintaining websites. Front-end, back-end, databases. Programming, performance, security, and user experience.</p>
                            </div>
                        </div>
                        <div className="education-content">
                        <div className='content'>
                                <div className="year"><SlCalender className='calender' />2020-2021</div>
                                <h3>Programming Hero</h3>
                                <p>Join our web development course. Learn front-end (HTML, CSS, JS) and back-end ( Node.js), databases, frameworks, and more. Start your web development journey now!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;