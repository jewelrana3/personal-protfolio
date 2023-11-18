
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Project = () => {
  return (
    <>
      <Helmet><title>Protfolio-Project</title></Helmet>
      <section className="education mt-44 mb-28">
        <h2 className="text-5xl text-center mt-10 mb-28">
          My <span>Projects</span>
        </h2>
        <div className="education-row flex flex-wrap ">
          <div className="education-col">
            <div className="image">
              <img className=""
                src="https://i.ibb.co/3vbMBPk/Screenshot-2023-11-18-143916.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="education-col bg-white">
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black mt-3 uppercase">
                Electronics Ecomerce
              </h1>

              <h2 className="text-2xl font-semibold mb-3 text-black mt-6">Tecnology</h2>
              <hr className="border " />
              <div className="mt-1">
                <p className="text-black text-2xl">
                  <span className="font-bold">Front End</span> : HTML , CSS ,
                  TAILWIND , Javascript , React , Axios
                </p>
                <p className="text-black text-2xl">
                  <span className="font-bold">Back End :</span> Express.JS ,
                  Mongodb Databse , Node.JS
                </p>
                <p className="text-black text-2xl">
                  <span className="font-bold">Tools :</span> Git , Github ,
                  Firebase , Vercel
                </p>
              </div>
              <h4 className="text-xl font-semibold mt-6 mb-1 text-black">Github Link</h4>
              <hr />
              <div className="flex gap-4 mt-5">
                <p className="text-emerald-500 font-bold text-2xl"><Link to='https://github.com/jewelrana3/electronics-ecomerce'>Client Site</Link></p>
                <p className="text-violet-700 font-bold text-2xl"><Link to='https://github.com/jewelrana3/electronics-ecomerce-server'>Server Site</Link></p>
              </div>

              <button className="text-black text-2xl mt-16 bg-blue-400 px-20 rounded-lg py-4"><Link to='https://eocomerce-electronics.web.app/' target="_blank">Live site</Link></button>
            </div>
          </div>
        </div>
        <div className="education-row flex flex-wrap mt-12">
          <div className="education-col">
            <img className=""
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
                  TAILWIND , Javascript , React , Axios
                </p>
                <p className="text-black text-2xl">
                  <span className="font-bold">Back End :</span> Express ,
                  Mongodb Databse , Node.Js
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
        <div className="education-row flex flex-wrap mt-12">
          <div className="education-col">
            <div className="image">
              <img
                src="https://i.ibb.co/zRBwjbN/Screenshot-2023-08-31-070259.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="education-col bg-white">
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black mt-3">
                Recipe Restarant
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
                  Mongodb Databse , Node.Js
                </p>
                <p className="text-black text-2xl">
                  <span className="font-bold">Tools :</span> Git , Github ,
                  Firebase
                </p>
              </div>
              <h4 className="text-xl font-semibold mt-6 mb-1 text-black">Github Link</h4>
              <hr />
              <div className="flex gap-4 mt-5">
                <p className="text-emerald-500 font-bold text-2xl"><Link to='https://github.com/jewelrana3/recipe-resturent-client'>Client Site</Link></p>
                <p className="text-violet-700 font-bold text-2xl"><Link to='https://github.com/jewelrana3/recipe-resturent-server'>Server Site</Link></p>
              </div>

              <button className="text-black text-2xl mt-16 bg-blue-400 px-20 rounded-lg py-4"><Link to='https://new-10-project.web.app/' target="_blank">Live site</Link></button>
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
        <div className="education-row flex flex-wrap mt-12 rounded-lg">
          <div className="education-col">
            <img
              src="https://i.ibb.co/Qd2SbCT/Screenshot-2023-11-18-184728.jpg"
              alt=""
            />
          </div>
          <div className="education-col bg-white">
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black mt-3">
                Weather App
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
                  Vercel
                </p>
              </div>

              <hr />
              <div className="flex gap-4 mt-">

                <p className="text-violet-700 font-bold text-2xl"><Link to='https://github.com/jewelrana3/weather4'>Github Link</Link></p>
              </div>

              <button className="text-black text-2xl mt-6 bg-blue-400 px-20 rounded-lg py-4 mb-4"><Link to='https://weather-project-woad.vercel.app/' target="_blank">Live site</Link></button>
            </div>
          </div>
        </div>
        <div className="education-row flex flex-wrap mt-12 rounded-lg">
          <div className="education-col">
            <img
              src="https://i.ibb.co/GRmSJvL/Screenshot-2023-11-18-185700.jpg"
              alt=""
            />
          </div>
          <div className="education-col bg-white">
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black mt-3">
                G3-Architects
              </h1>

              <h2 className="text-2xl font-semibold mb-3 text-black mt-4">Tecnology</h2>
              <hr className="border " />
              <div className="mt-1">
                <p className="text-black text-2xl">
                  <span className="font-bold">Front End</span> : HTML , CSS ,
                  Bootstrap 
                </p>

                <p className="text-black text-2xl">
                  <span className="font-bold">Tools :</span> Git , Github , Netlify
                
                </p>
              </div>

              <hr />
              <div className="flex gap-4 mt-">

                <p className="text-violet-700 font-bold text-2xl"><Link to=''>Github Link</Link></p>
              </div>
              <button className="text-black text-2xl mt-6 bg-blue-400 px-20 rounded-lg py-4 mb-4"><Link to='https://legendary-custard-e5d492.netlify.app/' target="_blank">Live site</Link></button>
            </div>
          </div>
        </div>
        <div className="education-row flex flex-wrap mt-12 rounded-lg">
          <div className="education-col">
            <img
              src="https://i.ibb.co/4NyvdjT/Screenshot-2023-11-18-185103.jpg"
              alt=""
            />
          </div>
          <div className="education-col bg-white">
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black mt-3">
                G3-Architects
              </h1>

              <h2 className="text-2xl font-semibold mb-3 text-black mt-4">Tecnology</h2>
              <hr className="border " />
              <div className="mt-1">
                <p className="text-black text-2xl">
                  <span className="font-bold">Front End</span> : HTML , CSS ,
                  TAILWIND 
                </p>

                <p className="text-black text-2xl">
                  <span className="font-bold">Tools :</span> Git , Github , Netlify
                
                </p>
              </div>

              <hr />
              <div className="flex gap-4 mt-">

                <p className="text-violet-700 font-bold text-2xl"><Link to='https://github.com/jewelrana3/real-project'>Github Link</Link></p>
              </div>
              <button className="text-black text-2xl mt-6 bg-blue-400 px-20 rounded-lg py-4 mb-4"><Link to='https://jewelrana3.github.io/real-project/' target="_blank">Live site</Link></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
