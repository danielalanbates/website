import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-First Design',
    description: 'Built from the ground up with AI capabilities at the core',
    icon: '🤖'
  },
  {
    title: 'Seamless Integration',
    description: 'Works with your existing tools and workflows',
    icon: '🔗'
  },
  {
    title: 'Real-Time Processing',
    description: 'Instant results powered by cutting-edge models',
    icon: '⚡'
  },
  {
    title: 'Privacy Focused',
    description: 'Your data stays secure with end-to-end encryption',
    icon: '🔒'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored AI products for your specific needs',
    icon: '⚙️'
  },
  {
    title: '24/7 Support',
    description: 'Always here to help you succeed',
    icon: '💬'
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-bates-navy/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Why Choose <span className="text-bates-cyan">BatesAI</span>
          </h2>
          <p className="text-xl text-gray-400">Innovation meets reliability</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-bates-navy/50 to-bates-dark border border-bates-cyan/20 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-bates-cyan">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
