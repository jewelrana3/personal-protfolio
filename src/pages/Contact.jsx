

const Contact = () => {
    return (
        <section className="contact mt-44">
            <h2 className="text-5xl text-center">Contact <span>Me !</span></h2>
            <form action="#">
                <div className="input-box">
                    <div className="input-falied">
                        <input type="text" name="name" placeholder="Full name" id="" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-falied">
                        <input type="text" name="name" placeholder="email address" id="" required/>
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-falied">
                        <input type="number" name="name" placeholder="mobile number" id="" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-falied">
                        <input type="text" name="name" placeholder="email subject" id="" required/>
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="textarea-input">
                    <textarea name="" id="" cols="30" placeholder="Your Message" rows="10" required></textarea>
                    <span className="focus"></span>
                </div>
                <div className="btn-box btns">
                  <button type='submit' className="btn">Submit</button>
                </div>

            </form>
        </section>
    );
};

export default Contact;