import useScrollGrow from "@/hooks/ScrollGrow";
import { motion } from "framer-motion";

const ChipReplacment = () => {
  const { style, scrollRef } = useScrollGrow(); // ✅ Correct use, no extra parentheses

  return (
    <motion.div
      style={style}
      ref={scrollRef}
      className="bg-red-500 h-[445px] md:col-span-6 col-span-12 lg:col-span-5 rounded-lg"
    ></motion.div>
  );
};

export default ChipReplacment;
