import { LogoIcon, SignUp } from "@/public/icons/Logo"

function Navbar() {
  return (
    <div className=" flex justify-between px-[50px] py-[34px] ">
        <div className="flex items-center gap-3">
            <LogoIcon/>
            <h1 className="text-white text-[25px] font-semibold">NFT marketplace</h1>
        </div>
        <div className="flex items-center gap-[10px] ">
            <strong className="px-5 py-3 font-semibold text-[16px] text-white ">Marketplace</strong>
            <strong className="px-5 py-3 font-semibold text-[16px] text-white ">Rankings</strong>
            <strong className="px-5 py-3 font-semibold text-[16px] text-white ">Connect a wallet</strong>
            <button className=" bg-[#A259FF] rounded-[20px] text-white text-[16px] font-semibold flex gap-[12px] cursor-pointer items-center px-[30px] py-[19px] "><SignUp/> Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar