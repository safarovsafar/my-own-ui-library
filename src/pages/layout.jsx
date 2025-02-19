import { useState } from 'react'
import Button from '../components/button/button'
import { Link, Outlet } from 'react-router'
import Drawer from '../components/drawer/drawer'
import Input from '../components/input/input';
import Checkbox from '../components/checkbox/checkbox';
import Card from '../components/card/card';
import Switcher from '../darkMode/switcher';


function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-[100%] bg-white text-black dark:bg-black dark:text-white'>
      <header className='w-[100%] px-8 fixed top-0  bg-white dark:bg-black dark:text-white m-auto p-2 flex justify-between items-center'>
        <div className="flex justify-start gap-8 mt-[5px] items-center">
          <img className='w-17 h-17 rounded-full' src="../../src/assets/Flux_Dev_Design_a_realistic_logo_for_a_UI_library_in_React_tha_2.jpeg" alt="" />
          <Link className='font-semibold' to={"/"}>Home</Link>
          <Link className='font-semibold' to={"/galery"}>Components</Link>
          <Link className='font-semibold' to={"/docs"}>Documentation</Link>
        </div>
        <div className="flex items-center gap-8 mt-2">
          <Input type="text" label={"Search"} />
          <Switcher />
        </div>
      </header>

      <div className="mt-[80px] p-2">
        <Outlet />
      </div>

      <hr className='mt-[40px] ' />
      <footer className='w-[95%] m-auto p-4 flex justify-between items-center mt-[10px]'>

        <div className="">
          <div className="flex text-[23px] items-center gap-4">
            <img className='w-[50px] h-[50px] rounded-full' src="../../src/assets/Flux_Dev_Design_a_realistic_logo_for_a_UI_library_in_React_tha_2.jpeg" alt="" />
            <p className='text-[30px] font-semibold'>CUI</p>
          </div>
          <p className='mt-[20px]'>Keep up to date</p>
          <p className='mt-[20px]'>Join our newsletter for regular updates. No spam ever.</p>
          <Input type='text' label={"Email"} className='mt-[30px] w-[300px]' />
        </div>

        <div className="text-[23px]">
          <p className='font-bold'>Explore</p>
          <p><Link to={"/docs"}>Documentation</Link></p>
          <p>Store</p>
          <p>Blog</p>
          <p>ShowCase</p>
          <p>Roadmap</p>
          <p></p>
        </div>

        <div className="text-[23px]">
          <p className='font-bold'>Comapny</p>
          <p><Link to={"/docs"}>About</Link></p>
          <p>Vision</p>
          <p>Careers</p>
          <p>Support</p>
          <p>Privacy policy</p>
          <p>Contact us</p>
        </div>

      </footer>
    </div >
  )
}

export default Layout
