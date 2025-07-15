import Image from "next/image";
import React, { FC } from "react";
import Heading from "./Heading";
import { CategoryType } from "@/@types/CategoriesType";
import { MetaType } from "@/@types/MetaType";
import { API } from "@/hooks/getEnv";

const CategoryCard: FC<{ item: CategoryType }> = ({ item }) => {
    return (
        <div className="bg-[#3B3B3B] !w-[240px] h!-[316px] rounded-[20px] mb-[30px] ">
            <div className="relative w-[240px] h-[240px] overflow-hidden rounded-xl">
                <Image
                    className="absolute inset-0 w-full h-full object-cover blur-md"
                    alt="Category background image"
                    src={`${API}/file/${item.image}`}
                    priority
                    width={240}
                    height={240}
                />

                <Image
                    className="absolute top-1/2 left-1/2 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 object-contain z-10"
                    alt="Category icon image"
                    src={`${API}/file/${item.icon}`}
                    priority
                    width={100}
                    height={100}
                />
            </div>

            <Heading
                tag="h3"
                classList="!text-[22px] px-[30px] pt-5 pb-[25px] "
                children={item.name}
            />
        </div>
    );
};

export default CategoryCard;
