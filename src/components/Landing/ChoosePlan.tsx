"use client"
import { motion } from "framer-motion"
import { FaCheck } from "react-icons/fa"

const PlanBox = ({
  title,
  price,
  features,
  isCustom = false,
  isPro = false,
}: { title: string; price: string; features: string[]; isCustom?: boolean; isPro?: boolean }) => (
  <motion.div
    className={`w-full sm:w-72 lg:w-80 xl:w-96 h-[500px] \ p-6 flex flex-col items-start ${isPro ? "bg-purple-950/30 backdrop-blur-sm border border-purple-600" : "bg-zinc-950 border border-purple-950"} m-4 rounded-2xl hover:border-2 hover:border-purple-500`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <p className="text-3xl font-bold text-white mb-6">{price}</p>
    <ul className="text-gray-200 mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <FaCheck className="text-purple-900 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <motion.button
      className={`w-full ${isPro ? "bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600" : "bg-black border border-purple-950"} text-white font-semibold py-2 px-4 rounded-lg`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isCustom ? "Contact Us" : "Get Started"}
    </motion.button>
  </motion.div>
)

const PricingPlans = () => {
  const plans = [
    {
      title: "Starter",
      price: "$499/month",
      features: [
        "2 AI Agent Instances",
        "Basic Neural Processing",
        "24/7 Support",
        "Weekly Analytics",
        "Basic Integration Support",
      ],
    },
    {
      title: "Professional",
      price: "$999/month",
      features: [
        "10 AI Agent Instances",
        "Advanced Neural Networks",
        "Priority Support",
        "Real-time Analytics",
        "Custom Integration",
        "API Access",
        "Advanced Security",
      ],
      isPro: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Agents",
        "Full Neural Suite",
        "Dedicated Support Team",
        "Advanced Analytics Dashboard",
        "Custom Development",
        "Full API Access",
        "Enterprise Security",
        "Custom Training",
      ],
      isCustom: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-12 bg-black">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Choose Your Plan
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl">Scale your AI capabilities with our flexible pricing</p>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row md:flex-row items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plans.map((plan, index) => (
          <motion.div key={index} variants={itemVariants}>
            <PlanBox
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isCustom={plan.isCustom}
              isPro={plan.isPro}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default PricingPlans

