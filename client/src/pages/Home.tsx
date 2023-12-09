import services from '@/assets/vectors/services.svg';
import CustomWalletButton from '@/components/shared/CustomWalletButton';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative grid min-h-screen place-items-center">
      <section className="z-10 flex flex-col items-center pb-40">
        <motion.h1
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, mass: 1.5 }}
          className="text-5xl font-semibold"
        >
          Servify
        </motion.h1>
        <motion.h2
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25, mass: 2, delay: 0.25 }}
          className="mt-3 text-sm text-text-secondary"
        >
          Bringing reliable house help to your doorsteps
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-10"
        >
          <CustomWalletButton />
        </motion.div>
      </section>
      <img
        src={services}
        className="absolute bottom-[8vh] left-1/2 w-[110%] max-w-2xl -translate-x-1/2"
      />
    </main>
  );
}
