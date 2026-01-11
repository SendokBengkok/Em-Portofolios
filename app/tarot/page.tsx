import Image from "next/image"
import Link from "next/link"
export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8"  >CA SELF INEPRETED MAJOR ARCANA DECK [2026]</p></h1>

        <Image
          src="/Frame 3.png"
          alt="PREVIEW"
          width={1000}
          height={1000}
        />

        <Image
          src="/IRL.png"
          alt="PRODUCT"
          width={1000}
          height={1000}
          className="shadow-lg"
        />

        <p className="text-[25px] text-[#251B23] mt-8"  >A Major Arcana Deck that represented me and my values. 22 Illustrated Major Arcana cards reflecting identity, principles and emotions into a single form.</p>
        <Link href="https://www.instagram.com/emisnt_2/" className="text-[28px] text-[#E3086F] underline rounded-lg hover:text-[#0CA4D5]">MY POST ABOUT THE PROCESS (COMING SOON!)</Link>

      </section>
      
      <footer className="text-center bg-[#F7F3EA]">
      <p className="text-sm text-gray-600">© 2026 Emmae&apos;s Portofolio. All rights reserved.</p>
    </footer>
    </div>
  )
}
