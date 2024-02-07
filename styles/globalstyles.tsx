import { extendTheme } from '@chakra-ui/react';
import '@fontsource/jomolhari';

const theme = extendTheme({
    fonts: {
        heading: `'Jomolhari', serif`,
        body: `'Jomolhari', sans-serif`,
    },
    styles: {
        global: {
            html: {
                overflowX: 'clip',
            },
            body: {
                bg: '#333333',
                overflowX: 'clip',
            },
        },
    },
    colors: {
        brand: {
            100: '#000000',
            900: '#ffffff',
        },
    },
});

export { theme };
