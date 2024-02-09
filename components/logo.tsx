import { Box, Center } from '@chakra-ui/react';
import { useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ChakraBox } from './motion';

function NormalLogo() {
    return (
        <Box position="sticky" top={20} zIndex="docked">
            <Link href="/">
                <Center>
                    <Box position="absolute" fontSize="8xl" color="white">
                        O
                    </Box>
                    <Box
                        position="absolute"
                        fontSize="7xl"
                        color="black"
                        textShadow="0px 0px 5px #ffffff"
                    >
                        NE
                    </Box>
                </Center>
            </Link>
        </Box>
    );
}

function AnimatedLogo() {
    const { scrollYProgress } = useScroll();
    const threshold = 0.2;
    const shiftBox = useTransform(scrollYProgress, [0, threshold], [250, 0]);
    const shiftNe = useTransform(scrollYProgress, [0, threshold], [-205, -54]);
    const shiftXus = useTransform(scrollYProgress, [0, threshold], [-95, -60]);
    const shiftOX = useTransform(scrollYProgress, [0, threshold], [25, -39]);
    const shiftOY = useTransform(scrollYProgress, [0, threshold], [-22, -18]);
    const shiftVer = useTransform(scrollYProgress, [0, threshold], [100, -45]);
    const colorNe = useTransform(scrollYProgress, [0, threshold], ['#ffffff', '#000000']);
    const colorUsVer = useTransform(scrollYProgress, [0, threshold], ['#ffffffff', '#00000000']);
    const shadowNe = useTransform(
        scrollYProgress,
        [0, threshold * 2],
        ['0px 0px 0px #000000', '0px 0px 5px #ffffff']
    );
    return (
        <ChakraBox position="sticky" top={7} style={{ translateY: shiftBox }} zIndex="docked">
            <Link href="/">
                <Box>
                    <ChakraBox
                        style={{
                            translateX: shiftOX,
                            translateY: shiftOY,
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

export { AnimatedLogo, NormalLogo };
