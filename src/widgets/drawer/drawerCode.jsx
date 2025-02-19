import React, { useState } from 'react'
import { motion } from "framer-motion";
import Drawer from '../../components/drawer/drawer'
import Button from '../../components/button/button';

export default function ModalCode() {
    const [open, setOpen] = useState(false)
    return (
        <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} className='mt-[50px]'>
            <p className='text-[30px] font-semibold'>Drawer</p>
            <hr className='mt-2' />
            <p className='mt-2'>Simple Drawer in react</p>
            <p className='mt-[100px]'>Drwer is a component that is used in various cases</p>

            <div className=' flex gap-16 items-center text-[15px] mt-9'>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Feedback</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Bundle size</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Source</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Material design</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Figma</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Sketch</p>
                <p className='border border-black dark:border-white rounded-2xl p-2'>WAI-ARIA</p>
            </div>
            <p className='text-[23px] font-bold mt-[20px]'>Basic drawer</p>

            <div className="flex justify-center gap-4 mt-[30px]">
                <Button onClick={() => setOpen(true)} >Open Drawer</Button>
                <Drawer isOpen={open} onClose={() => setOpen(false)}>
                    <Button variant='danger' className='mr-[10px]'>Click</Button>
                    <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">
                        Learn More
                    </button>
                </Drawer>
            </div>

            <div className='w-[90%] m-auto mt-[30px] hover:border-cyan-600 hover:shadow-2xl rounded-2xl pl-20  p-4 border'>
                <p className='text-orange-400'>{`<Drawer>`}</p>
                <p className='text-orange-400 ml-[30px]'>{` <Button variant='danger' className='mr-[10px]'>Click</Button>`}</p>
                <p className='text-orange-400 ml-[30px]'>{` <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">`}</p>
                <p className='text-orange-400 ml-[50px]'>{` Learn More`}</p>
                <p className='text-orange-400 ml-[30px]'>{` </button>`}</p>
                <p className='text-orange-400'>{`</Drawer>`}</p>
            </div>

            <div className="mt-[5px] text-end w-[90%] m-auto">
                <p className='border border-black text-gray-500 cursor-pointer text-[15px] rounded-2xl inline  p-2'>Expand code</p>
            </div>
        </motion.div>
    )
}

