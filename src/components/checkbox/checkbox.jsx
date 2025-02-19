import { cva } from 'class-variance-authority';
import React from 'react';

const checkboxVariants = cva("transition-all duration-300 flex items-center justify-center", {
    variants: {
        variant: {
            primary: "border-2 border-gray-400 rounded-lg peer-checked:border-purple-500 peer-checked:bg-purple-500",
            secondary: "border-2 border-gray-400 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500",
            danger: "border-2 border-gray-400 rounded-lg peer-checked:border-red-500 peer-checked:bg-red-500",
        }
    }
})

const Checkbox = ({ label, checked, onChange, variant = "primary", className = "", ...props }) => {
    return (
        <label className="flex items-center space-x-3 cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="hidden peer"
                />
                <div className={`w-6 h-6  transition-all duration-300 flex items-center justify-center ${checkboxVariants({ variant })} ${className}`}>
                    <svg
                        className={`w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M20.285 6.709a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 14.586l8.293-8.293a1 1 0 0 1 1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <span className="text-lg text-gray-700">{label}</span>
        </label>
    );
};

export default Checkbox;
