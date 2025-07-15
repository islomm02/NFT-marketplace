import Heading from "@/components/Heading"
import Text from "@/components/Text"
import WorksCard, { WorksType } from "@/components/WorksCard"

const HowItWorks = () => {

    const WorksList = [
        {
            id: 1,
            image: "/FirstImg.svg",
            title: "Setup Your wallet",
            description: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
        },
        {
            id: 2,
            image: "/SecondImg.svg",
            title: "Create Collection",
            description: "Upload your work and setup your collection. Add a description, social links and floor price."
        },
        {
            id: 3,
            image: "/ThrdImg.svg",
            title: "Start Earning",
            description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
        },
    ]

  return (
    <div className="containers">

        <Heading tag="h2" children="How It Works" />
        <Text children='Find out how to get started' />

        <div className="flex gap-[30px]">
            {WorksList.map((item: WorksType) => (<WorksCard item={item} key={item.id}/>))}
        </div>
    </div>
  )
}

export default HowItWorks