import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrow = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ["0 1", "1.5 1"]
    })

    const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    // const xValues = useTransform(scrollYProgress, [0, 1], [-1000, 0])

    const style = { 
        scale: scaleValues,
        opacity: opacityValues,
        // x: xValues,
     }

     return { style, scrollRef };
}
export default useScrollGrow;