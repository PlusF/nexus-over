import { Box, Center } from '@chakra-ui/react';
import { useScroll, useTransform } from 'framer-motion';

import Link from 'next/link';
import { ChakraBox } from './motion';

function NormalLogo() {
    return (
        <Box zIndex="docked">
            <Link href="/">
                <Center>
                    <Box position="absolute" top={3} fontSize="7xl" color="white">
                        O
                    </Box>
                    <Box
                        position="absolute"
                        top={5}
                        fontSize="6xl"
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
    const shiftBox = useTransform(scrollYProgress, [0, threshold], [250, 500]);
    const shiftNe = useTransform(scrollYProgress, [0, threshold], [-175, -44]);
    const shiftXus = useTransform(scrollYProgress, [0, threshold], [-85, -60]);
    const shiftO = useTransform(scrollYProgress, [0, threshold], [25, -29]);
    const shiftVer = useTransform(scrollYProgress, [0, threshold], [83, -45]);
    const colorNe = useTransform(scrollYProgress, [0, threshold], ['#ffffff', '#000000']);
    const colorUsVer = useTransform(scrollYProgress, [0, threshold], ['#ffffffff', '#00000000']);
    const shadowNe = useTransform(
        scrollYProgress,
        [0, threshold * 2],
        ['0px 0px 0px #000000', '0px 0px 5px #ffffff']
    );
    return (
        <ChakraBox top={7} style={{ translateY: shiftBox }} zIndex="docked">
            <Link href="/">
                <Box>
                    <ChakraBox
                        style={{
                            translateX: shiftO,
                            translateY: -10,
                        }}
                        position="absolute"
                        color="white"
                        fontSize="7xl"
                    >
                        O
                    </ChakraBox>
                    <ChakraBox
                        style={{
                            translateX: shiftVer,
                            color: colorUsVer,
                        }}
                        position="absolute"
                        fontSize="6xl"
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
                        fontSize="6xl"
                    >
                        NE
                    </ChakraBox>
                    <ChakraBox
                        style={{
                            translateX: shiftXus,
                            color: colorUsVer,
                        }}
                        position="absolute"
                        fontSize="6xl"
                    >
                        xus
                    </ChakraBox>
                </Box>
            </Link>
        </ChakraBox>
    );
}

export { AnimatedLogo, NormalLogo };
