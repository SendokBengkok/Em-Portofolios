import Image from "next/image"
export default function FanartPage() {
  return (
    <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h2>Projects</h2>
      <h1 className="text-6xl font-bold tracking-tight mb-10">
        <span className="text-[200px] text-[#E3086F] -ml-2 mix-blend-multiply">F</span>
        <span className="text-[200px] text-[#E3086F] -ml-2 mix-blend-multiply">A</span>
        <span className="text-[200px] text-[#E3086F] -ml-2 mix-blend-multiply">N</span>
        <span className="text-[200px] text-[#E3086F] -ml-2 mix-blend-multiply">A</span>
        <span className="text-[200px] text-[#E3086F] -ml-2 mix-blend-multiply">R</span>  
        <span className="text-[200px] text-[#E3086F] -ml-2 mix-blend-multiply">T</span>  
        </h1>
         <Image
                          src="/sore.png"
                          alt="SORE: ISTRI DARI MASA DEPAN FANART"
                          width={900}
                          height={900}
                          className="shadow-lg"
                        />
        
                 <p className="text-[30px] text-[#251B23] mb-8"  >TENGGELAM DALAM WAKTU (SORE: ISTRI DARI MASA DEPAN) [2025]</p>
        
         <Image 
          src="/sanji.png" 
          alt="SANJI'S SUNFLOWER FANART" 
          width={800} 
          height={800} 
          className="shadow-lg" 
          />
        
                <p className="text-[30px] text-[#251B23] mb-8"  >TELL ME ABOUT YOUR NEW HOME (ONE PIECE) [2025]</p>
        
         <Image
                          src="/ut.png"
                          alt="LIGHT MY LOVE UNDERTALE FANART"
                          width={500}
                          height={500}
                          className="shadow-lg"
                        />
        
                 <p className="text-[30px] text-[#251B23] mb-8"  >LIGHT YOUR LOVE (UNDERTALE) [2025]</p>

          <div className="grid grid-cols-2">
          <Image src="/mistumi.png" alt="MITSUMI POSTER" width={400} height={300} className="shadow-lg" />
          <Image src="/shima.png" alt="SHIMA POSTER" width={400} height={900} className="shadow-lg" />
              </div>
        
                <p className="text-[30px] text-[#251B23] mb-8"  >AUTUMN DATE (SKIP AND LOAFER) [2025]</p>
        <div className="grid grid-cols-3">

          <Image src="/ZORO.png" alt="ZORO STICKER" width={400} height={300} className="shadow-lg" />
          <Image src="/SANJIS.png" alt="SANJI STICKER" width={400} height={900} className="shadow-lg" />
          <Image src="/LUFFY.png" alt="LUFFY STICKER" width={400} height={900} className="shadow-lg" />
              </div>
        
                <p className="text-[30px] text-[#251B23] mb-8"  >AMONSTER TRIO (ONE PIECE) [2025]</p>
        
      </section>
      
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2025 Emma&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
    
    
  )
}