import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#30e630]"/>
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm 
            <span className="text-[#ffa154]"> Nirmit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            🚀I build fast, responsive, and accessible web apps using React, Node.js, and MongoDB.
            <br className="sm:block hidden"/>
            🤖I'm also into robotics and IoT. 
          </p>
        </div>
      </div>
        <ComputersCanvas />
    </section>
  )
}

export default Hero