import { motion } from 'framer-motion';

const products = [
  {
    name: 'GistMail',
    description: 'Role-specific AI email summaries for Gmail. Get executive summaries tailored to your job function.',
    icon: '📧',
    tags: ['Chrome Extension', 'Claude AI', 'Productivity'],
    status: 'Beta'
  },
  {
    name: 'PhotoGear Price Tracker',
    description: 'Never overpay for photography gear. Track prices across B&H, Adorama, KEH, and MPB with smart deal scoring.',
    icon: '📸',
    tags: ['Chrome Extension', 'Price Alerts', 'Photography'],
    status: 'Beta'
  },
  {
    name: 'LowPower Automator',
    description: 'Automatic Low Power Mode for macOS. Extends battery life by enabling Low Power Mode at your custom threshold.',
    icon: '🔋',
    tags: ['macOS App', 'Menu Bar', 'Battery'],
    status: 'Live',
    link: 'https://batesai.gumroad.com/l/fmuqo'
  },
  {
    name: 'More Coming Soon',
    description: 'Building tools that solve real problems. Follow on GitHub to see what\'s next.',
    icon: '🚀',
    tags: ['In Development', 'Open Source', 'Ideas Welcome'],
    status: 'Soon'
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
            Current <span className="text-bates-cyan">Projects</span>
          </h2>
          <p className="text-xl text-gray-400">Tools I'm building and testing</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => {
            const Component = product.link ? motion.a : motion.div;
            const linkProps = product.link ? {
              href: product.link,
              target: product.link.startsWith('http') ? '_blank' : undefined,
              rel: product.link.startsWith('http') ? 'noopener noreferrer' : undefined
            } : {};

            return (
              <Component
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, borderColor: 'rgba(0, 217, 255, 0.6)' }}
                className="group p-8 rounded-2xl bg-bates-navy/30 border border-bates-cyan/20 backdrop-blur-sm cursor-pointer transition-all"
                {...linkProps}
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
                  {product.link ? 'Get It Now' : 'Learn More'} <span className="text-xl">→</span>
                </motion.div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
