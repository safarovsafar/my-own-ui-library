import React, { useState } from 'react'
import Button from '../../components/button/button'
import Checkbox from '../../components/checkbox/checkbox'
import CheckboxCode from '../../widgets/checkbox/checkboxCode'
import InputCode from '../../widgets/input/inputCode';
import CardCode from '../../widgets/card/cardCode';
import ModalCode from '../../widgets/modal/modalCode';
import DrawerCode from '../../widgets/drawer/drawerCode';
import { motion } from 'framer-motion'


const Galery = () => {
  const [expand, setExpand] = useState(false)

  return (
    <div className='p-4'>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ boxShadow: "1px 1px 8px" }} className="w-[98%] m-auto rounded-md text-2xl shadow-2xl px-9 py-4">
        <p className='text-[30px] font-semibold'>Button</p>
        <hr className='mt-2' />
        <p className='mt-2'>Buttons allow users to take actions, and make choices, with a single tap.</p>
        <p className='mt-[100px]'>Buttons have many variants that is used in various cases</p>

        <div className=' flex gap-16 items-center text-[15px] mt-9'>
          <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Feedback</p>
          <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Bundle size</p>
          <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Source</p>
          <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Material design</p>
          <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Figma</p>
          <p className='border border-black dark:border-white rounded-2xl px-2 py-1'>Sketch</p>
          <p className='border border-black dark:border-white rounded-2xl p-2'>WAI-ARIA</p>
        </div>
        <p className='text-[23px] font-bold mt-[20px]'>Basic button</p>

        <div className="flex justify-center gap-4 mt-[30px]">
          <Button>Primary</Button>
          <Button variant='outline'>Outlined</Button>
          <Button variant='ghost'>Ghost</Button>
        </div>

        <div className='w-[90%] m-auto mt-[30px] hover:border-cyan-600 hover:shadow-2xl rounded-2xl pl-20  p-4 border'>
          <p className='text-orange-400'>{`<Button>Primary</Button>`}</p>
          <p className='text-orange-400 mt-2'>{`<Button variant="outline">Outline</Button>`}</p>
          <p className='text-orange-400 mt-2'>{`<Button variant="ghost">Ghost</Button>`}</p>
          {expand && (
            <>
              <p className='text-orange-400 mt-2'>{`<Button variant="danger">Danger</Button>`}</p>
              <p className='text-orange-400 mt-2'>{`<Button variant="secondary">Secondary</Button>`}</p>
            </>
          )}
        </div>

        <div className="mt-[5px] text-end w-[90%] m-auto">
          {!expand && <p onClick={() => setExpand(true)} className='border border-black hover:text-cyan-500 hover:border-cyan-500 cursor-pointer text-[15px] dark:border-white rounded-2xl inline  p-2'>Expand code</p>}
          {expand && <p onClick={() => setExpand(false)} className='border border-black hover:text-cyan-500 hover:border-cyan-500 cursor-pointer text-[15px] dark:border-white rounded-2xl inline  p-2'>Collapse code</p>}
        </div>

        <CheckboxCode />
        <InputCode />
        <CardCode/>
        <ModalCode />
        <DrawerCode />

      </motion.div>
    </div>
  )
}

export default Galery
