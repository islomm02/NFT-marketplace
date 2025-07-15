"use client"
import { CategoryType } from "@/@types/CategoriesType";
import { MetaType } from "@/@types/MetaType";
import CategoryCard from "@/components/CategoryCard";
import Heading from "@/components/Heading";
import { getQueryData } from "@/lib/getQueryData";
import { FC } from "react";

interface CtegoriesType{
    category: {data: CategoryType[], meta: MetaType}
}

const Categories: FC<CtegoriesType> = ({ category }) => {
    const { data: categories, isLoading, error } = getQueryData("/categories", category, 'categories')
    console.log(categories);
    
    return (
        <div className="containers py-20 ">
            <Heading
                tag="h2"
                classList="!mb-[60px]"
                children="Browse Categories"
            />
            <div className="flex flex-wrap justify-around">
                {categories.data.map((item: CategoryType) => (<CategoryCard item={item} key={item.id} />))}
            </div>
        </div>
    );
}

export default Categories;
