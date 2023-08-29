import React from "react";
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <PageTitle title="Protfolio-Project" />
      <section className="education mt-44">
        <h2 className="text-5xl text-center mt-10 mb-28">
          My <span>Projects</span>
        </h2>
        <div className="education-row flex flex-wrap ">
          <div className="education-col">
            <img 
              src="https://i.ibb.co/6D3cgwh/alliance-football-club-x1-OStt-M2ajo-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="education-col bg-white">
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black mt-3">
                FOREGIN SPORTS LEARNING SCHOOL
              </h1>
            
              <h2 className="text-2xl font-semibold mb-3 text-black mt-6">Tecnology</h2>
              <hr className="border " />
              <div className="mt-1">
                <p className="text-black text-2xl">
                  <span className="font-bold">Front End</span> : HTML , CSS ,
                  TAILWIND , Javascript , React
                </p>
                <p className="text-black text-2xl">
                  <span className="font-bold">Back End :</span> Express ,
                  Mongodb Databse
                </p>
                <p className="text-black text-2xl">
                  <span className="font-bold">Tools :</span> Git , Github ,
                  Firebase
                </p>
              </div>
              <h4 className="text-xl font-semibold mt-6 mb-1 text-black">Github Link</h4>
              <hr />
              <div className="flex gap-4 mt-5">
                <p className="text-emerald-500 font-bold text-2xl"><Link to='https://github.com/jewelrana3/school-camp-client'>Client Site</Link></p>
                <p className="text-violet-700 font-bold text-2xl"><Link to='https://github.com/jewelrana3/school-camp-server'>Server Site</Link></p>
              </div>

              <button className="text-black text-2xl mt-16 bg-blue-400 px-20 rounded-lg py-4"><Link to='https://assignment-12-a51e6.web.app/' target="_blank">Live site</Link></button>
            </div>
          </div>
        </div>
        <div className="education-row flex flex-wrap mt-12 rounded-lg">
          <div className="education-col">
            <img 
              src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/08/17064425/Portfolio-Career-1024x512.png"
              alt=""
            />
          </div>
          <div className="education-col bg-white">
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black mt-3">
          Career Hub
              </h1>
            
              <h2 className="text-2xl font-semibold mb-3 text-black mt-4">Tecnology</h2>
              <hr className="border " />
              <div className="mt-1">
                <p className="text-black text-2xl">
                  <span className="font-bold">Front End</span> : HTML , CSS ,
                  TAILWIND , Javascript , React
                </p>
               
                <p className="text-black text-2xl">
                  <span className="font-bold">Tools :</span> Git , Github ,
                  Firebase
                </p>
              </div>
             
              <hr />
              <div className="flex gap-4 mt-">
               
                <p className="text-violet-700 font-bold text-2xl"><Link to='https://github.com/jewelrana3/career-hub'>Github Link</Link></p>
              </div>

              <button className="text-black text-2xl mt-6 bg-blue-400 px-20 rounded-lg py-4 mb-4"><Link to='https://career-hub-two.vercel.app' target="_blank">Live site</Link></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
