"use client";
import { motion } from "framer-motion";
import { FaReact, FaBrain, FaCode, } from "react-icons/fa";
import { TiWorldOutline } from "react-icons/ti";

type AIBoxProps = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const AIBox = ({ title, description, Icon }: AIBoxProps) => (
  <motion.div
    className="w-36 md:w-48 lg:w-60 xl:w-52 sm:h-40 h-56 border border-purple-950 p-4 flex flex-col items-center justify-between bg-zinc-950 m-3 rounded-lg hover:border-2 hover:border-purple-950"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-3"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <Icon className="text-2xl text-white" />
    </motion.div>
    <h2 className="text-sm text-white flex justify-center items-center">{title}</h2>
    <p className="text-xs text-gray-400 text-center">{description}</p>
  </motion.div>
);

const Page = () => {
  const aiFeatures = [
    {
      title: "Neural Networks",
      description: "Advanced neural architectures for complex decision making",
      icon: FaBrain,
    },
    {
      title: "Deep Learning",
      description: "Sophisticated deep learning models for pattern recognition",
      icon: FaReact,
    },
    {
      title: "Advanced ML",
      description: "Cutting-edge machine learning algorithms",
      icon: FaCode,
    },
    {
      title: "Global Scale",
      description: "Distributed AI processing across global networks",
      icon:  TiWorldOutline ,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-12 py-12 bg-black">
      <div className="text-center mb-12">
        <h1 className="text-5xl secon font-bold mb-4 inline-block">
          Powered by Advanced AI
        </h1>
        <p className="text-gray-400">Built on cutting-edge neural architectures</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
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
