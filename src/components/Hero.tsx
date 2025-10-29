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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
            <span className="text-bates-cyan">Smart Tools</span>
            <br />
            For Everyday Life
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            AI-powered Chrome extensions and macOS apps built by an independent developer.
            Solving real problems with simple, elegant solutions.
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
            <motion.a
              href="/products"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-bates-cyan text-bates-dark rounded-lg font-semibold text-base sm:text-lg hover:glow-cyan-strong transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </motion.a>

            <motion.a
              href="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-bates-cyan text-bates-cyan rounded-lg font-semibold text-base sm:text-lg hover:bg-bates-cyan/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Custom Solutions
            </motion.a>
          </div>
        </motion.div>

        {/* Project highlights */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-24 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[
            {
              label: 'Chrome Extensions',
              value: (
                <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                  <circle cx="12" cy="12" r="6" fill="white"/>
                  <circle cx="12" cy="12" r="3" fill="#4285F4"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12h5.5L12 7.5V2z" fill="#EA4335"/>
                  <path d="M22 12c0-5.52-4.48-10-10-10v5.5L16.5 12H22z" fill="#34A853"/>
                  <path d="M12 22c5.52 0 10-4.48 10-10h-5.5L12 16.5V22z" fill="#FBBC04"/>
                </svg>
              ),
              desc: 'Browser tools',
              link: '/products#extensions'
            },
            { label: 'macOS Apps', value: '💻', desc: 'Native applications', link: '/products#apps' },
            { label: 'Open Source', value: '🌟', desc: 'Code on GitHub', link: 'https://github.com/danielalanbates' },
          ].map((stat, i) => {
            const Component = stat.link ? motion.a : motion.div;
            const linkProps = stat.link ? {
              href: stat.link,
              target: stat.link.startsWith('http') ? '_blank' : undefined,
              rel: stat.link.startsWith('http') ? 'noopener noreferrer' : undefined,
            } : {};

            return (
              <Component
                key={i}
                {...linkProps}
                className={`p-6 rounded-xl bg-bates-navy/50 border border-bates-cyan/20 backdrop-blur-sm ${stat.link ? 'cursor-pointer' : ''}`}
                whileHover={stat.link ? { y: -5, borderColor: 'rgba(0, 217, 255, 0.5)' } : {}}
              >
                <div className="text-4xl mb-2">{stat.value}</div>
                <div className="text-lg font-bold text-bates-cyan mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </Component>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
