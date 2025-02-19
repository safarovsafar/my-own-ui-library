
import React, { ReactNode } from "react";
import { motion } from "framer-motion";


const Drawer = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={onClose}
                />
            )}

            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 p-5"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-black rounded-md"
                >
                    &times;
                </button>

                {/* Drawer Content */}
                {children}
            </motion.div>
        </>
    );
};

export default Drawer;

//  <div className="p-5">
//             <button
//               onClick={() => setIsOpen(true)}
//               className="p-3 bg-blue-500 text-white rounded-lg"> Открыть Drawer
//             </button>

//             <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
//               <h2 className="text-xl font-bold">This drawer</h2>
//               <p className="mt-2">Здесь может быть любой контент</p>
//             </Drawer>
//    </div>