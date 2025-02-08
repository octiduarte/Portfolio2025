"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiDocker } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Databases", icon: FaDatabase, color: "#336791" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl sm:text-6xl md:text-8xl font-bold pb-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SKILLS Y TECNOLOGIAS
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-6xl mb-2"
                whileHover={{ scale: 1.2 }}
                style={{ color: skill.color }}
              >
                <skill.icon />
              </motion.div>
              <p className="text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
