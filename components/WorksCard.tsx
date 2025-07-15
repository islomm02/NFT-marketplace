import Image from "next/image"
import { FC, ReactNode } from "react"
import Heading from "./Heading"
import Text from "./Text"

export interface WorksType{
    id: number,
    image: any,
     title: string,
      description: string
    }

const WorksCard:FC<{item: WorksType}> = ({item}) => {
  return (
    <div className="bg-[#3B3B3B] w-[330px] h-[439px] rounded-[20px] text-center flex flex-col items-center ">
        <Image alt="Works Img" src={item.image} className="!px-[40px] py-[10px] w-[250px] h-[250px] " width={250} height={250} priority  />
        <Heading tag="h3" children={item.title} classList="!mb-[10px]  "/>
        <Text classList="!px-[30px]" children={item.description} />
    </div>
  )
}

export default WorksCard