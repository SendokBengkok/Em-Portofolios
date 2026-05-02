
import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
    <section className="py-20 px-30 bg-[#F7F3EA]">
  <div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        <span className="text-[175px] text-[#E3086F] -ml-2 mix-blend-multiply">P</span>
        <span className="text-[175px] text-[#E9DE0D] -ml-2 mix-blend-multiply">O</span>
        <span className="text-[175px] text-[#0CA4D5] -ml-2 mix-blend-multiply">R</span>
        <span className="text-[175px] text-[#251B23] -ml-2 mix-blend-multiply">T</span>
        <span className="text-[175px] text-[#E9DE0D] -ml-2 mix-blend-multiply">O</span>  
        </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-widest -mt-25 -ml-10">
        <span className="text-[175px] text-[#0CA4D5] -ml-2 mix-blend-multiply">F</span>
        <span className="text-[175px] text-[#E3086F] -ml-2 mix-blend-multiply">O</span>
        <span className="text-[175px] text-[#251B23] -ml-2 mix-blend-multiply">L</span>
        <span className="text-[175px] text-[#E9DE0D] -ml-2 mix-blend-multiply">I</span>
        <span className="text-[175px] text-[#0CA4D5] -ml-2 mix-blend-multiply">O</span></h2>
        
      
        <p className="text-[30px] text-[#251B23] text-left">Emmanuela AS - Visual Designer</p>
        <p className="text-[20px] text-[#251B23] text-left">Illustrator and Graphic Designer</p>

        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mt 30 -ml 10">
        <span className="text-[100px] text-[#251B23] -ml-2 mix-blend-multiply">P</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mix-blend-multiply">E</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mix-blend-multiply">R</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mix-blend-multiply">S</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mix-blend-multiply">O</span> 
        <span className="text-[100px] text-[#251B23] -ml-2 mix-blend-multiply">N</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mix-blend-multiply">A</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mix-blend-multiply">L</span>
        </h3>

        <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        <span className="text-[100px] text-[#251B23] -ml-2 mb-3 mix-blend-multiply">P</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mb-3 mix-blend-multiply">R</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mb-3 mix-blend-multiply">O</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mb-3 mix-blend-multiply">J</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mb-3 mix-blend-multiply">E</span> 
        <span className="text-[100px] text-[#251B23] -ml-2 mb-3 mix-blend-multiply">C</span>
        <span className="text-[100px] text-[#251B23] -ml-2 mb-3 mix-blend-multiply">T</span>
        </h4>
</div>
        <Image
          src="/ETCHAD.png"
          alt="ETCHAD POSTER"
          width={500}
          height={500}
          className="shadow-lg mt-10"
        />
         <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >ETCHAD; FOR ALL TIME POSTER [2025]</p>

         < Link href="/tarot">
          <Image
          src="/Frame 2.png"
          alt="THE FOOL"
          width={500}
          height={500}
          className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </Link>

        <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >A SELF INEPRETED MAJOR ARCANA DECK [2026]</p>

        < Link href="/deckrant">
          <Image
          src="/POSTER CDW.png"
          alt="DECK RANT"
          width={500}
          height={500}
          className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </Link>

        <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >DECK RANTS CAMPAIGN CONCEPT [2026]</p>

 <Link href="/cwc">
        <Image
          src="/CWC Zine.png"
          alt="ZINE CREATIVE COPYWRITING"
          width={300}
          height={300}
           className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
            </Link>

        <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >HOMO SAPIENS ZINE [2026]</p>


 <Link href="/mangroves">
        <Image
          src="/Cover mangrove.png"
          alt="Mangrove"
          width={300}
          height={300}
          className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
           />
                 </Link>
           <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >EDUCATIONAL KIDS BOOK ABOUT MANGROVES [2025]</p>

<         Link href="/zine">
          <Image
          src="/MAHABARATAZINE.png"
          alt="MAHABARATA ZINE"
          width={500}
          height={500}
          className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </Link>

        <p className="text-[30px] text-[#251B23] mt-5 mb-8"  >COMPARISON ZINE BETWEEN THE PANDAVAS AND THE KAURAVAS [2025]</p>

    </section>
  )
  
}