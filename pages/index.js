import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [displayLogo, setDisplayLogo] = useState(true)
  const [offSet, setOffSet] = useState(null)
  const imgRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const setScroll = () => {
    if (window.innerWidth < 1024) {
      setDisplayLogo(true)
      return
    }
    if (imgRef.current.getBoundingClientRect().bottom < 0 && window.innerWidth > 1024) {
      setDisplayLogo(true)
    }else if (imgRef.current.getBoundingClientRect().bottom > 0 && window.innerWidth > 1024) {
      setDisplayLogo(false)
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, [])

  return (
    <div>
      <Head>
        <title>Gumroad - Sell what you know and see what sticks</title>
        <meta name="description" content="A template for nextjs with tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className="px-[2rem] py-[2vw]  hidden lg:block border-b-2 border-b-black">
          <img
            src="/gumroad-logo.svg"
            width="100%"
            ref={imgRef}
          />
        </div>
        <div className={`flex justify-between items-center sticky top-0 pl-[2rem] bg-white border-b-2 border-b-black ${isOpen?'nav active':''}`}>
          <div className={`${displayLogo?'block':'hidden'}  `} >
          <img
            src="/gumroad-logo.svg"
            width="100%"
          />
          </div>
          <div className=" gap-10 font-semibold hidden lg:flex">
            <div className='nav-link'>Features</div>
            <div className='nav-link'>Pricing</div>
            <div className='nav-link'>University</div>
            <div className='nav-link'>Blog</div>
            <div className='nav-link'>Discover</div>
          </div>
          <div className=" lg:flex font-semibold hidden">
                <div className=" px-[3vw] py-[1.5rem] border-l-2 border-black hover:bg-[#ff90e8]">Login</div>
                <div className=" px-[3vw] py-[1.5rem] text-white bg-black hover:text-black hover:bg-[#ff90e8] border-l-2 border-black">Start Selling</div>
          </div>
          <button onClick={toggleMenu} className={`burger ${isOpen?'active':''} transition-all duration-200 lg:hidden p-[1.5rem]`}>
            <div className="bar transition-all duration-200 w-8 h-1 bg-black"></div>
            <div className="bar transition-all duration-200 w-8 h-1 mt-2 bg-black"></div>
            <div className="bar transition-all duration-200 w-8 h-1 mt-2 bg-black"></div>
          </button>
        </div>
          <div className={`menu lg:hidden fixed h-screen -z-10 bg-black w-screen top-10 ${
                    isOpen ? "active" : ""
                }`}>
jkl;kj
        <div className="h-screen px-10 lg:hidden">
          <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">Login</div>
          <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">Start Selling</div>
          <hr/>
          <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">Features</div>
          <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">Pricing</div>
          <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">University</div>
          <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">Blog</div>
          <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">Discover</div>
        </div>
          </div>
      </main>

    </div>
  )
}
