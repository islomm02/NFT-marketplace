import { ButtonType } from '@/@types/ButtonType'
import React, { FC } from 'react'

const   Button: FC<ButtonType> = ({ icon, iconPostion, title, type, extraClass, variant, onClick }) => {
  return (
    <button
    onClick={onClick}
      type={type}
      className={`py-[18px] px-[30px] cursor-pointer ${
        variant === "outlined" ? "border-[#A259FF] border-[2px]" : "bg-[#A259FF]"
      } text-white rounded-[20px] font-semibold text-[16px] flex items-center gap-3 ${extraClass}`}
    >
      {iconPostion === "left" && icon}
      <span className=" !w-[113px] !truncate whitespace-nowrap overflow-hidden block">
        {title}
      </span>
      {iconPostion === "right" && icon}
    </button>
  )
}

export default Button
