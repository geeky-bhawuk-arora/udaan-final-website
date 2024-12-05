import React from 'react';
import './About.css';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold italic text-purple-300 upercase '>ABOUT US</h1>
                    <p className=' w-75 mb-5  text-white text-justify uppercase'>The Udaan AeroModelling Club, founded in 2015 at Poornima College of Engineering, is a hub for students passionate about aviation and aeromodelling. Known for winning prestigious competitions, the club fosters innovation, technical skill, and teamwork in aerospace engineering.</p>
                </div>
            </header>

            <div className='container my-5'>
                <div className="row">
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5 font-bold text-black italic uppercase'>History</h2>
                        <p className='text-balance justify-center text-justify italic text-black' >
                            The Udaan AeroModelling Club, founded in 2015 at Poornima College of Engineering, has grown into a renowned group for students passionate about aviation, engineering,
                             and aeromodelling. Originally started by a group of dedicated seniors, the club quickly gained momentum as members mastered the basics of flight dynamics, aerodynamics, and structural design. Over time, the club moved beyond basic model aircraft to tackle advanced drone technology, autonomous systems, and high-precision aeromodelling projects.

                        </p>
                        <p className='mb-5 text-balance text-justify italic text-black'>
                        The club’s impressive track record includes notable achievements at some of the country’s most prestigious competitions. Udaan has secured a winning position at IIT Kanpur, placed in the top 10 at IIT Bombay, and won 1st, 2nd, and 3rd prizes at LNMIIT. The club has twice emerged as winners at MNIT Jaipur and JECRC, showcasing consistent excellence in the field. Additionally, Udaan took home the winner’s title at IIT Jodhpur, further solidifying its reputation for innovative design and competitive skill.


                        </p>
                        <p className='mb-8 text-balance text-justify italic text-black'>
                        Beyond competitions, Udaan regularly hosts workshops, lectures, and practical sessions, enabling students to gain hands-on experience and deepen their technical expertise in aerodynamics, mechanics, and electronics. The club’s supportive community fosters collaboration, creativity, and technical growth, making it a source of pride for Poornima College. Today, Udaan continues to inspire future engineers, establishing a legacy of success in aeromodelling and contributing to the advancement of aerospace technology at the college.
                        </p>
                     
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src="https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/udaan.png"  alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5 text-white'>
                <ChooseSection className='text-white' />
            </div>

           
        </div>

    )
}

export default About;