import React, { useState } from 'react';

const Input = ({ label, value, onChange, placeholder = '', type = 'text', disabled = false, required = false, error, className = '',
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`relative ${className}`}>
            <div
                className={`border-2 rounded-lg p-2 pb-2 transition-all duration-300 ${error
                        ? 'border-red-500'
                        : isFocused || value
                            ? 'border-blue-500'
                            : 'border-gray-300'
                    } ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`}
            >
                <label
                    className={`absolute left-3 transition-all duration-300 text-gray-500 ${isFocused || value ? '-top-3 text-sm bg-white dark:bg-black px-1 text-blue-500' : 'top-3 text-lg'
                        }`}
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full bg-transparent outline-none text-lg "
                />
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default Input;
