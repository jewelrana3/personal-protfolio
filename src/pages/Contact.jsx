import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <section className="contact  mt-44" id='contact'>
                <h2 className="text-5xl text-center mb-12">Contact <span>Me !</span></h2>
                <form action="#">
                    <div className="input-box">
                        <div className="input-falied">
                            <input type="text" name="name" placeholder="Full name" id="" required />
                            <span className="focus"></span>
                        </div>
                        <div className="input-falied">
                            <input type="text" name="name" placeholder="email address" id="" required />
                            <span className="focus"></span>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-falied">
                            <input type="number" name="name" placeholder="mobile number" id="" required />
                            <span className="focus"></span>
                        </div>
                        <div className="input-falied">
                            <input type="text" name="name" placeholder="email subject" id="" required />
                            <span className="focus"></span>
                        </div>
                    </div>
                    <div className="textarea-input">
                        <textarea name="" id="" cols="30" placeholder="Your Message" rows="10" required></textarea>
                        <span className="focus"></span>
                    </div>
                    <div className="btn-box btns mb-11">
                        <button type='submit' className="btn">Submit</button>
                    </div>

                </form>


            </section>
            <footer className="footer p-4 flex justify-between items-center flex-wrap">
                <p className="text-2xl">CopyRight &copy; 2023.All Right Reserve</p>
                <div className='icon'>
                    <Link to='/'><AiOutlineArrowUp className='h-10 w-10'/></Link>
                </div>
            </footer>
        </>


    );
};

export default Contact;