import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import img from "../../assets/img.jpg"
import {motion} from "framer-motion"


        const box = {
            hidden: {opacity: 0,},
            visible: {
                opacity: 1,
                transition: {
                    duration: 1,
                    staggerChildren: 0.25,
                    delayChildren: 1,
                }
            }
        }

        const AnimaBox = {
            hidden: {opacity: 0, y: -200},
            visible: {
                opacity: 1,
                 y: 0,
                transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.5 
                }
            }
        }

        const laptop = {
            initial: { y: 0, rotate: 1, scale: 5},
            animate: {
                y: 20,
                rotate: -30,
                scale: 1, 
                transition: {
                    duration: 1,
                  y: {
                     duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                    }
                }     
            }
        }


const HeroSection = () => {
     return(
        <div className="overflow-hidden">
            <Container className="grid grid-cols-1 lg:grid-cols-2 pt-16 h-screen place-content-center">
            <motion.div className=""
               variants={box}
               initial="hidden"
                animate="visible" 
                
                >
              <motion.h1 className=" text-5xl lg:text-8xl text-wrap font-bold" 
               variants={AnimaBox} >
                <span className="text-gray-400">Don't Worry,</span>
                <br />
                <span>We'll fix it.</span>
              </motion.h1>
              <br />
              <motion.p className="text-gray-500 max-w-[51ch] text-lg  mb-5" 
               variants={AnimaBox}
              >Welcome to <span className="text-gray-800 font-semibold">iRepair,</span> your one-stop place for all kinds 
              of <span className="text-gray-800 font-semibold">Macbook repairs</span> and diagnostics. 
                </motion.p>

                <motion.div variants={AnimaBox} >
                 <Button>Book a services</Button>
                </motion.div>
               </motion.div>

            <motion.div className=" object-contain mt-10 w-3/4 lg:w-full mx-auto"
                variants={laptop} initial="initial" animate= "animate"
            >
                <img className=" h-[94%]" src={img} alt="" />
            </motion.div>
        </Container>
        </div>
     )
}

export default HeroSection;