import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { Variants, isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const cardVariants: Variants = {
    offscreen: {
        x: -800,
        visibility: 'hidden',
    },
    onscreen: {
        x: 0,
        visibility: 'visible',
        transition: {
            type: 'spring',
            damping: 20,
            duration: 0.3,
        },
    },
};

function ScrollOnce(props: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            style={{ width: '100%', height: '100%' }}
        >
            <motion.div variants={cardVariants}>{props.children}</motion.div>
        </motion.div>
    );
}

export { ChakraBox, ScrollOnce };
