import Image from "next/image";
import React, { FC } from "react";
import Heading from "./Heading";
import { API } from "@/hooks/getEnv";
import { NftType } from "@/@types/NftType";
import Text from "./Text";

const NftCard: FC<{ item: NftType }> = ({ item }) => {
    return (
        <div className="!bg-[#3B3B3B] !w-[330px] !h-[469px] rounded-[20px]  ">
            <Image
                className=" w-[330px] h-[296px] object-cover rounded-[20px] "
                alt="Category background image"
                src={`${API}/file/${item.image}`}
                priority
                width={330}
                height={296}
            />
            <div className="px-[30px] pt-[20px] pb-[25px] ">
                <Heading tag="h3" classList="!text-[20px] !mb-[5px] " children={item.title} />
                <div className="flex gap-[12px] ">
                    <Image
                        width={24}
                        height={24}
                        alt="Author Image"
                        className="!rounded-full"
                        src={`${API}/file/${item.creator.image}`}
                    />
                    <Text  children={item.creator.username} />
                </div>
            </div>
            <div className="px-[30px] flex justify-between">
                <div>
                    <Text
                        classList="!text-[#858584] !text-[12px]"
                        children="Price"
                    />
                    <Text  classList="!text-white" children={`${item.price} ETH`} />
                </div>
                <div className="text-end">
                    <Text children="Highest Bid" classList="!text-[#858584] !text-[12px]" />
                    <Text classList="!text-white" children={item.highestBid ? `${item.highestBid} wETH` : `0 wETH`} />
                </div>
            </div>
        </div>
    );
};

export default NftCard;
