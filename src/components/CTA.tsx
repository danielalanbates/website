import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-bates-cyan/20 to-bates-navy/50 border border-bates-cyan/30 backdrop-blur-sm overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border-2 border-bates-cyan rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + i * 15}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Build with <span className="text-bates-cyan">AI</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of users leveraging AI to transform their workflow. 
              Start with our products or get a custom solution built for you.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="/products"
                className="px-8 py-4 bg-bates-cyan text-bates-dark rounded-lg font-semibold text-lg hover:glow-cyan-strong transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Products
              </motion.a>
              
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-bates-cyan text-bates-cyan rounded-lg font-semibold text-lg hover:bg-bates-cyan/10 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
