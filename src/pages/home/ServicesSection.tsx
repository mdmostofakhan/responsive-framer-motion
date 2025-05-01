import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipReplacment from "@/components/ServiceTiles/ChipReplacment";

const ServicesSection = () => {

    return(
        <Container>
            <div className="flex justify-center mt-10 items-center flex-col">
                <h1>Services that we provide</h1>
                <p className="max-w-[80ch] text-center my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis illum eos, maxime corrupti inventore! Quod eaque saepe nulla! Fugit.</p>
            </div>
            <div className="grid grid-cols-12 gap-10 mb-20">
                <BatteryReplacement />
                <ChipReplacment />
                <div className="bg-red-500 h-[445px] md:col-span-6 col-span-12 lg:col-span-7 rounded-lg"></div>
                <div className="bg-red-500 h-[445px] col-span-12 lg:col-span-12 rounded-lg"></div>
                <div className="bg-red-500 h-[445px] md:col-span-6 col-span-12 lg:col-span-4 rounded-lg"></div>
                <div className="bg-red-500 h-[445px] md:col-span-6 col-span-12 lg:col-span-4 rounded-lg"></div>
                <div className="bg-red-500 h-[445px] col-span-12 lg:col-span-4 rounded-lg"></div>
            </div>
        </Container>
    ) 
}
export default ServicesSection;     