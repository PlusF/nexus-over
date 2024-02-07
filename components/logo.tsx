import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

function AnimatedLogo() {
    const { scrollYProgress } = useScroll();
    const threshold = 0.1;
    const shiftNe = useTransform(scrollYProgress, [0, threshold], [-260, -60]);
    const shiftXus = useTransform(scrollYProgress, [0, threshold], [-150, -60]);
    const shiftO = useTransform(scrollYProgress, [0, threshold], [55, -45]);
    const shiftVer = useTransform(scrollYProgress, [0, threshold], [130, -45]);
    const colorNe = useTransform(scrollYProgress, [0, threshold], ['#ffffff', '#000000']);
    const colorUsVer = useTransform(scrollYProgress, [0, threshold], ['#ffffffff', '#00000000']);
    const shadowNe = useTransform(
        scrollYProgress,
        [0, threshold * 2],
        ['0px 0px 0px #000000', '0px 0px 5px #ffffff']
    );
    return (
        <ChakraBox position="sticky" top={10}>
            <Link href="/">
                <Box>
                    <ChakraBox
                        style={{
                            translateX: shiftO,
                            translateY: -18,
                        }}
                        position="absolute"
                        color="white"
                        fontSize="8xl"
                    >
                        O
                    </ChakraBox>
                    <ChakraBox
                        style={{
                            translateX: shiftVer,
                            translateY: 7,
                            color: colorUsVer,
                        }}
                        position="absolute"
                        fontSize="7xl"
                    >
                        ver
                    </ChakraBox>
                    <ChakraBox
                        style={{
                            translateX: shiftNe,
                            color: colorNe,
                            textShadow: shadowNe,
                        }}
                        position="absolute"
                        fontSize="7xl"
                    >
                        NE
                    </ChakraBox>
                    <ChakraBox
                        style={{
                            translateX: shiftXus,
                            color: colorUsVer,
                        }}
                        position="absolute"
                        fontSize="7xl"
                    >
                        xus
                    </ChakraBox>
                </Box>
            </Link>
        </ChakraBox>
    );
}

export { AnimatedLogo };
