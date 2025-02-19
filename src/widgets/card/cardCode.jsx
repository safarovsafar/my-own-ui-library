import React from 'react'
import { motion } from "framer-motion";
import Card from '../../components/card/card'
import Button from '../../components/button/button';

const CardCode = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} className='mt-[50px]'>
            <p className='text-[30px] font-semibold'>Card</p>
            <hr className='mt-2' />
            <p className='mt-2'>Cards.</p>
            <p className='mt-[100px]'>Cards have a variant that is used in various cases</p>

            <div className=' flex gap-16 items-center text-[15px] mt-9'>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Feedback</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Bundle size</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Source</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Material design</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Figma</p>
                <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Sketch</p>
                <p className='border border-black dark:border-white rounded-2xl p-2'>WAI-ARIA</p>
            </div>
            <p className='text-[23px] font-bold mt-[20px]'>Basic card</p>

            <div className="flex justify-center gap-4 mt-[30px]">
                <Card>
                    <img className="w-[400px] h-56 object-cover" src="../../../src/assets/Без названия.jfif" alt="Card Image" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nostrum quo corporis? Vero sapiente perspiciatis quod fuga sunt, culpa tenetur?</p>
                    <Button variant='danger' className='mr-[10px]'>Click</Button>
                    <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">
                        Learn More
                    </button>
                </Card>
            </div>

            <div className='w-[90%] m-auto mt-[30px] hover:border-cyan-600 hover:shadow-2xl rounded-2xl pl-20  p-4 border'>
                <p className='text-orange-400'>{`<Card>`}</p>
                <p className='text-orange-400 ml-[30px]'>{` <img className="w-[400px] h-56 object-cover" src="../../../src/assets/Без названия.jfif" alt="Card Image" />`}</p>
                <p className='text-orange-400 ml-[30px]'>{` <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nostrum quo corporis? Vero sapiente perspiciatis quod fuga sunt, culpa tenetur?</p>`}</p>
                <p className='text-orange-400 ml-[30px]'>{` <Button variant='danger' className='mr-[10px]'>Click</Button>`}</p>
                <p className='text-orange-400 ml-[30px]'>{` <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">`}</p>
                <p className='text-orange-400 ml-[30px]'>{` Learn More`}</p>
                <p className='text-orange-400 ml-[30px]'>{` </button>`}</p>
                <p className='text-orange-400'>{`</Card>`}</p>
            </div>

            <div className="mt-[5px] text-end w-[90%] m-auto">
                <p className='border border-black text-gray-500 cursor-pointer text-[15px] rounded-2xl inline  p-2'>Expand code</p>
            </div>
        </motion.div>
    )
}

export default CardCode

