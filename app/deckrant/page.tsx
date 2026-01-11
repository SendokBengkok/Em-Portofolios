import Image from "next/image"
import Link from "next/link"
export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8"  >DECK RANTS CAMPAIGN CONCEPT [2026]</p></h1>

        <Image
          src="/DECK RANT LOGO.png"
          alt="DECK RANT LOGO"
          width={500}
          height={1000}
        />

        <Image
          src="/SET DESIGN.png"
          alt="SET DESIGN"
          width={800}
          height={1000}
          className="shadow-lg"
        />
        <p className="text mb-5 text-[20px] text-[#251B23]"> Set Design </p>

         <Image
          src="/Group 24.png"
          alt="ZINE COVER"
          width={800}
          height={1000}
          className="shadow-lg"
        />

         <Image
          src="/Frame 5.png"
          alt="ZINE PAGES"
          width={800}
          height={1000}
          className="shadow-lg"
        />
  <p className="text mb-5 text-[20px] text-[#251B23]"> Antholgy Zine </p>

  
         <Image
          src="/SWEATSHIRT.png"
          alt="SWEATSHIRT MOCK UP"
          width={800}
          height={1000}
          className="shadow-lg"
        />

         <Image
          src="/SCARF.png"
          alt="SCARF MOCK UP"
          width={800}
          height={1000}
          className="shadow-lg"
        />
  <p className="text mb-5 text-[20px] text-[#251B23]"> Apparels Merchandise </p>

        <p className="text-[25px] text-[#251B23] mt-8"  >Concept for a podcast campaign that goals to help students cope together in the middle of their stressful life. They can tell each of their struggles and stories in this podcast session that will be aired online, which in turn will let other students know that they’re not struggling alone.</p>
      </section>
      
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2026 Emmae&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
  )
}
