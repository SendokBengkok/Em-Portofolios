import Image from "next/image"
export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8"  >HOMO SAPIENS ZINE [2026]</p></h1>

        <Image
          src="/zine cwc.png"
          alt="ZINE CONTENT"
          width={1100}
          height={1100}
          className="hadow-lg"
        />

        <p className="text-[25px] text-[#251B23] mt-8"  >A zine exploring human and humanity through the art of writing (layout and design by emi).</p>

      </section>
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2026 Emmae&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
  )
}
