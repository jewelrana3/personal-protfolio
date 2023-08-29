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
            <img className="flex-grow"
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
                <p className="text-emerald-500 font-bold text-2xl">Client Site</p>
                <p className="text-violet-700 font-bold text-2xl">Server Site</p>
              </div>

              <button className="text-black text-2xl mt-16 bg-blue-400 px-20 rounded-lg py-4"><Link to='https://assignment-12-a51e6.web.app/' target="_blank">Live site</Link></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
