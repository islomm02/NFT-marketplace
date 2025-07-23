"use client";

import { ArtistType } from "@/@types/ArtistType";
import { MetaType } from "@/@types/MetaType";
import {
  CopyIcon,
  Discord,
  Instagram,
  PlusIcon,
  Twitter,
  YouTube,
} from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { getRequest } from "@/service/getRequest";
import Image from "next/image";
import Link from "next/link";
import { FC, use, useEffect, useRef, useState } from "react";
import { API } from "@/hooks/getEnv";

interface ArtistPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ArtistPage: FC<ArtistPageProps> = ({ params }) => {
    const { id } =use(params);
  const [user, setUser] = useState<ArtistType | null>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [copyButton, setCopyButton] = useState<"copied" | "not">("not")

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        const res: { data: ArtistType[]; meta: MetaType } = await getRequest("/user?role=ARTIST");
        const artist = res.data.find((item) => item.id === id);
        if (isMounted) {
          setUser(artist || null);
        }
      } catch (err) {
        console.error("Error fetching artist:", err);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!user) {
    return <div className="text-white p-10">Loading artist profile...</div>;
  }


  const handleCopy = () =>{
    setCopyButton("copied")
    navigator.clipboard.writeText(user.id) 
    setTimeout(() => {
        setCopyButton("not")
    }, 2000)
  }

  return (
    <div>
      <Image
        className="w-full relative"
        src={"/ArtistProfileBg.svg"}
        alt="Profile Img"
        width={1280}
        height={320}
        priority
      />

      <div className="containers">
        <Image
          className="w-[120px] rounded-[20px] object-cover h-[120px] absolute top-104"
          src={`${API}/file/${user.image}`}
          alt="Profile Img"
          width={120}
          height={120}
          priority
        />

        <div className="pt-20 flex justify-between mb-[30px]">
          <Heading classList="!text-[51px]" tag="h1" children={user.username} />
          <div className="flex gap-5">
            <Button onClick={() => handleCopy() } variant='filled' type='button' icon={<CopyIcon />}  iconPostion='left' title={copyButton == "not" ? user.id : "Copied." } />

            <Button
              type="button"
              variant="outlined"
              iconPostion="left"
              icon={<PlusIcon />}
              title="Follow"
            />
          </div>
        </div>

        <div className="flex gap-[20px]">
          <div className="w-[156px]">
            <Heading classList="!text-[28px] !font-bold " children={`0+`} tag="h3" />
            <Text children="Volume" classList="!text-white" />
          </div>
          <div className="w-[156px]">
            <Heading
              classList="!text-[28px] !font-bold "
              children={user.createdNFTs ? `${user.createdNFTs.length}+` : "0+"}
              tag="h3"
            />
            <Text children="NFTs Sold" classList="!text-white" />
          </div>
          <div className="w-[156px]">
            <Heading classList="!text-[28px] !font-bold " children={"0+"} tag="h3" />
            <Text children="Followers" classList="!text-white" />
          </div>
        </div>

        <div className="mt-[30px]">
          <Text children="Bio" classList="!text-[22px] !font-bold !text-[#858584]" />
          <Text children={user.bio} classList="!text-[22px] text-white" />
        </div>

        <div className="mb-10 mt-[30px]">
          <Text children="Links" classList="!text-[22px] !font-bold !text-[#858584]" />
          <div className="flex items-center gap-[10px]">
            {user.discordAccLink && <Link href={user.discordAccLink}><Discord /></Link>}
            {user.youtubeAccLink && <Link href={user.youtubeAccLink}><YouTube /></Link>}
            {user.twitterAccLink && <Link href={user.twitterAccLink}><Twitter /></Link>}
            {user.instagramAccLink && <Link href={user.instagramAccLink}><Instagram /></Link>}
          </div>
        </div>
      </div>

      <hr className="text-[#3B3B3B]" />

      <div className="flex justify-center items-center px-15 mt-[10px] mb-[10px]">
        {["Created", "Owned", "Collections"].map((title, idx) => (
          <Link href="#" key={idx}>
            <div className="flex gap-[16px] w-[350px]">
              <Heading tag="h3" classList="!text-[#858584] !font-semibold" children={title} />
              <span className="rounded-[20px] flex items-center justify-center px-[10px] py-[5px] text-[16px] bg-[#3B3B3B]">302</span>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
