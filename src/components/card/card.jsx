import React from 'react';
import { motion } from 'framer-motion';

const Card = ({children}) => {
    return (
        <motion.div whileHover={{scale:1.1}} transition={{duration:0.1}} className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-400 to-blue-600 border border-gray-300 transform transition scale-100 duration-500 hover:scale-105">
            <div className="p-4 text-white">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
