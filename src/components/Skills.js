import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {

return (
  <motion.div
    className="flex items=center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
    whileHover={{ scale: 1.05 }}
    initial={{x:0, y:0}}
    animate={{x:x, y:y}}
    transition={{duration: 3.5}}
    viewport={{once:true}}
  >
    {name}
  </motion.div>
);
}
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items=center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="Javascript" x="-15vw" y="-2vw" />
        <Skill name="ReactJS" x="-5vw" y="-11.2vw" />
        <Skill name="NextJS" x="-17.3vw" y="6vw" />
        <Skill name="Express" x="0vw" y="11.3vw" />
        <Skill name="HTML" x="10vw" y="1vw" />
        <Skill name="Web Design" x="15vw" y="-12vw" />
        <Skill name="Database" x="24vw" y="-5vw" />
        <Skill name="Server-Side" x="0vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="-15vw" y="14.8vw" />
        <Skill name="CSS" x="18vw" y="10vw" />
      </div>
    </>
  );
}

export default Skills