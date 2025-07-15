import Image from "next/image"

const CenterImg = () => {
  return (
    <div className="w-full my-20">
        <Image alt="Main Img" src={"/main-img.svg"} className="w-full" width={1280} height={660} priority  />
    </div>
  )
}

export default CenterImg