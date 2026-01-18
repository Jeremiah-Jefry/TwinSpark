import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-dark-950 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(139, 92, 246, 0.3)',
                '0 0 60px rgba(139, 92, 246, 0.6)',
                '0 0 20px rgba(139, 92, 246, 0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold font-display mb-4"
        >
          Twin<span className="gradient-text">spark</span>
        </motion.h1>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-48 h-1 bg-dark-800 rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full bg-gradient-to-r from-primary-500 to-accent-500"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
