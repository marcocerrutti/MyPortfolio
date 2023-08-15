import React from 'react';
import './contact.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';

const Contact = () => {
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
                                    <input type="text" className='form-control' />
                                </div>

                                <div className='contact-form'>
                                    <label className='form-label'>Email</label>
                                    <input type="text" className='form-control' />
                                </div>

                                <div className='contact-form'>
                                    <label className='form-label'>Job Types</label>
                                    <select className='custom-select-tag'>
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Consulting</option>
                                        <option>Contract</option>
                                        <option>Working Student</option>
                                    </select>
                                </div>

                                <div className='contact-form'>
                                    <label className='form-label'>Message</label>
                                    <textarea rows="4" type="text" className='form-control' />
                                </div>

                                <div className='button-submit'>
                                    <p>Send <RiSendPlaneFill size={25} /></p>
                                </div>

                            </form>
                        </div>
                    </div>
                    </div>
                </Fade>
            </div>
        </div>
     );
}
 
export default Contact;