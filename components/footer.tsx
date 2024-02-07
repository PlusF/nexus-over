import {
    Box,
    Center,
    HStack,
    IconButton,
    Text,
} from '@chakra-ui/react';
import { FiInstagram } from 'react-icons/fi';

const boxStyle = {
    backgroundColor: '#111',
    color: '#fff',
    textAlign: 'center',
    fontSize: {
        base: '0.6rem',
        md: '1rem'
    },
    padding: '0.8rem',
}

function openInstagram() {
    window.open('https://www.instagram.com/neo_wish?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==');
}

export default function Footer() {
    return (
        <Box sx={boxStyle}>
            <Center>
                <HStack>
                    <Text>
                        Contact &rarr;
                    </Text>
                    <IconButton
                        colorScheme='black'
                        aria-label="Open Instagram"
                        icon={<FiInstagram />}
                        onClick={openInstagram}
                    />
                </HStack>
            </Center>
        </Box>
    );
}
