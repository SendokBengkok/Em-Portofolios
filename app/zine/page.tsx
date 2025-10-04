import Image from "next/image"

export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8"  >COMPARISON ZINE BETWEEN THE PANDAVAS AND THE KAURAVAS [2025]</p></h1>

        <Image
          src="/DAFIS.png"
          alt="CONTENT LIST"
          width={1100}
          height={1100}
          className="hadow-lg"
        />

        <Image
          src="/78.png"
          alt="PAGE 7 AND 8"
          width={1100}
          height={1100}
          className="shadow-lg"
        />

        <Image
          src="/MOCKUP.png"
          alt="MOCK UP"
          width={1100}
          height={1100}
          className="shadow-lg"
        />
        <p className="text-[25px] text-[#251B23] mt-8"  >A zine comparing Pandavas and Kauravas that have similarities/parallels each other (based on the Indian mythology). Ite&apos;s an illustration focused zine. Designs are original based on how I personally interpret the story.</p>

      </section>
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2025 Emmae&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
  )
}
