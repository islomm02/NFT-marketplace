import { LogoIcon } from "@/public/icons/Logo";
import {
    DiscordFilled,
    DiscordOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeFilled,
    YoutubeOutlined,
} from "@ant-design/icons";

function Footer() {
    return (
        <div>
        <div className="bg-[#3B3B3B]  px-[115px] py-[40px] flex justify-between">
            <div className="w-[327px]">
                <div className="w-[243px]">
                    <div className="flex items-center gap-3 pb-[32px] ">
                        <LogoIcon />
                        <h1 className=" text-white text-[25px] font-semibold">
                            NFT marketplace
                        </h1>
                    </div>
                    <strong className=" font-light text-[16px] text-[#CCCCCC] ">
                        NFT marketplace UI created with Anima for Figma
                    </strong>
                    <div className="flex flex-col gap-[15px] pt-5">
                        <strong className="font-light text-[16px] text-[#CCCCCC] ">
                            Join our community
                        </strong>
                        <ul className="flex gap-[10px]">
                            <li className="text-[#858584]">
                                <DiscordOutlined style={{ fontSize: "32px" }} />{" "}
                            </li>
                            <li className="text-[#858584]">
                                <YoutubeOutlined style={{ fontSize: "32px" }} />{" "}
                            </li>
                            <li className="text-[#858584]">
                                <TwitterOutlined style={{ fontSize: "32px" }} />
                            </li>
                            <li className="text-[#858584]">
                                <InstagramOutlined
                                    style={{ fontSize: "32px" }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[240px]">
                <div>
                    <div className="flex items-center gap-3 pb-[32px] ">
                        <h1 className=" text-white text-[25px] font-semibold">
                            Explore
                        </h1>
                    </div>
                    <strong className=" font-light text-[16px] text-[#CCCCCC] ">
                        Marketplace
                    </strong>
                    <div className="flex flex-col gap-[15px] pt-5">
                        <strong className="font-light text-[16px] text-[#CCCCCC] ">
                            Rankings
                        </strong>
                        <strong className="font-light text-[16px] text-[#CCCCCC] ">
                            Connect a wallet
                        </strong>
                    </div>
                </div>
            </div>

            <div className="w-[420px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="w-[295px] flex flex-col gap-[25px]">
                        <h1 className=" text-white text-[25px] font-semibold">
                        Join our weekly digest
                    </h1>
                    <strong className=" font-light text-[16px] text-[#CCCCCC] ">
                        Get exclusive promotions & updates straight to your
                        inbox.
                    </strong>
                    </div>
                    <div className="bg-white rounded-[20px] flex justify-between">
                        <input placeholder="Enter your email here" className="bg-white px-[20px] py-[19px] rounded-[20px]" type="text" />
                        <button className="bg-[#A259FF] text-white text-4 font-semibold px-[50px] py-[19px] rounded-[20px] ">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Footer;
