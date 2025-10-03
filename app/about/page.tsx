import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h2>Projects</h2>
      <h1 className="text-6xl font-bold tracking-tight">
        <span className="text-[200px] text-[#0CA4D5] -ml-2 mix-blend-multiply">A</span>
        <span className="text-[200px] text-[#0CA4D5] -ml-2 mix-blend-multiply">B</span>
        <span className="text-[200px] text-[#0CA4D5] -ml-2 mix-blend-multiply">O</span>
        <span className="text-[200px] text-[#0CA4D5] -ml-2 mix-blend-multiply">U</span>
        <span className="text-[200px] text-[#0CA4D5] -ml-2 mix-blend-multiply">T</span>
        </h1>

      <div className="flex items-center gap-8">
       <Image
              src="/FOTO.jpg"
              alt="FOTO"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
          />

        <div>
          <h1 className=" text-[43px] text-[#251B23]" >EMMANUELA AGATHA S.</h1>
          <p className="text-[30px] text-[#E3086F]"> Indonesian illustartor </p>

           <p className="text-[30px] text-[#E3086F]"> Majoring in Visual Design </p>

         <Link href="https://drive.google.com/drive/folders/1rvZ4DxmW67GkDhhqtQ_5snJPG2tDaXEu?usp=drive_link" 
         target="_blank" 
         rel="noopener noreferrer"
         className="bg-[#E9DE0D] text-[100px] text-[#E3086F] underline rounded-lg hover:text-[#F7F3EA]"> 
         RESUME 
        </Link>
        </div>
      </div>
        
  <div className="flex items-center gap-8">
        <div>
          <p className=" text-[30px] text-[#251B23] mb-7 mt-7">
        I&apos;m passionate in learning and exploring things
such as history and cultures to apply them in my
artworks. The most creative thing about it is seeing how people will
perceive those elements, hoping they can resonate and also be
inspired by them.
</p>
  <p className=" text-[30px] text-[#251B23]">
I&apos;m skilled with creating designs and artworks that have a distinct
feel to them. Proven to also adapt with works given, time manage
and working together with others around.
          </p>

        </div>

        <Image
          src="/Icon.png"
          alt="ICON"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
   <h1 className=" text-[43px] text-[#251B23] mt-10" >PROGRAM USED</h1>
    <Image
          src="/APPS.png"
          alt="PROGRAMS"
          width={900}
          height={900}
        />

 <h1 className=" text-[43px] text-[#251B23] mt-10" >INTERESTS</h1>
    <p className="text-[30px] text-[#251B23]"> - art and studies</p>
    <p className="text-[30px] text-[#251B23]"> - personal projects (ocs, concepts, etc) </p>
    <p className="text-[30px] text-[#251B23]"> - games (honkai star rail and undertale/deltarune) </p>
    <p className="text-[30px] text-[#251B23]"> - animated shows and movies </p>
    <p className="text-[30px] text-[#251B23]"> - music, mainly piano and singing or just songs in general </p>
    <p className="text-[30px] text-[#251B23]"> - anime and manga (one piece, mp100, skip and loafer)</p>
    <p className="text-[30px] text-[#251B23]"> - mythology (specifically mahabarata) </p>
    
  <h1 className=" text-[43px] text-[#251B23] mt-10" >LANGUAGE</h1>
    <p className="text-[30px] text-[#251B23]"> I have native fluency in Indonesian and speak English since grade school.
</p>

  <p className="text-center text-[30px] text-[#251B23] mt-20">Interested in working with me? You can contact me</p>
  <p className="text-center text-[30px] text-[#251B23]">through my socials or through my email!</p>

    <Link
        href="mailto:e.agatha.susanto@gmail.com" 
         target="_blank" 
         rel="noopener noreferrer"
         className="text-center bg-[#E3086F] text-[100px] text-[#E9DE0D] underline rounded-lg hover:text-[#F7F3EA]"
         > 
         SEND ME AN EMAIL!
        </Link>

 <Image
          src="/Sona.png"
          alt="SONA"
          width={900}
          height={900}
        />
      </section>
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2025 Emma&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
  )
}
