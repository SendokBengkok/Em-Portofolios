import Image from "next/image"
import Link from "next/link"
export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8"  >THE CHRONICLES OF THE END OF THE WORLD [2026]</p></h1>

        <Image
          src="/COTW.png"
          alt="PREVIEW"
          width={800}
          height={1000}
          className="shadow-lg"
        />
        <p className="text-[25px] text-[#251B23] mt-8"  >A zine exploring what it means to live in the end of everything.</p>
        <Link href="https://www.instagram.com/p/DaStHTMiZql/?igsh=cnYzYnl4cmV1ZHBn" className="text-[28px] text-[#E3086F] underline rounded-lg hover:text-[#0CA4D5]">MY POST ABOUT THE PROCESS</Link>

      </section>
    </div>
  )
}
