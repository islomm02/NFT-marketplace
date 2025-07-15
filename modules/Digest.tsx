import { MailIcon } from "@/assets/icons"
import Heading from "@/components/Heading"
import Text from "@/components/Text"
import Image from "next/image"

const Digest = () => {
  return (
    <div className="containers rounded-[20px] my-[40px] bg-[#3B3B3B] flex justify-between ">
        <Image className="py-[30px] pl-[60px]  " alt="Digest img" src={"/Digest.svg"} width={425} height={310} priority />
        <div className="w-[425px] py-[79px] pr-[60px] ">
            <Heading classList="!mb-[10px]" tag="h2" children="Join our weekly digest" />
            <Text  classList="!text-white !mb-[40px] !text-[22px]" children="Get exclusive promotions & updates straight to your inbox." />
            <div className="bg-white rounded-[20px] pr-[60px] flex justify-between">
                <input placeholder="Enter your email here" className="bg-white text-black px-[20px] py-[19px] rounded-[20px]" type="text" />
                <button className="bg-[#A259FF] text-white flex gap-3 items-center text-4 font-semibold px-[50px] py-[19px] rounded-[20px] "><MailIcon/> Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Digest