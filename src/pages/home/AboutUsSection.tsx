import Container from "@/components/Container";
import images from "../../assets/imgtow.jpg"
import {motion} from "framer-motion"


   const intro = {
      hidden: {opacity: 0,  },
      animate: {
        y: 20,
      
        opacity: 1,
        transition: {
            duration: 1,
            y: {
             duration: 1,
             repeat: Infinity,
             repeatType: "reverse",
             ease: "easeInOut",
             delay: 1, 
            }
        }
     }
   }

   const textBox = {
     hidden: {opacity: 0,},
      visible: {opacity: 1, 
         transition: {
            duration: 0.5,
            staggerChildren: 0.25,
            delayChildren: 1
         }
      }
   }

   const textTwo = {
     hidden: {opacity: 0, y: -200},
     visible: {
        opacity: 1,
           y: 0, 
           transition: {
            duration: 0.5,  
            type: "spring",
            damping: 150,
           }
     }
   }



const AboutUsSection = () => {
    return(
       <div className="overflow-auto">
        <Container className="grid  gap-10 mt-16 h-screen grid-cols-1  lg:grid-cols-2 place-content-center">
            <motion.div className="order-2 lg:order-1" 
               variants={intro}
               initial="hidden"
               animate="animate"
             >
                <img src={images} alt="" />
            </motion.div>
            <motion.div  className="order-1 lg:order-2"
              variants={textBox}
              initial="hidden"
              animate= "visible"
            >
                <motion.h1 className="text-6xl  font-semibold"
                  variants={textTwo}
                  initial="hidden"
                  animate= "visible"
                >Who We are</motion.h1>
                <br />
                <motion.p className="text-gray-500 max-w-[60ch]" 
                  variants={textTwo}
                  initial= "hidden"
                  animate="visible"
                >Lorem <span className="text-gray-800 text-xl">iRepair</span> dolor sit amet consectetur adipisicing elit.
                  Laudantium atque voluptas incidunt pariatur? Accusantium incidunt odit quibusdam impedit placeat tempore fuga alias autem sint dignissimos hic similique suscipit, quis dolore nobis pariatur tenetur a? Aliquam inventore porro molestias sed veritatis dolore delectus maxime asperiores. Nisi obcaecati atque eaque quas fugiat. 
                  pariatur? maxime <span className="text-gray-800 text-xl">Bangladesh</span> asperiores. Nisi obcaecati atque eaque quas fugiat</motion.p>
                  <br />
                <motion.div  className="grid grid-cols-2"
                     variants={textTwo}
                     initial= "hidden"
                     animate="visible"
                >
                    <p className="text-7xl font-semibold text-[#2ed8b1]">98%</p>
                    <p className="text-7xl text-[#2ed8b1] font-semibold">2k+</p>
                </motion.div>    
            </motion.div>
        </Container>
       </div>
    )
}

export default AboutUsSection;