import '@fontsource/jomolhari';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Jomolhari', serif`,
        body: `'Jomolhari', serif`,
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
        black: '#000',
    },
});

export { theme };
