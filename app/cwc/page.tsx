import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8"  >NOT QUITE THERE DEMO [2026]</p></h1>

        <Image
          src="/NQT PREVIEW.png"
          alt="NQT"
          width={1100}
          height={1100}
          className="shadow-lg"
        />

         <div className="grid grid-cols-2">
        
                  <Image src="/idle.gif" alt="IDLE ANIMATION" width={400} height={300} className="shadow-lg" />
                  <Image src="/Walk.gif" alt="WALK ANIMATION" width={400} height={900} className="shadow-lg" />
                      </div>


        <p className="text-[25px] text-[#251B23] mt-8"  >A demo platformer game with a 3D movement gimmick.</p>
         <Link href="https://drive.google.com/file/d/1JbhLQOvTmSeYVoSiY75kH2K_lc03qTji/view?usp=drive_link" className="text-[28px] text-[#E3086F] underline rounded-lg hover:text-[#0CA4D5]">DEMO VIDEO </Link>

      </section>
    </div>
  )
}
