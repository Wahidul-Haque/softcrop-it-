"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, Network, Code, Settings, Server, Tv, DollarSign, ArrowRight, CheckCircle } from "lucide-react"

// Add this component after the imports and before the services array
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!hasAnimated) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = target / steps
      const stepDuration = duration / steps

      let currentCount = 0
      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= target) {
          setCount(target)
          setHasAnimated(true)
          clearInterval(timer)
        } else {
          setCount(Math.floor(currentCount))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [target, hasAnimated])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const services = [
  {
    icon: Globe,
    title: "High-Speed Internet",
    description:
      "Lightning-fast broadband connectivity solutions for businesses of all sizes with 99.9% uptime guarantee.",
  },
  {
    icon: Shield,
    title: "Secure VPN Solutions",
    description: "Enterprise-grade virtual private networks ensuring secure remote access and data protection.",
  },
  {
    icon: Network,
    title: "Network Architecture",
    description: "Complete network infrastructure design and implementation tailored to your business needs.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Full-stack development services from concept to deployment with ongoing maintenance support.",
  },
  {
    icon: Settings,
    title: "IT Management",
    description: "Comprehensive IT service management with proactive monitoring and rapid issue resolution.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions and server management for optimal performance and reliability.",
  },
  {
    icon: Tv,
    title: "Streaming Solutions",
    description: "Advanced IPTV and OTT platform development for seamless content delivery experiences.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Transparent, affordable pricing models with no hidden fees and flexible payment options.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Header */}
      <motion.header
        className="relative z-10 flex items-center justify-between p-6 lg:px-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/logo/softcrop-logo.jpg"
            alt="SoftCrop IT LLP Internet Services"
            className="h-12 w-auto object-contain"
          />
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Services", href: "#services" },
            { name: "Pricing", href: "#pricing" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </Button>
          </motion.div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
              <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="text-white block">Get the best IT</span>
                <span className="text-white block">Infrastructure</span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  for your business
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <div className="relative px-12 py-6 bg-slate-900 rounded-2xl leading-5 flex items-center">
                  <span className="text-blue-400 text-3xl font-bold">better</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Amazing Services for you</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={cardVariants} whileHover="hover" className="group">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-normal">
                      {service.description}
                    </p>

                    <motion.div
                      className="flex items-center justify-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: 2200, suffix: "+", label: "Happy Clients", icon: "👥" },
              { number: 99, suffix: "%", label: "Uptime Guarantee", icon: "⚡" },
              { number: 24, suffix: "/7", label: "Support Available", icon: "🛠️" },
              { number: 22, suffix: "+", label: "Years Experience", icon: "🏆" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    onViewportEnter={() => {
                      // Counter animation will be handled by the component
                    }}
                  >
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </motion.span>
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                SoftCrop?
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Enterprise-Grade Security",
                  description:
                    "Advanced encryption and security protocols to protect your business data and operations.",
                },
                {
                  title: "Scalable Solutions",
                  description: "Infrastructure that grows with your business, from startup to enterprise level.",
                },
                {
                  title: "Expert Support Team",
                  description: "Dedicated technical experts available around the clock to ensure smooth operations.",
                },
                {
                  title: "Cost-Effective Pricing",
                  description:
                    "Transparent pricing with no hidden fees and flexible payment options to suit your budget.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">System Performance</div>
                    <div className="text-green-400">98.7%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "98.7%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">Network Uptime</div>
                    <div className="text-green-400">99.9%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.9%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">Client Satisfaction</div>
                    <div className="text-green-400">98.2%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "96.2%" }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Simple, transparent pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whatever your status, our offers evolve according to your needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "SME User",
                price: "999",
                subtitle: "Starter",
                features: ["30 Days", "50 MBPS", "Unlimited Bandwidth"],
                popular: false,
              },
              {
                title: "SME User",
                price: "1399",
                subtitle: "Standard",
                features: ["30 Days", "100 MBPS", "Unlimited Bandwidth"],
                popular: true,
              },
              {
                title: "SME User",
                price: "1799",
                subtitle: "Premium",
                features: ["30 Days", "150 MBPS", "Unlimited Bandwidth"],
                popular: false,
              },
              {
                title: "Corporate",
                price: "Let's talk",
                subtitle: "Corporate Custom",
                features: ["Let's talk", "Let's talk", "Unlimited Bandwidth"],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div key={plan.title + index} variants={cardVariants} className="relative">
                <Card
                  className={`bg-gray-900/80 backdrop-blur-sm h-full transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "border-2 border-purple-500/50 bg-gray-800/80"
                      : "border border-gray-700/50 hover:border-gray-600/50"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">{plan.title}</h3>
                      <div className="mb-4">
                        <span className="text-4xl lg:text-5xl font-bold text-white">{plan.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-purple-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-purple-600 hover:bg-purple-700 border-purple-500"
                          : "bg-transparent hover:bg-purple-600/10 border-purple-500/50"
                      } text-white border transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      

      {/* Company Logos Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-8">
              Trusted by Open Source, enterprise,
              <span className="block text-white font-bold">and more than 99,000 of you</span>
            </h4>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8 items-center"
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: "calc(200% + 32px)" }}
            >
              {/* First set of logos */}
              {[
                { name: "KFC", logoUrl: "/logos/kfc-logo.png" },
                { name: "USTM", logoUrl: "/logos/ustm-logo.png" },
                { name: "GNRC", logoUrl: "/logos/gnrc-logo.png" },
                { name: "DPS", logoUrl: "/logos/dps-logo.png" },
                { name: "Samsung", logoUrl: "/logos/samsung-logo.png" },
                { name: "Apple", logoUrl: "/logos/apple-logo.png" },
                { name: "PVR Cinema", logoUrl: "/logos/pvr-logo.png" },
                { name: "Physics Wallah", logoUrl: "/logos/physics-wallah-logo.png" },
                { name: "Blinkit", logoUrl: "/logos/blinkit-logo.png" },
                { name: "Delivery", logoUrl: "/logos/delivery-logo.png" },
                { name: "Instacart", logoUrl: "/logos/instacart-logo.png" },
                { name: "DY365", logoUrl: "/logos/dy365-logo.png" },
                { name: "PRitiDin", logoUrl: "/logos/pritidin-logo.png" },
              ].map((company, index) => (
                <motion.div
                  key={`first-${company.name}`}
                  className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <img
                      src={company.logoUrl || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      className="h-12 w-auto mx-auto mb-1 opacity-80 hover:opacity-100 transition-opacity object-contain"
                    />
                    <div className="text-xs text-gray-400 font-medium">{company.name}</div>
                  </div>
                </motion.div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                { name: "KFC", logoUrl: "/logos/kfc-logo.png" },
                { name: "USTM", logoUrl: "/logos/ustm-logo.png" },
                { name: "GNRC", logoUrl: "/logos/gnrc-logo.png" },
                { name: "DPS", logoUrl: "/logos/dps-logo.png" },
                { name: "Samsung", logoUrl: "/logos/samsung-logo.png" },
                { name: "Apple", logoUrl: "/logos/apple-logo.png" },
                { name: "PVR Cinema", logoUrl: "/logos/pvr-logo.png" },
                { name: "Physics Wallah", logoUrl: "/logos/physics-wallah-logo.png" },
                { name: "Blinkit", logoUrl: "/logos/blinkit-logo.png" },
                { name: "Delivery", logoUrl: "/logos/delivery-logo.png" },
                { name: "Instacart", logoUrl: "/logos/instacart-logo.png" },
                { name: "DY365", logoUrl: "/logos/dy365-logo.png" },
                { name: "PRitiDin", logoUrl: "/logos/pritidin-logo.png" },
              ].map((company, index) => (
                <motion.div
                  key={`second-${company.name}`}
                  className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-center">
                    <img
                      src={company.logoUrl || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      className="h-12 w-auto mx-auto mb-1 opacity-80 hover:opacity-100 transition-opacity object-contain"
                    />
                    <div className="text-xs text-gray-400 font-medium">{company.name}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <span className="text-gray-400 text-lg">+ Many More</span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6 items-center"
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{ width: "calc(200% + 24px)" }}
            >
              {/* First set of testimonials */}
              {[
                {
                  name: "Sarah Johnson",
                  role: "CTO, TechCorp",
                  content:
                    "SoftCrop Solutions transformed our entire IT infrastructure. Their expertise and support have been invaluable to our growth.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "CEO, StartupXYZ",
                  content:
                    "Outstanding service and competitive pricing. They delivered exactly what they promised and exceeded our expectations.",
                  rating: 5,
                },
                {
                  name: "Emily Rodriguez",
                  role: "IT Director, GlobalFirm",
                  content:
                    "The 24/7 support and proactive monitoring have given us peace of mind. Highly recommend their services.",
                  rating: 5,
                },
                {
                  name: "David Thompson",
                  role: "Founder, InnovateLab",
                  content:
                    "Their cloud infrastructure solutions scaled perfectly with our rapid growth. Exceptional technical expertise.",
                  rating: 5,
                },
                {
                  name: "Lisa Wang",
                  role: "VP Technology, DataFlow",
                  content:
                    "Security was our top priority and SoftCrop delivered beyond expectations. Professional and reliable.",
                  rating: 5,
                },
                {
                  name: "James Miller",
                  role: "CIO, Enterprise Solutions",
                  content:
                    "The migration to their network infrastructure was seamless. Zero downtime and improved performance.",
                  rating: 5,
                },
                {
                  name: "Maria Garcia",
                  role: "Tech Lead, StartupHub",
                  content:
                    "Cost-effective solutions without compromising quality. Their support team is always responsive.",
                  rating: 5,
                },
                {
                  name: "Robert Kim",
                  role: "Director, CloudTech",
                  content:
                    "Innovative approach to our complex requirements. They understand enterprise-level challenges.",
                  rating: 5,
                },
                {
                  name: "Jennifer Lee",
                  role: "COO, DigitalFirst",
                  content: "Partnership that goes beyond service delivery. They're invested in our long-term success.",
                  rating: 5,
                },
                {
                  name: "Alex Brown",
                  role: "Head of IT, ScaleUp",
                  content:
                    "Transparent pricing and clear communication throughout. Highly recommend for any business size.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={`first-${testimonial.name}`}
                  className="flex-shrink-0 w-80"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            ⭐
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic text-sm leading-5">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                {
                  name: "Sarah Johnson",
                  role: "CTO, TechCorp",
                  content:
                    "SoftCrop Solutions transformed our entire IT infrastructure. Their expertise and support have been invaluable to our growth.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "CEO, StartupXYZ",
                  content:
                    "Outstanding service and competitive pricing. They delivered exactly what they promised and exceeded our expectations.",
                  rating: 5,
                },
                {
                  name: "Emily Rodriguez",
                  role: "IT Director, GlobalFirm",
                  content:
                    "The 24/7 support and proactive monitoring have given us peace of mind. Highly recommend their services.",
                  rating: 5,
                },
                {
                  name: "David Thompson",
                  role: "Founder, InnovateLab",
                  content:
                    "Their cloud infrastructure solutions scaled perfectly with our rapid growth. Exceptional technical expertise.",
                  rating: 5,
                },
                {
                  name: "Lisa Wang",
                  role: "VP Technology, DataFlow",
                  content:
                    "Security was our top priority and SoftCrop delivered beyond expectations. Professional and reliable.",
                  rating: 5,
                },
                {
                  name: "James Miller",
                  role: "CIO, Enterprise Solutions",
                  content:
                    "The migration to their network infrastructure was seamless. Zero downtime and improved performance.",
                  rating: 5,
                },
                {
                  name: "Maria Garcia",
                  role: "Tech Lead, StartupHub",
                  content:
                    "Cost-effective solutions without compromising quality. Their support team is always responsive.",
                  rating: 5,
                },
                {
                  name: "Robert Kim",
                  role: "Director, CloudTech",
                  content:
                    "Innovative approach to our complex requirements. They understand enterprise-level challenges.",
                  rating: 5,
                },
                {
                  name: "Jennifer Lee",
                  role: "COO, DigitalFirst",
                  content: "Partnership that goes beyond service delivery. They're invested in our long-term success.",
                  rating: 5,
                },
                {
                  name: "Alex Brown",
                  role: "Head of IT, ScaleUp",
                  content:
                    "Transparent pricing and clear communication throughout. Highly recommend for any business size.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div key={`second-${testimonial.name}`} className="flex-shrink-0 w-80">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <div key={i}>⭐</div>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic text-sm leading-5">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* Contact Section */}
      

      {/* CTA Section */}

      {/* Footer Section */}
      <footer className="relative z-10 bg-slate-900/90 border-t border-white/10 px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-semibold mb-6">About Our Company</h3>
              <p className="text-gray-400 mb-6 leading-5">
                We are providing quality services to our esteemed customers since 2005. Customers incluses Home Users,
                SME, Multinational Brands, Finanacial Institutions, Hotels, University, Hospitals etc.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Broadband Internet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    VPN Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Network Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Software Development
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400">123 Tech Street, Digital City</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400">info@softcropit.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 SoftCorp IT LLP. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
