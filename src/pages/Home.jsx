import React from 'react'
import NavBar from '../common/Navbar.jsx';
import Footer from '../common/Footer.jsx';
import Hero from '../pages/HomePage/components/HeroBanner.jsx';
import Help from '../pages/HomePage/components/Help.jsx';
import Slide from '../pages/HomePage/components/SlideShowMain.jsx';
import Partners from '../pages/HomePage/components/Partners.jsx';
import ChatBot from './Chatbot/ChatBot.jsx';


export default function Home() {
  return (
    <div>
<NavBar />
<Hero />
<ChatBot />
<Help />
<Slide />
<Partners />
<Footer />
    </div>
  )
}
