import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
// import Signup from './signup'
import Footer from '../components/Footer'

function Home() {
    const [isOpen, setIsOpen] = useState(false)

    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>                   
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {/* <Signup />  */}
            <HeroSection />
            <Footer />
        </>
    )
}

export default Home
