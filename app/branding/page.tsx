import Image from "next/image"
import Link from "next/link"

export default function BrandingPage() {
  return (
<div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
        <span className="text-[110px] text-[#E9DE0D] -ml-2 mix-blend-multiply">B</span>
        <span className="text-[110px] text-[#E9DE0D] -ml-2 mix-blend-multiply">R</span>
        <span className="text-[110px] text-[#E9DE0D] -ml-2 mix-blend-multiply">A</span>
        <span className="text-[110px] text-[#E9DE0D] -ml-2 mix-blend-multiply">N</span>
        <span className="text-[110px] text-[#E9DE0D] -ml-2 mix-blend-multiply">D</span>
        <span className="text-[110px] text-[#E9DE0D] -ml-2 mix-blend-multiply">I</span>  
        <span className="text-[110px] text-[#E9DE0D] -ml-2 mix-blend-multiply">N</span>  
        <span className="text-[110px] text-[#E9DE0D] -ml-2 mix-blend-multiply">G</span>  
        </h1>

            < Link href="/nestle">
          <Image
          src="/Nestle.png"
          alt="DECK RANT"
          width={500}
          height={500}
          className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </Link>

        <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >NESTLÉ REDISGN IN ART NOUVEAU STYLE [2025]</p>

         <Image
                  src="/MAKAN.png"
                  alt="MAKAN POSTER"
                  width={500}
                  height={500}
                  className="shadow-lg"
                />

         <p className="text-[30px] text-[#251B23] mb-8"  >MAKAN POSTER [2025]</p>

 <Image 
  src="/BG.png" 
  alt="BIFEST BACKGROUND" 
  width={900} 
  height={900} 
  className="shadow-lg" 
  />

        <p className="text-[30px] text-[#251B23] mb-8"  >BIFEST BACKDROP DESIGN [2025]</p>


                <Image
                  src="/LOGO.png"
                  alt="EVENT LOGO"
                  width={600}
                  height={600}
                  className="shadow-lg"
                />

          <div className="grid grid-cols-3">
  <Image src="/TUMBLR.png" alt="TUMBLR MOCK UP" width={400} height={300} className="shadow-lg" />
  <Image src="/MOCKUPPOSTER.png" alt="POSTER MOCKUP" width={400} height={900} className="shadow-lg" />
      </div>

   <p className="text-[30px] text-[#251B23] mb-8"  >PANEN RAYA VISUAL IDENTITY [2025]</p>

                <Image
                  src="/MONOGRAM.png"
                  alt="MONOGRAM LOGO"
                  width={500}
                  height={500}
                  className="shadow-lg"
                />
   <p className="text-[30px] text-[#251B23] mb-8"  >MONOGRAM DESIGN [2025]</p>
                 <Image
                  src="/BAGEL.png"
                  alt="BAGEL BUSINESS LOGO"
                  width={500}
                  height={500}
                  className="shadow-lg"
                />
   <p className="text-[30px] text-[#251B23] mb-8"  >BAGELOGY LOGO DESIGN [2023]</p>
                 <Image
                  src="/BOW.png"
                  alt="LANE N LOOP LOGO"
                  width={500}
                  height={500}
                  className="shadow-lg"
                />
   <p className="text-[30px] text-[#251B23] mb-8"  >LACE N LOOP BRAND LOGO [2023]</p>

      </section>
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2026 Emma&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
  )
}
