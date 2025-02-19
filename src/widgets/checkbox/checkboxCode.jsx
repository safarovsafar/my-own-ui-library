import React from 'react'
import Checkbox from '../../components/checkbox/checkbox.jsx'
import { motion } from "framer-motion";

const CheckboxCode = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} className='mt-[50px]'>
            <p className='text-[30px] font-semibold'>Checkbox</p>
            <hr className='mt-2' />
            <p className='mt-2'>Checkboxes allow users to take actions, and make choices, with a single tap.</p>
            <p className='mt-[100px]'>Checkboxes have many variants that is used in various cases</p>

            <div className=' flex gap-16 items-center text-[15px] mt-9'>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Feedback</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Bundle size</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Source</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Material design</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Figma</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Sketch</p>
                <p className='border border-black dark:border-white rounded-2xl p-2'>WAI-ARIA</p>
            </div>
            <p className='text-[23px] font-bold mt-[20px]'>Basic checkboxes</p>

            <div className="flex justify-center gap-4 mt-[30px]">
                <Checkbox variant='primary'>Primary</Checkbox>
                <Checkbox variant='secondary'>Secondary</Checkbox>
                <Checkbox variant='danger'>Danger</Checkbox>
            </div>

            <div className='w-[90%] m-auto mt-[30px] hover:border-cyan-600 hover:shadow-2xl rounded-2xl pl-20  p-4 border'>
                <p className='text-orange-400'>{`<Checkbox variant="primary"/>`}</p>
                <p className='text-orange-400 mt-2'>{`<Checkbox variant="danger"/>`}</p>
                <p className='text-orange-400 mt-2'>{`<Checkbox variant="secondary"/>`}</p>
            </div>

            <div className="mt-[5px] text-end w-[90%] m-auto">
                <p className='border border-black text-gray-500 cursor-pointer text-[15px] rounded-2xl inline  p-2'>Expand code</p>
            </div>
        </motion.div>
    )
}

export default CheckboxCode
