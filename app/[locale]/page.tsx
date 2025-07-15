import Categories from "@/modules/Categories";
import Collections from "@/modules/Collections";
import Creators from "@/modules/Creators";
import Hero from "@/modules/Hero";
import NftsMore from "@/modules/NftsMore";
import { getRequest } from "@/service/getRequest";
import React from "react";

export default async function Home() {
  const auctions = await getRequest("/auctions");
  const category = await getRequest("/categories");
  const nfts = await getRequest("/nfts");
  const auctionsResults = await getRequest("/auction-results");
  const artists = await getRequest("/user?role=ARTIST");
  const collections = await getRequest("/collections?limit=3");
  return (
    <>
      <Hero actions={auctions} artists={artists} actionResults={auctionsResults} />
      <Collections collection={collections} />
      <Creators artists={artists} />
      <Categories category={category} />
      <NftsMore nfts={nfts} />
    </>
  );
}
