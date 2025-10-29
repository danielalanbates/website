import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated circuit background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-bates-cyan/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mouse follower glow */}
      <motion.div
        className="absolute w-96 h-96 bg-bates-cyan/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-bates-cyan">Smart Tools</span>
            <br />
            For Everyday Life
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            AI-powered Chrome extensions and macOS apps built by an independent developer.
            Solving real problems with simple, elegant solutions.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="/products"
              className="px-8 py-4 bg-bates-cyan text-bates-dark rounded-lg font-semibold text-lg hover:glow-cyan-strong transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </motion.a>
            
            <motion.a
              href="/services"
              className="px-8 py-4 border-2 border-bates-cyan text-bates-cyan rounded-lg font-semibold text-lg hover:bg-bates-cyan/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Custom Solutions
            </motion.a>
          </div>
        </motion.div>

        {/* Project highlights */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[
            { label: 'Chrome Extensions', value: '🔌', desc: 'Browser tools' },
            { label: 'macOS Apps', value: '💻', desc: 'Native applications' },
            { label: 'Open Source', value: '🌟', desc: 'Code on GitHub' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-bates-navy/50 border border-bates-cyan/20 backdrop-blur-sm"
              whileHover={{ y: -5, borderColor: 'rgba(0, 217, 255, 0.5)' }}
            >
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-lg font-bold text-bates-cyan mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
