import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMarqueeClick = () => {
        window.location.href = "/page";     };

    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#1342b0] via-[#5682e8] to-[#39bef7]">
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
            
            <motion.div 
                className="marquee-wrapper flex"
                animate={{
                    x: [0, '-100%'],
                    transition: {
                        x: {
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear"
                        }
                    }
                }}
            >
                <div 
                    className={`
                        marquee-container 
                        flex 
                        items-center 
                        space-x-8 
                        py-4
                        cursor-pointer 
                        transition-all 
                        duration-300
                        ${isHovered ? 'scale-[1.02]' : ''}
                    `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleMarqueeClick}
                >
                    {/* Repeat the content to create infinite scroll effect */}
                    {[1, 2, 3].map((_, index) => (
                        <div 
                            key={index} 
                            className="flex items-center space-x-6 min-w-max"
                        >
                            <motion.div
                                animate={{
                                    x: isHovered ? 15 : 0,
                                    transition: { duration: 0.3 }
                                }}
                                className="text-3xl"
                            >
                                🚁
                            </motion.div>

                            <div className="text-white text-xl font-semibold tracking-wide max-w-4xl">
                                <span className="font-bold text-yellow-300">Flight Quest</span> - An exhilarating RC Plane competition showcasing engineering brilliance, creativity, and exceptional flying skills! Witness the best minds take flight and soar to new heights in this thrilling aerial showdown.
                            </div>

                            <motion.div
                                animate={{
                                    x: isHovered ? -15 : 0,
                                    transition: { duration: 0.3 }
                                }}
                                className="text-3xl"
                            >
                                🏆
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Subtle glow effect */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-50 blur-sm"></div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-50 blur-sm"></div>
        </div>
    );
};

export default Marquee;