import React, { useState } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const blogs = [
    {
        id: 19,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIT%20RURKEE.png",
        title: '3rd LNMIIT Jaipur',
        year: 2024,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 18,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/mnit.png",
        title: '3rd MNIT Jaipur',
        year: 2024,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 17,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/rgpit.png",
        title: '1st, 2nd & 3rd Consolation',
        year: 2024,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 16,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/manipal.png",
        title: '3rd Manipal University',
        year: 2023,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 15,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/science.png",
        title: '2nd Science Day',
        year: 2023,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 14,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/rgpit.png",
        year: 2023,
        title: '1st & 2nd RGIPT Raebareli',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 13,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/mnit.png",
        year: 2023,
        title: '1st, 3rd & 4th MNIT Jaipur',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 12,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIt%20bombay%202017.png",
        title: 'Top 10 IIT Bombay',
        year: 2022,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 11,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/JECRC.png",
        title: '1st & 2nd JECRC University',
        year: 2022,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 10,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/LNMIT.png",
        title: 'Top 5 Sahyadri College',
        year: 2022,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 9,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/LNMIT.png",
        title: '1st & 2nd LNMIIT',
        year: 2019,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 8,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIT%20Kharagpur%202.png",
        title: '1st IIT Kharagpur',
        year: 2019,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 7,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/jodh.png",
        title: '3rd IIT Jodhpur',
        year: 2019,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!',
    },
    {
        id: 6,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIT%20KHARAGPUR.png",
        title: 'Runner-up IIT Kharagpur',
        year: 2018,
        description: '',
    },
    {
        id: 5,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/LNMIT.png",
        title: '2nd & 3rd LNMIIT Jaipur',
        year: 2018,
        description: 'Securing 2nd and 3rd place in the aeromodelling competition at LNMIIT Jaipur! It must have been an exciting experience. What models did you work on for the competition?',
    },
    {
        id: 4,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIt%20bombay%202017.png",
        title: '3rd IIT Bombay',
        year: 2017,
        description: 'Achieved 3rd place at IIT Bombay in 2017 for showcasing innovative aeromodelling designs and technical expertise. This accomplishment reflected creativity, precision, and teamwork in a competitive setting.',
    },
    {
        id: 3,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/jodh.png",
        title: '3rd IIT Jodhpur',
        year: 2017,
        description: 'Achieved 3rd place at IIT Jodhpur in 2017 for showcasing innovative aeromodelling designs and technical expertise. This accomplishment reflected creativity, precision, and teamwork in a competitive setting.',
    },
    {
        id: 2,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/IIT%20Kanpur.png",
        year: 2016,
        title: '4 Team Cash Reward IIT Kanpur',
        description: 'Secured a 4-team cash reward at IIT Kanpur in 2016 for outstanding innovation and technical excellence.',
    },
    {
        id: 1,
        img: "https://raw.githubusercontent.com/Udaanaeromodelling/udaan/main/uploads/iit%20jodh.png",
        year: 2016,
        title: 'Top 10 IIT Jodhpur',
        description: 'In 2016, IIT Bombay hosted an aeromodelling competition where the top 10 teams demonstrated exceptional innovation, excelling in precision, stability, and advanced aerospace design.',
    },
];


function Blog() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Achievement</h1>
                <p className='w-75 mb-5 text-justify'>The Udaan Aero Modelling Club has a proud record of achievements...</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card
                                  className='h-100 shadow scale-hover-effect bg-dark text-light border-0'
                                  onMouseEnter={() => handleMouseEnter(blog.id)}
                                  onMouseLeave={handleMouseLeave}
                                >
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className={`p-md-5 d-flex flex-column align-items-center ${hovered === blog.id ? 'visible' : ''}`}>
                                        <Card.Title className='fs-2 mb-4 text-center'>{blog.title}</Card.Title>
                                        <Card.Title className='fs-2 mb-4'>{blog.year}</Card.Title>
                                        <Card.Text className='text-justify'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Blog;
