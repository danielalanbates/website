import { motion } from 'framer-motion';

const products = [
  {
    name: 'GistMail',
    description: 'Role-specific AI email summaries for Gmail. Executive, PM, Support, and Sales roles get tailored intelligence.',
    icon: '📧',
    tags: ['Chrome Extension', 'Claude AI', 'Email'],
    status: 'Beta'
  },
  {
    name: 'PhotoGear Price Tracker',
    description: 'Never overpay for photography gear. Track prices across B&H, Adorama, KEH, MPB with intelligent deal scoring.',
    icon: '📸',
    tags: ['Chrome Extension', 'Price Alerts', 'Shopping'],
    status: 'Beta'
  },
  {
    name: 'LowPower Automator',
    description: 'Automatic Low Power Mode for macOS. Menu bar app that extends battery life with customizable thresholds.',
    icon: '🔋',
    tags: ['macOS App', 'Menu Bar', 'Battery'],
    status: 'Live',
    link: 'https://batesai.gumroad.com/l/fmuqo'
  },
  {
    name: 'MeetingNotes Extension',
    description: 'Auto-appearing notepad for video calls. Capture notes without switching windows during Zoom, Meet, or Teams.',
    icon: '📝',
    tags: ['Chrome Extension', 'Meetings', 'Productivity'],
    status: 'Beta'
  },
  {
    name: 'Web Scraping Toolkit',
    description: 'Universal web scraper with price monitoring. Extract data from any website with intelligent selectors.',
    icon: '🕸️',
    tags: ['Python', 'Automation', 'Data'],
    status: 'Beta'
  },
  {
    name: 'File Organizer',
    description: 'Intelligent file organization for macOS. Automatically sorts downloads and files by type, date, or custom rules.',
    icon: '📁',
    tags: ['macOS App', 'Automation', 'Files'],
    status: 'Beta'
  },
  {
    name: 'Security Research Tools',
    description: 'Security hardening and vulnerability assessment tools. Ethical security testing framework for system protection.',
    icon: '🔒',
    tags: ['Security', 'Python', 'Testing'],
    status: 'Live'
  },
  {
    name: 'Agentic Workers',
    description: 'AI agent orchestration framework. Build and deploy autonomous AI workers for complex workflows.',
    icon: '🤖',
    tags: ['AI Agents', 'Python', 'Automation'],
    status: 'Development'
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
                whileHover={product.link ? { y: -8, borderColor: 'rgba(0, 217, 255, 0.6)' } : {}}
                className={`group p-8 rounded-2xl bg-bates-navy/30 border border-bates-cyan/20 backdrop-blur-sm transition-all ${product.link ? 'cursor-pointer' : ''}`}
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

                {product.link && (
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-bates-cyan font-semibold"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    Get It Now <span className="text-xl">→</span>
                  </motion.div>
                )}
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
