import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

function ScrollOnce(props: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            style={{ width: '100%', height: '100%' }}
        >
            {props.children}
        </motion.div>
    );
}

export { ChakraBox, ScrollOnce };
