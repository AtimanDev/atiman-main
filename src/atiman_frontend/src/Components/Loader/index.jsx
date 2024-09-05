import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Home/logo.png';

function Loader() {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 6000);
  }, [navigate]);

  const words = 'Atimanon, Tagdon, Ilhon, Matutuon, Amomahon Nato';

  const loadingVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'linear',
        delayChildren: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'linear',
        delay: 0.35,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    show: (i) => ({
      transition: {
        delay: i * 0.5,
        staggerChildren: 0.5,
        delayChildren: i * 0.55,
        duration: 0.65,
      },
    }),
  };

  const spanVariants = {
    hidden: {
      y: 400,
    },
    show: {
      y: [300, 200, 100, 50, 20, 10, 0],
      transition: {
        type: 'spring',
        duration: 0.55,
        ease: [0.85, 0.75, 0.35, 0.01],
        bounce: 0.25,
      },
    },
  };

  return (
    <motion.div
      className="loading__container"
      variants={loadingVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <img src={logo} alt="Logo" height={100} width={100} />

      <motion.p
        variants={containerVariants}
        initial="hidden"
        custom={6}
        animate="show"
        style={{ overflow: 'hidden' }}
      >
        {words.split(' ').map((word) => (
          <motion.span variants={spanVariants} key={word}>
            {word + ' '}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}

export default Loader;
