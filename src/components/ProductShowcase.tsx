import { motion } from 'framer-motion';

const products = [
  {
    name: 'Game Assistant',
    description: 'AI-powered gaming companion for enhanced gameplay',
    icon: '🎮',
    tags: ['Chrome Extension', 'AI Vision', 'Real-time'],
    status: 'Live'
  },
  {
    name: 'Video Call Notepad',
    description: 'Automatic note-taking during video conferences',
    icon: '📝',
    tags: ['Chrome Extension', 'Auto-transcribe', 'Productivity'],
    status: 'Live'
  },
  {
    name: 'AI Content Generator',
    description: 'Generate high-quality content with advanced AI',
    icon: '✨',
    tags: ['Web App', 'GPT-4', 'Multi-format'],
    status: 'Coming Soon'
  },
  {
    name: 'Smart Analytics',
    description: 'Real-time data insights powered by AI',
    icon: '📊',
    tags: ['Dashboard', 'Analytics', 'ML'],
    status: 'Beta'
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-bates-cyan">Products</span>
          </h2>
          <p className="text-xl text-gray-400">AI solutions that work for you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(0, 217, 255, 0.6)' }}
              className="group p-8 rounded-2xl bg-bates-navy/30 border border-bates-cyan/20 backdrop-blur-sm cursor-pointer transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  product.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : product.status === 'Beta'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                }`}>
                  {product.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-bates-cyan group-hover:text-white transition-colors">
                {product.name}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-bates-cyan/10 text-bates-cyan rounded-full text-sm border border-bates-cyan/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                className="mt-6 flex items-center gap-2 text-bates-cyan font-semibold"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                Learn More <span className="text-xl">→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
