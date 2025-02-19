import React from 'react'
import { motion } from 'framer-motion'

const Docs = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ boxShadow: "1px 1px 8px" }} className="w-[98%] m-auto mt-[20px] rounded-md text-2xl shadow-2xl px-9 py-6">
      <p className='text-[25px] font-semibold'>Introduction</p>
      <p className='mt-5 text-xl '>CUI is a set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks and AI models. Open Source. Open Code.</p>
      <p className='mt-[100px] text-xl font-bold'>This is not a component library. It is how you build your component library.</p>
      <p className='mt-7 text-xl'>You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.</p>
      <p className='mt-7 text-xl'>This approach works well until you need to customize a component to fit your design system or require one that isn’t included in the library. Often, you end up wrapping library components, writing workarounds to override styles, or mixing components from different libraries with incompatible APIs.</p>

      <p className='mt-7 text-xl'>This is what shadcn/ui aims to solve. It is built around the following principles:</p>

      <li className='mt-7'> Open Code: The top layer of your component code is open for modification.</li>
      <li className='mt-3'>Composition: Every component uses a common, composable interface, making them predictable.</li>
      <li className='mt-3'>AI-Ready: Open code for LLMs to read, understand, and improve.</li>
      <li className='mt-3'>Beautiful Defaults: Carefully chosen default styles, so you get great design out-of-the-box.</li>
      <li className='mt-3'>Distribution: A flat-file schema and command-line tool make it easy to distribute components.</li>

      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} className="mt-7">
        <p className='text-3xl font-bold'>Open</p>
        <hr className='mt-3' />
        <p className='mt-3 text-xl'>Beautiful Defaults: Carefully chosen default styles, so you get great design out-of-the-box.</p>
        <li className='mt-3'>Composition: Every component uses a common, composable interface, making them predictable.</li>
        <li className='mt-3'>Easy Customization: Modify any part of a component to fit your design and functionality requirements. </li>
        <li className='mt-3'>Beautiful Defaults: Carefully chosen default styles, so you get great design out-of-the-box.</li>
        <li className='mt-3'>Distribution: A flat-file schema and command-line tool make it easy to distribute components.</li>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} className="mt-7">
        <p className='text-3xl font-bold'>Composition</p>
        <hr className='mt-3'/>

        <p className='mt-10 text-2xl font-semibold'>Every component in shadcn/ui shares a common, composable interface. If a component does not exist, we bring it in, make it composable, and adjust its style to match and work with the rest of the design system.</p>
        <p className='mt-8 text-2xl font-semibold'>A shared, composable interface means it's predictable for both your team and LLMs. You are not learning different APIs for every new component. Even for third-party ones.</p>
      </motion.div>
    </motion.div>
  )
}

export default Docs
