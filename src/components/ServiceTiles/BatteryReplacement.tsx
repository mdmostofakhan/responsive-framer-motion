import useScrollGrow from "@/hooks/ScrollGrow";
import { motion } from "framer-motion";


const BatteryReplacement = () => {
 
  const { style, scrollRef } = useScrollGrow(); 

  return (
    <motion.div
    style={style}
    ref={scrollRef}
      className="bg-red-500 h-[445px] col-span-12 lg:col-span-12 rounded-lg"
    >
    </motion.div>
  );
};

export default BatteryReplacement;
