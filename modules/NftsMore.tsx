"use client"
import { MetaType } from "@/@types/MetaType";
import { NftType } from "@/@types/NftType";
import { EyeIcon } from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import NftCard from "@/components/NftCard";
import Text from "@/components/Text";
import { getQueryData } from "@/lib/getQueryData";
import { FC } from "react";

interface NftsPageType {
    nfts: { data: NftType[]; meta: MetaType };
}

const NftsMore: FC<NftsPageType> = ({ nfts }) => {
    const {
        data: Nfts,
        isLoading,
        error,
    } = getQueryData("/nfts", nfts, "nfts");
    console.log(Nfts);
    
    return (
        <div className="containers mt-[80px] ">
            <div className="flex justify-between mb-[60px] ">
                <div>
                    <Heading tag="h2" children="Discover More NFTs" />
                <Text children="Explore new trending NFTs" />
                </div>
                <Button
                extraClass="!w-[187px] !items-center !justify-center !h-[60px] "
                    title="See All"
                    type="button"
                    variant="outlined"
                    icon={<EyeIcon />}
                    iconPostion="left"
                />
            </div>
            <div className="flex gap-[30px] mb-[80px] ">
                {Nfts.data.map((item: NftType) => (<NftCard item={item} key={item.id} />))}
            </div>
        </div>
    );
};

export default NftsMore;
