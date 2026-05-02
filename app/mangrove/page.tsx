import Image from "next/image"
export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8"  >EDUCATIONAL KIDS BOOK ABOUT MANGROVES [2025]</p></h1>

        <Image
          src="/Bakau.png"
          alt="BOOK CONTENT"
          width={1100}
          height={1100}
          className="hadow-lg"
        />
        <p className="text-[25px] text-[#251B23] mt-8"  >An educational kids book about mangroves (colored and rendered by me).</p>

      </section>
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2026 Emmae&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
  )
}
