import { SlCalender } from 'react-icons/sl';

import { Helmet } from 'react-helmet';

const Education = () => {
    return (
        <>
          <Helmet><title>Protfolio-Education</title></Helmet>
            <section className="education mt-44">
                <h2 className="text-5xl text-center mt-10 mb-28">My <span>Journey</span></h2>
                <div className="education-row flex flex-wrap gap-20">
                    <div className="education-col">
                        <h3 className='title'>Education</h3>
                        <div className="education-box">
                            <div className="education-content">
                                <div className='content'>
                                    <div className="year"><SlCalender className='calender' />2016-2018</div>
                                    <h3>SSC</h3>
                                    <p className='text-justify'>SSC education: Secondary school certificate at 18. Core subjects, critical thinking, career opportunities. Important academic milestone</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className='content'>
                                    <div className="year"><SlCalender className='calender' />2018-2020</div>
                                    <h3>HSC</h3>
                                    <p className='text-justify'> I successfully completed my HSC examinations in the year 2020, majoring in Accounting with a Division distinction. I achieved a GPA of 3.75 from M S. Zoha College. Subsequently, I enrolled in an Honors program in Business Management.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className='content'>
                                    <div className="year"><SlCalender className='calender' />2020-2021</div>
                                    <h3>Honours Degree</h3>
                                    <p className='text-justify'>BBA education: Bachelor of Business Administration. A three-year undergraduate program. Covers essential business disciplines like finance, marketing, management. Develops leadership, analytical, and decision-making skills. Ideal for pursuing a career in business and management</p>
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
                                    <p className='text-justify'>Web design is the creative process of blending artistry with technology to produce visually captivating and interactive websites. . Effective web designers strive to strike a balance between aesthetics and functionality, ensuring that websites not only look great but also provide a seamless user experience.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className='content'>
                                    <div className="year"><SlCalender className='calender' />2020-2021</div>
                                    <h3>Web Development</h3>
                                    <p className='text-justify'> Being an expert in HTML, CSS, JavaScript, and React means you have a well-rounded skill set for modern web development. Present web development coding is in high demand</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className='content'>
                                    <div className="year"><SlCalender className='calender' />2020-2021</div>
                                    <h3>Programming Hero</h3>
                                    <p className='text-justify'>Join our web development course. Learn front-end (HTML, CSS, JS) and back-end ( Node.js), databases, frameworks, and more. Start your web development journey now!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;