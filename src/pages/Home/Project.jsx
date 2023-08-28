import React from 'react';
import PageTitle from '../../components/PageTitle';

const Project = () => {
    return (
        <>
        <PageTitle title='Protfolio-Project'/>
            <section className="about flex justify-between items-center flex-col gap-8 mt-44 ">
                <h2 className="text-5xl font-bold mb-5">My <span>Project</span></h2>
               

                <div className="hero rounded-xl bg-slate-50 mt-12">
                <div className="hero-content flex gap-6">
                    <img className="w-2/4" src="https://i.ibb.co/6D3cgwh/alliance-football-club-x1-OStt-M2ajo-unsplash.jpg" />
                    <div>
                        <h1 className="text-2xl font-bold text-black">FOREGIN SPORTS LEARNING SCHOOL</h1>
                        <p className="py-6 text-black text-extra-lg">This website will have users in three roles. There will be students, instructors and admins. User can buy different types of foreign language classes from here. The user must login before selecting th see more...</p>
                        <h2 className="text-2xl font-semibold mb-3 text-black">Tecnology</h2>
                        <hr className="border border-b-4 " />
                        <div className="mt-1">
                            <p className='text-2xl text-black'><span className="font-bold text-2xl">Front End</span> : HTML , CSS , TAILWIND , Javascript , React</p>
                            <p className='text-2xl text-black'><span className="font-bold text-2xl">Back End </span> :Express , Mongodb Databse</p>
                            <p className='text-2xl text-black'><span className="font-bold text-2xl">Tools    </span> :Git , Github , Firebase</p>
                        </div>
                        <h4 className="text-xl font-semibold mt-4 mb-1 text-black">Github Link</h4>
                        <hr className='border border-4px'/>
                        <div className="flex gap-4">
                            <p className="text-emerald-500 font-bold text-2xl">Client Site</p>
                            <p className="text-violet-700 font-bold text-2xl">Server Site</p>
                        </div>

                        <button className="btn btn-primary ml-80">Live Site</button>
                    </div>
                </div>
            </div>
                <div className="btn-box btns ">
                    <button className="btn">Read More</button>
                </div>
            </section>
        </>
    );
};

export default Project;