"use client";
import { FaReact, FaBrain, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

type AIBoxProps = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const AIBox = ({ title, description, Icon }: AIBoxProps) => (
  <motion.div
    className="sm:w-60 lg:w-72 xl:w-80 h-60 border border-purple-950 p-5 flex flex-col items-start bg-zinc-950 m-4 rounded-2xl hover:border-2 hover:border-purple-950"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-lg p-4 m-2"
    >
      <Icon className="text-2xl text-white" />
    </motion.div>
    <h2 className="text-xl font-semibold text-white pt-2">{title}</h2>
    <p className="text-base text-gray-400 pt-2">{description}</p>
  </motion.div>
);

const AiSolution = () => {
  const aiFeatures = [
    {
      title: "Enterprise AI",
      description:
        "Custom AI agents designed for enterprise-scale operations and decision-making",
      icon: FaReact,
    },
    {
      title: "Neural Operations",
      description:
        "Automated workflow optimization through distributed neural networks",
      icon: FaBrain,
    },
    {
      title: "Secure Intelligence",
      description:
        "Privacy-first AI solutions with military-grade security protocols",
      icon: FaLock,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-12 py-12 bg-black">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 secon inline-block">AI Solutions</h1>
        <p className="text-gray-400 text-xl">Transforming industries with intelligent agents</p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {aiFeatures.map((feature, index) => (
          <AIBox
            key={index}
            title={feature.title}
            description={feature.description}
            Icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AiSolution;
