"use client";
import { motion } from "framer-motion";
import { FaReact, FaBrain, FaCogs, FaLock } from "react-icons/fa";

type AIBoxProps = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const AIBox = ({ title, description, Icon }: AIBoxProps) => (
  <motion.div
    className="sm:w-96 lg:w-64 xl:w-64 h-72 border border-purple-950 p-4 flex flex-col items-start bg-black m-2 rounded-2xl hover:border-2 hover:border-purple-950"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-lg p-4 m-2">
      <Icon className="text-2xl text-white" />
    </motion.div>
    <h2 className="text-xl font-semibold text-white pt-2">{title}</h2>
    <p className="text-base text-gray-400 pt-2">{description}</p>
  </motion.div>
);

const Page = () => {
  const aiFeatures = [
    {
      title: "Autonomous Learning",
      description:
        "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
      icon: FaBrain,
    },
    {
      title: "Muliti-Modal Intelligence",
      description:
        "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
      icon: FaReact,
    },
    {
      title: "Cognitive Integration",
      description:
        "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
      icon: FaCogs,
    },
    {
      title: "Ethical AI Framework",
      description: "Distributed AI processing across global networks",
      icon: FaLock,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-12 py-12 bg-black">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 secon inline-block">
          Neural Capabilities
        </h1>
        <p className="text-gray-400 text-xl">
          Powered by next-generation artificial intelligence
        </p>
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

export default Page;
