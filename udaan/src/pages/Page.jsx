import React, { useRef } from 'react';
import './Page.css';
import Video from '../assets/FLYIGHTQUEST.mp4';

const Page = () => {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const contact = [
        {
            name: 'Bhawuk Arora',
            email: '2022pceadbhawuk017@poornima.org',
            no: '+919782176005',
        },
        {
            name: 'Vikhyat Agrawal',
            email: '2023pcecavikhyat059@poornima.org',
            no: '+916398644252',
        },
        {
            name: 'Abhinav Mehta',
            email: '2023pcecsabhinav004@poornima.org',
            no: '+919521179009',
        },
    ];

    return (
        <div className="about-page min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
    <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Section */}
            <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-black mt-11 sm:mt-0">
                <video
                    className="w-full h-full object-contain"
                    autoPlay
                    muted
                    ref={videoRef}
                    onEnded={handleVideoEnd}
                >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Contact Details Section */}
            <div className="w-full flex flex-col gap-6">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#1342b0]">
                        Contact Details
                    </h2>
                    <div className="space-y-4">
                        {contact.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-4 last:border-b-0"
                            >
                                <div className="font-semibold text-base sm:text-lg text-gray-800">
                                    {item.name}
                                </div>
                                <div className="text-sm sm:text-md text-gray-600">
                                    {item.email}
                                </div>
                                <div className="text-sm sm:text-md text-gray-600">
                                    {item.no}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Registration Button */}
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                    <a
                        href="https://unstop.com/competitions/flight-quest-udaan-aeromodellng-club-1308524?lb=dSkZmec"
                        className="bg-[#39bef7] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#1342b0] transition duration-300 no-underline text-base sm:text-lg md:text-xl font-semibold transform hover:scale-105 active:scale-95"
                    >
                        Click here to register
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    );
    
};


export default Page;