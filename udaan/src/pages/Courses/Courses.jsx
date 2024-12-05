import React from 'react';
import './Courses.css';

import { Card } from 'react-bootstrap';

const courses = [
    {
        id: 18,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/lnmiit.png",
        title: '3rd LNMIIT Jaipur',
        year: 2024,
        description: 'In 2024, the Udaan Club at LNMIT Jaipur clinched 3rd position, highlighting their dedication and exceptional teamwork',
    },
    {
        id: 17,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/Abhivyakti%20.png",
        title: '1st, 2nd & 3rd Consolation',
        year: 2024,
        description: 'In 2024, the Udaan Club at Abhivyakti secured 1st, 2nd, and 3rd positions, along with a consolation prize for their outstanding performance.',
    },
    {
        id: 16,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/Manipal%202023.png",
        title: '3rd Manipal University',
        year: 2023,
        description: 'In 2023, the Udaan Club at Manipal University achieved 3rd position, demonstrating outstanding effort and collaboration.',
    },
    {
        id: 15,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/science.png",
        title: '2nd Science Day',
        year: 2023,
        description: 'In 2023, the Udaan Club at Science Day earned 2nd place, reflecting their remarkable performance and teamwork.',
    },
    {
        id: 14,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/rgpit.png",
        year: 2023,
        title: '1st & 2nd RGIPT Raebareli',
        description: 'In 2023, the Udaan Club at RGIPT Raebareli secured both 1st and 2nd positions, demonstrating outstanding performance and leadership.',
    },
    {
        id: 13,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/mnit.png",
        year: 2023,
        title: '1st, 3rd & 4th MNIT Jaipur',
        description: 'In 2023, the Udaan Club at MNIT Jaipur secured 1st, 3rd, and 4th positions, highlighting their exceptional skills and teamwork.',
    },
    {
        id: 12,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIt%20bombay%202017.png",
        title: 'Top 10 IIT Bombay',
        year: 2022,
        description: 'In 2022, the Udaan Club at IIT Bombay ranked in the top 10, demonstrating impressive effort and collaboration.',
    },
    {
        id: 11,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/JECRC.png",
        title: '1st & 2nd JECRC University',
        year: 2022,
        description: 'In 2022, the Udaan Club at JECRC University achieved both 1st and 2nd positions, showcasing their superior skill and teamwork.',
    },
    {
        id: 10,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/shyadri.png",
        title: 'Top 5 Sahyadri College',
        year: 2022,
        description: 'In 2022, the Udaan Club at Sahyadri College ranked in top 5, showcasing their superior skill and teamwork.',
    },
    {
        id: 9,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/LNMIT.png",
        title: '1st & 2nd LNMIIT',
        year: 2019,
        description: 'In 2019, the Udaan Club at LNMIIT secured both 1st and 2nd positions, demonstrating exceptional talent and teamwork.',
    },
    {
        id: 8,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIT%20Kharagpur%202.png",
        title: '1st IIT Kharagpur',
        year: 2019,
        description: 'In 2019, the Udaan Club at IIT Kharagpur secured 1stpositions, demonstrating exceptional talent and teamwork.',
    },
    {
        id: 7,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/jodh.png",
        title: '3rd IIT Jodhpur',
        year: 2019,
        description: 'In 2019, the Udaan Club at IIT Jodhpur earned 3rd place, reflecting their outstanding performance and commitment.',
    },
    {
        id: 6,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIT%20KHARAGPUR.png",
        title: 'Runner-up IIT Kharagpur',
        year: 2018,
        description: 'In 2018, the Udaan Club at IIT Kharagpur secured the runner-up position, highlighting exceptional performance and dedication.',
    },
    {
        id: 5,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/LNMIT.png",
        title: '2nd & 3rd LNMIIT Jaipur',
        year: 2018,
        description: 'In 2018, the Udaan Club at LNMIIT earned 2nd and 3rd positions, reflecting excellence and strong team effort.',
    },
    {
        id: 4,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIt%20bombay%202017.png",
        title: '3rd IIT Bombay',
        year: 2017,
        description: 'In 2017, the Udaan Club at IIT Bombay achieved 3rd place, demonstrating outstanding performance and collaboration.',
    },
    {
        id: 3,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/jodh.png",
        title: '3rd IIT Jodhpur',
        year: 2017,
        description: 'In 2017, at IIT Jodhpur, the Udaan Club secured 3rd position, showcasing exceptional skills and teamwork.',
    },
    {
        id: 2,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIT%20Kanpur.png",
        title: '4 Team Cash Reward IIT Kanpur',
        year: 2016,
        description: 'In 2016, the Udaan Club at IIT Jodhpur ranked among the top 4 teams, earning a reward of ₹5000 each.',
    },
    {
        id: 1,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/iit%20jodh.png",
        year: 2016,
        title: 'Top 10 IIT Jodhpur',
        description: 'In 2016, at IIT Jodhpur, the Udaan Club achieved remarkable success by securing the top 10 position in their competition.',
    },
];

function Courses() {
    return (
        <div className="courses-page">
            {/* Header Section */}
            <header className="height-75 sm:py-20">
                <div className="container min-h-screen px-4 sm:px-6 py-10 sm:py-16 md:py-20 
                                flex flex-col items-center justify-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <h1 className="text-center font-semibold text-purple-300 uppercase italic 
                                     text-5xl lg:text-5xl md:text-5xl  ">
                            Achievements
                        </h1>
                        <p className="text-white
                                      w-full sm:w-11/12 md:w-4/5 lg:w-3/4 
                                      mx-auto px-4 sm:px-6 
                                      mb-5 sm:mb-8 md:mb-10 
                                      uppercase italic  
                                      text-sm sm:text-base md:text-lg 
                                      leading-relaxed sm:leading-relaxed 
                                      tracking-wide text-justify ">
                            The Udaan Aero Modelling Club has a proud record of achievements, consistently winning aeromodelling 
                            competitions at prestigious institutions like NITs, IITs, and other renowned colleges across India. 
                            These victories highlight the club's commitment to excellence, technical skill, and innovation in 
                            the field of aeromodeling. Through these competitive experiences, members gain valuable exposure, 
                            showcasing their talents and representing their institution at a national level.
                        </p>
                    </div>
                </div>
            </header>

            {/* Achievements Cards */}
            <div className="container py-5">
                <div className="row g-4">
                    {courses.map((course) => (
                        <div key={course.id} className="col-12 col-md-6 col-lg-4">
                            <Card className="h-100 text-danger shadow italic scale-hover-effect hover:shadow-none">
                                <Card.Img 
                                    src={course.img} 
                                    alt={course.title}
                                    className="h-full object-cover"
                                />
                                <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-3 p-md-4">
                                    <Card.Title className="fs-4 md:fs-2 text-yellow-200 font-bold italic text-center uppercase">
                                        {course.title}
                                    </Card.Title>
                                    <Card.Title className="fs-5 md:fs-3 text-danger font-italic year">
                                        {course.year}
                                    </Card.Title>
                                    <Card.Text className="text-center text-purple-300 text-sm md:text-base">
                                        {course.description}
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;
