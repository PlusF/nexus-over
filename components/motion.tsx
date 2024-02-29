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
    tap: {
        scale: 0.97,
        transition: {
            duration: 0.3,
        },
    },
    hover: {
        scale: 1.01,
        transition: {
            duration: 0.3,
        },
    },
};

function ScrollOnce(props: { children: React.ReactNode; enableTap?: boolean }) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            style={{ width: '100%', height: '100%' }}
            whileTap={props.enableTap ? 'tap' : undefined}
            whileHover={props.enableTap ? 'hover' : undefined}
        >
            <motion.div variants={cardVariants}>{props.children}</motion.div>
        </motion.div>
    );
}

export { ChakraBox, ScrollOnce };
