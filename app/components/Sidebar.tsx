"use client"
import Link from "next/link";
import { Twitter, Youtube, Linkedin, Instagram } from "lucide-react";


export default function Sidebar() {
  return (
    <div className="h-screen w-80 bg-[#FFB700] text-[#251B23] fixed right-0 top-0 p-6 flex flex-col">
      <nav className="flex flex-col gap-10">
        <Link href="/" className="text-[28px] hover:text-[#F7F3EA]">PERSONAL PROJECT</Link>
        <Link href="/branding" className="text-[28px] hover:text-[#F7F3EA]">BRANDING</Link>
        <Link href="/fanart" className="text-[28px] hover:text-[#F7F3EA]">FANART</Link>
        <Link href="/misc" className="text-[28px] hover:text-[#F7F3EA]">MISCELLANEOUS</Link>
        <Link href="/about" className="text-[28px] hover:text-[#F7F3EA]">ABOUT</Link>
      </nav>
      
        <div className="grid grid-cols-4 mt-10">
   
      <Link href="https://www.instagram.com/accounts/login/?next=%2Femisnt_2%2F&source=omni_redirect" target="_blank">
        <Instagram className="w-10 h-10 text-[#251B23] hover:text-[#F7F3EA] transition" />

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
    </div>

    </div>
  )
}

