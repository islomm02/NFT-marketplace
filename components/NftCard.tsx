import Image from "next/image";
import React, { FC } from "react";
import Heading from "./Heading";
import { API } from "@/hooks/getEnv";
import { NftType } from "@/@types/NftType";
import Text from "./Text";

const NftCard: FC<{ item: NftType }> = ({ item }) => {
    return (
        <div className="bg-[#3B3B3B] !w-[240px] !h-[316px] rounded-[20px] mb-[30px] ">
            <Image
                className=" w-full h-full object-cover rounded-[20px] "
                alt="Category background image"
                src={`${API}/file/${item.image}`}
                priority
                width={330}
                height={296}
            />
            <div className="px-[30px] pt-[20px] pb-[25px] ">
                <Heading tag="h3" children={item.title} />
                <div>
                    <Image
                        width={24}
                        height={24}
                        alt="Author Image"
                        src={`${API}/file/${item.creator.image}`}
                    />
                    <Heading tag="h3" children={item.creator.username} />
                </div>
            </div>
            <div>
                <div>
                    <Text
                        classList="!text-[#858584] !text-[12px]"
                        children="Price"
                    />
                    <Heading tag="h3" children={item.price} />
                </div>
                <div>
                    <Text children="Highest Bid" />
                    <Heading tag="h3" children={item.highestBid} />
                </div>
            </div>
        </div>
    );
};

export default NftCard;
