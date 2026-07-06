import Image from "next/image"
import Link from "next/link"
export default function AboutPage() {
  return (
  <div>
       <section className="py-20 px-30 bg-[#F7F3EA]">
      <h1 className="text-6xl font-bold tracking-tight">
        <p className="text-[50px] text-[#0CA4D5] mb-8"  >RUWANG-RAWUNG BRANDING [2026]</p></h1>
 

        <div className="grid grid-cols-2">
        
                  <Image src="/A4 - 19.png" alt="POSTER ALTERNATIVE" width={400} height={400} className="shadow-lg" />
                  <Image src="/A4 - 20.png" alt="POSTER ALTERNATIVE (2)" width={400} height={400} className="shadow-lg" /></div>

         <Image src="/PACKAGING.png" alt="SNACK PACKAGING" width={400} height={400} className="shadow-lg" />

<Link href="https://drive.google.com/file/d/1tgqLjWbUoOaSdOWsfF-XrQpQ8iEqMN3f/view?usp=drive_link" className="text-[28px] text-[#E3086F] underline rounded-lg hover:text-[#0CA4D5]">Video Ads |</Link>
<Link href="https://drive.google.com/file/d/1huVlNjHVNWd2-_wqhn8KvMwQcvHIqmQ0/view?usp=drive_link" className="text-[28px] text-[#E3086F] underline rounded-lg hover:text-[#0CA4D5]">| Audio Ads</Link>

        <p className="text-[25px] text-[#251B23] mt-8"  >Ruang-Rawung shows how a simple snack can become part of life's most meaningful moments. Across generations, kuping gajah has brought people together to gather, share stories, and create lasting memories. Through Ruwang-Rawung, we celebrate that warmth, bringing a sense of togetherness to every shared moment.
</p>
      </section>
    </div>
  )
}
