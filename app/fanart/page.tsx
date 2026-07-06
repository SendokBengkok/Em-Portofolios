import Image from "next/image"
export default function FanartPage() {
  return (
<div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
 
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
        <span className="text-[125px] text-[#E3086F] -ml-2 mix-blend-multiply">F</span>
        <span className="text-[125px] text-[#E3086F] -ml-2 mix-blend-multiply">A</span>
        <span className="text-[125px] text-[#E3086F] -ml-2 mix-blend-multiply">N</span>
        <span className="text-[125px] text-[#E3086F] -ml-2 mix-blend-multiply">A</span>
        <span className="text-[125px] text-[#E3086F] -ml-2 mix-blend-multiply">R</span>  
        <span className="text-[125px] text-[#E3086F] -ml-2 mix-blend-multiply">T</span>  
        </h1>

        <Image
                          src="/RING.png"
                          alt="RING-RING"
                          width={900}
                          height={900}
                          className="shadow-lg"
                        />
        
                 <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >SOMEONE'S CALLING (ONE PIECE) [2026]</p>
 <Image 
          src="/LUSAN.png" 
          alt="LUFFY AND SANJI FANART" 
          width={1100} 
          height={1100} 
          className="shadow-lg" 
          />
                <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >UNCONDITIONAL LOVE FOR SOMEONE LIKE YOU (ONE PIECE) [2026]</p>
      
      <Image 
          src="/PHM.png" 
          alt="PROJECT HAIL MARY FANART" 
          width={1100} 
          height={1100} 
          className="shadow-lg" 
          />
                <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >A MERCIFUL UNIVERSE (PROJECT HAIL MARY) [2026]</p>


        <Image src="/BUSTED.png" 
          alt="RITSU KAGEYAMA POSTER" 
          width={600} height={600} 
          className="shadow-lg" />
        
                <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >BUSTED! (MOB PSYCHO 100) [2026]</p>

          <Image
                          src="/SANJI ZEFF.png"
                          alt="AFTERNOON SPENT"
                          width={900}
                          height={900}
                          className="shadow-lg"
                        />
        
                 <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >AFTERNOON SPENT (ONE PIECE) [2026]</p>
        
         <Image
                          src="/KIM.png"
                          alt="KIM KITSURAGI"
                          width={900}
                          height={900}
                          className="shadow-lg"
                        />
        
                 <p className="text-[30px] text-[#251B23] mt-5 mb-8"  > PLEASE GOD (DISCO ELYSIUM) [2026]</p>
        
        
          
        <div className="grid grid-cols-3">

          <Image src="/ZORO.png" alt="ZORO STICKER" width={400} height={300} className="shadow-lg" />
          <Image src="/SANJIS.png" alt="SANJI STICKER" width={400} height={900} className="shadow-lg" />
          <Image src="/LUFFY.png" alt="LUFFY STICKER" width={400} height={900} className="shadow-lg" />
              </div>
        
                <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >MONSTER TRIO (ONE PIECE) [2025]</p>
        
      </section>
    </div>
    
    
  )
}