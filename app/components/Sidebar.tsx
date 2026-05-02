"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"; // ✅ ADD THIS
import { Twitter, Youtube, Linkedin, Instagram, ShoppingCartIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}   // start off screen (right)
      animate={{ x: 0, opacity: 1 }}     // slide into place
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-screen w-80 bg-[#FFB700] text-[#251B23] fixed right-0 top-0 p-6 flex flex-col"
    >
      <nav className="flex flex-col gap-5">
       <Link href="/" > <Image src="/LOGO NEW.png" alt="EMI BRAND" width={200}height={200} className="m-0 p-0 block transition-transform duration-300 ease-in-out hover:scale-105"/></Link>
        <Link href="/" className="text-[28px] transition-transform duration-300 ease-in-out hover:text-[#F7F3EA]">PERSONAL PROJECT</Link>
        <Link href="/branding" className="text-[28px] hover:text-[#F7F3EA]">BRANDING</Link>
        <Link href="/fanart" className="text-[28px] hover:text-[#F7F3EA]">FANART</Link>
        <Link href="/misc" className="text-[28px] hover:text-[#F7F3EA]">MISCELLANEOUS</Link>
        <Link href="/about" className="text-[28px] hover:text-[#F7F3EA]">ABOUT</Link>
      </nav>
      
        <div className="grid grid-cols-5 mt-10">
   
      <Link href="https://www.instagram.com/emisnt_2/" target="_blank">
        <Instagram className="transition-transform duration-300 ease-in-out w-10 h-10 text-[#251B23] hover:text-[#F7F3EA] transition" />

      </Link>
  
      <Link href="https://x.com/2Emisnt?s=09" target="_blank">
        <Twitter className="w-10 h-10 text-[#251B23] hover:text-[#F7F3EA] transition" />
      </Link>

      <Link href="https://www.youtube.com/channel/UC-IOTnJ6-7c9jECIMgxx-BQ">
        <Youtube className="w-10 h-10 text-[#251B23] hover:text-[#F7F3EA] transition" />
      </Link>

      <Link href="https://www.linkedin.com/in/emmanuela-agatha-susanto-31a228324/" target="_blank">
        <Linkedin className="w-10 h-10 text-[#251B23] hover:text-[#F7F3EA] transition" />
      </Link>

      <Link href="https://vgen.co/emisnt_2" target="_blank">
        <ShoppingCartIcon className="w-10 h-10 text-[#251B23] hover:text-[#F7F3EA] transition" />
      </Link>
    </div>

    </motion.div>
  )
}

