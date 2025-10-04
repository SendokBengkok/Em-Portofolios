import Image from "next/image"
export default function MiscPage() {
  return (
    <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
        <span className="text-[200px] text-[#251B23] -ml-2 mix-blend-multiply">M</span>
        <span className="text-[200px] text-[#251B23] -ml-2 mix-blend-multiply">I</span>
        <span className="text-[200px] text-[#251B23] -ml-2 mix-blend-multiply">S</span>
        <span className="text-[200px] text-[#251B23] -ml-2 mix-blend-multiply">C</span>
        <span className="text-[200px] text-[#251B23] -ml-2 mix-blend-multiply">.</span>   
        </h1>

          <div className="grid grid-cols-3">
            <Image src="/1.png" alt="TUMBLR MOCK UP" width={400} height={300} className="shadow-lg" />
            <Image src="/2.png" alt="POSTER MOCKUP" width={400} height={900} className="shadow-lg" />
            <Image src="/3.png" alt="POSTER MOCKUP" width={400} height={900} className="shadow-lg" />
                </div>
          
             <p className="text-[30px] text-[#251B23] mb-8"  >NEGATIVE SPACE [2024]</p>
          
         <Image
                          src="/4.png"
                          alt="MAKAN POSTER"
                          width={700}
                          height={700}
                          className="shadow-lg"
                        />
        
                 <p className="text-[30px] text-[#251B23] mb-8"  >SCOTT PLIGRIM REDRAW [2024]</p>

                          <Image
                          src="/5.png"
                          alt="MAKAN POSTER"
                          width={600}
                          height={600}
                          className="shadow-lg"
                        />
        
                 <p className="text-[30px] text-[#251B23] mb-8"  >APPLE STUDY [2024]</p>
      </section>
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2025 Emmae&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
    )
}
