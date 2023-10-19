import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   form.current.value="";

    emailjs
      .sendForm(
        "service_76g3yq7",
        "template_lt6xq79",
        form.current,
        "rsuNwFKGXILHAMqMN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
     <Helmet><title>Protfolio-Contact</title></Helmet>
      <section className="contact  mt-44" id="contact">
        <h2 className="text-5xl text-center mb-12">
          Contact <span>Me !</span>
        </h2>
        <form ref={form} onSubmit={sendEmail} >
          <div className="input-box">
            <div className="input-falied">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                id=""
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-falied">
              <input
                type="text"
                name="email"
                placeholder="email address"
                id=""
                required
              />
              <span className="focus"></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-falied">
              <input
                type="number"
                name="name"
                placeholder="mobile number"
                id=""
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-falied">
              <input
                type="text"
                name="name"
                placeholder="email subject"
                id=""
                required
              />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-input">
            <textarea
              name=""
              id=""
              cols="30"
              placeholder="Your Message"
              rows="10"
              required
            ></textarea>
            <span className="focus"></span>
          </div>
          <div className="btn-box btns mb-11">
            <button  type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>

        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
      </section>
      <footer className="footer p-4 flex justify-between items-center flex-wrap">
        <p className="text-2xl">CopyRight &copy; 2023.All Right Reserve</p>
        <div className="icon">
          <Link to="/">
            <AiOutlineArrowUp className="h-10 w-10" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Contact;
