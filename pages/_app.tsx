import { Box, Center, ChakraProvider, VStack } from '@chakra-ui/react';

import Footer from '@/components/footer';
import { theme } from '@/styles/globalstyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Box bgImg="url('NEO.svg')" backgroundRepeat={'repeat'} backgroundPosition={'center'}>
                <Center>
                    <VStack>
                        <Component {...pageProps} />
                    </VStack>
                </Center>
                <Box h={150}></Box>
                <Footer />
            </Box>
        </ChakraProvider>
    );
}
