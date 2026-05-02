import Image from "next/image"
import Link from "next/link"
export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8 "  >NESTLÉ REDISGN IN ART NOUVEAU STYLE [2025]</p></h1>

< Link href="https://drive.google.com/file/d/1mLO_114awFskXQnDp77ZRpKAW119aFUo/view?usp=drive_link">
        <Image
          src="/GSM.png"
          alt="PREVIEW"
          width={900}
          height={1000}
          className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        /></Link>
            <p className="text mt-5 mb-5 text-[20px] text-[#251B23]"> Graphic Standard Manual (Click Image to See) </p>
        
                 <Image
                  src="/BILLBOARD.png"
                  alt="ZINE COVER"
                  width={800}
                  height={1000}
                  className="shadow-lg"
                />
                <Image
                  src="/POLO.png"
                  alt="ZINE COVER"
                  width={800}
                  height={1000}
                  className="shadow-lg"
                />
                <Image
                  src="/ALAT TULIS.png"
                  alt="ZINE COVER"
                  width={800}
                  height={1000}
                  className="shadow-lg"
                />

   <Image
                  src="/TOTE BAG.png"
                  alt="ZINE COVER"
                  width={800}
                  height={1000}
                  className="shadow-lg"
                />
   <Image
                  src="/WINDOW.png"
                  alt="ZINE COVER"
                  width={800}
                  height={1000}
                  className="shadow-lg"
                />
   <Image
                  src="/MUG.png"
                  alt="ZINE COVER"
                  width={800}
                  height={1000}
                  className="shadow-lg"
                />

        <p className="text-[25px] text-[#251B23] mt-8"  >A redesign concept and manual for Nestle. This redesign uses the Art Nouveau
approach since it is very connected to imagery of floral, plants and frame. This fits with Nestle’s brand and imagery of their brand and product that emphasize on organic life, health and family.</p>


      </section>

    </div>
  )
}
