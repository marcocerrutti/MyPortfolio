import React,{useState} from 'react';
import './contact.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const API = "http://localhost:5000/sendmail";
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [jobtypes, setJobTypes] = useState("");
    const [message, setMessage] = useState("");

    const sendMiilInfo = () => {
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                jobtypes,
                message,
            }),
        })
            .then((res) => res.json())
            .then((result) => {

                if (result.error) {
                    toast.error(result.error, {
                        position: toast.POSITION.TOP_RIGHT, 
                    });
                } else {
                    toast.success("Your email has been sent", {
                        position: toast.POSITION.TOP_RIGHT,
                        
                    });
                    setName("");
                    setEmail("");
                    setJobTypes("");
                    setMessage("");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return ( 
        <div className='container contact-section' id="contact">
            <div className='row'>
                <Fade bottom>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                    <div className='contact-form-image'>
                        <img src='https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='contact-form-image' />
                    </div>
                </div>
                </Fade>
                
                <Fade right>
                <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                    <div>
                        <div className='contact-form-design'>
                            <div className='text-center'>
                                <h5>Contact Me!</h5>
                            </div>
                            <form>
                                <div className='contact-form'>
                                    <label className='form-label'>Name</label>
                                        <input type="text" className='form-control'
                                        
                                        value={name}
                                        onChange={(e) =>setName(e.target.value)}
                                        
                                        />
                                </div>

                                <div className='contact-form'>
                                    <label className='form-label'>Email</label>
                                        <input type="text" className='form-control'
                                    
                                            value={email}
                                            onChange={(e) =>setEmail(e.target.value)}
                                        />
                                </div>

                                <div className='contact-form'>
                                    <label className='form-label'>Job Types</label>
                                        <select className='custom-select-tag'
                                        
                                            value={jobtypes}
                                            onChange={(e) =>setJobTypes(e.target.value)}
                                        
                                        >
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Consulting</option>
                                        <option>Contract</option>
                                        <option>Working Student</option>
                                    </select>
                                </div>

                                <div className='contact-form'>
                                    <label className='form-label'>Message</label>
                                        <textarea rows="4" type="text" className='form-control'

                                            value={message}
                                            onChange={(e) =>setMessage(e.target.value)}
                                        
                                        />
                                </div>

                                <div className='button-submit' onClick={sendMiilInfo}>
                                    <p>Send <RiSendPlaneFill size={25} /></p>
                                </div>

                            </form>
                        </div>
                    </div>
                    </div>
                </Fade>
            </div>
            <ToastContainer draggable autoClose={8000} />
        </div>
     );
}
 
export default Contact;