import { Discord, Instagram, Twitter, YouTube } from "@/assets/icons"
import Heading from "@/components/Heading"
import Text from "@/components/Text"
import { Link } from "@/i18n/navigation"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#3B3B3B] py-10">
      <div className="containers">
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-0 justify-between">
            <div className="w-[238px]">
              <Link className="!mb-[30px] inline-block" href={"/"}>
                <Image src={"/site-logo.svg"} alt="Site Logo" width={243} height={32}/>
              </Link>
              <Text classList="!mb-[20px]">NFT marketplace UI created with Anima for Figma.</Text>
              <div>
                <Text classList="!mb-[15px]">Join our community</Text>
                <div className="flex items-center gap-[10px]">
                  <Link href={'/'}>
                    <Discord/>
                  </Link>
                  <Link href={'/'}>
                    <YouTube/>
                  </Link>
                  <Link href={'/'}>
                    <Twitter/>
                  </Link>
                  <Link href={'/'}>
                    <Instagram/>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Heading tag="h3" classList="!mb-[25px] !text-[22px]">Explore</Heading>
              <Text>Marketplace</Text>
              <Text classList="!my-[20px]">Rankings</Text>
              <Text>Connect a wallet</Text>
            </div>
            <div className="w-[330px]">
              <Heading tag="h3" classList="!mb-[25px] !text-[22px]">Join our weekly digest</Heading>
              <Text classList="!mb-[20px]">Get exclusive promotions & updates straight to your inbox.</Text>
              <div className="bg-white rounded-[20px] !w-[420px]  flex justify-between">
                            <input placeholder="Enter your email here" className="bg-white text-black px-[20px] py-[19px] rounded-[20px]" type="text" />
                            <button className="bg-[#A259FF] text-white flex gap-3 items-center text-4 font-semibold px-[50px] py-[19px] rounded-[20px] "> Subscribe</button>
                        </div>
            </div>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer