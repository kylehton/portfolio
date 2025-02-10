'use client' 
import { motion } from "framer-motion";


const ScrollMotionWrapper = ( { contents } ) => {

  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.25 }}
    viewport={{ once:true }}
    >
      {contents}
    </motion.div>
  );
};

export default ScrollMotionWrapper;
