import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/teams/team-1.jpg';
import team2 from '../../assets/teams/team-2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto">
                <motion.div
                    initial={{ translateX:-200, opacity:0 }}
                    animate={{translateX:0,opacity:100}}
                    transition={{ duration: 3 }}
                    className='w-1/2'>
                    <motion.img
                        animate={{ translateY: [30, 90, 30] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl shadow-2xl border-s-8 border-b-8 border-blue-500"
                    />
                    <motion.img
                        animate={{ translateX: [100, 220, 100] }}
                        transition={{ duration: 11, repeat: Infinity, delay: 3 }}
                        src={team2}
                        className='max-w-sm rounded-t-3xl rounded-br-3xl shadow-2xl border-s-8 border-b-8 border-blue-500'
                    />
                </motion.div>
                <div className='w-1/2'>
                    <motion.h1
                        initial={{ scale: 0.3 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                        className="text-5xl font-bold">Box
                        <motion.span
                            animate={{ color: ['#e23a16 ', '#13eb34', '#1d13eb'] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className='ml-2'
                        >
                            Office
                        </motion.span> News!</motion.h1>
                    <motion.p
                        initial={{ translateX: -200 }}
                        animate={{ translateX: 0 }}
                        transition={{ duration: 2 }}
                        className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, translateY: 100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <motion.button
                            // initial={{ scale: -1 }}
                            // animate={{ scale: [5, 1] }}
                            // exit={{ scale: 1 }}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="btn btn-primary">Get Started</motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;