import Footer from '@/components/footer';
import { theme } from '@/style/globalstyles';
import { Box, Center, ChakraProvider, VStack } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Box
                bgImg="url('NEO.svg')"
                backgroundRepeat={'repeat'}
                backgroundPosition={'center'}
                width="100%"
            >
                <Center>
                    <VStack>
                        <Component {...pageProps} />
                    </VStack>
                </Center>
            </Box>
            <Footer />
        </ChakraProvider>
    );
}
