import React from 'react'
import Button from '../../components/button/button'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className=''>
      <section className="mt-[40px] flex w-[90%] m-auto p-2 justify-evenly items-center">
        <div className="">
          <p className='text-[50px] font-bold text-cyan-500'>Move faster with ready <br /> React UI tools</p>
          <p className='text-[20px] mt-[10px]'>CUI offers a comprehensive suite of free UI tools to help you ship <br /> new features faster. Start with Material UI, our fully-loaded <br /> component library, or bring your own design system to our <br /> production-ready components.</p>
          <Button variant='danger' className='mt-[30px]'>More about library</Button>
        </div>
        <img className='rounded-md w-[30%] h-[300px]' src="../../../src/assets/Без названия.jfif" alt="" />
      </section>

      <section className='mt-[50px] w-[90%] m-auto'>
       <p className='text-cyan-600 font-bold'>Products</p>
       <p className='text-[40px] font-semibold text-cyan-500'>Every component you need is <br/> <span className='text-black dark:text-white'>ready for production</span></p>
       <p>Build at an accelerated pace without sacrificing flexibility or control.</p>
 
      </section>
    </motion.div>
  )
}

export default Home
