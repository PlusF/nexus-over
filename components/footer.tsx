import { Box, Center, HStack, Text } from '@chakra-ui/react';
import InstagramButton from './instagram';

const boxStyle = {
    backgroundColor: '#111',
    color: '#fff',
    textAlign: 'center',
    fontSize: '1rem',
    padding: '0.8rem',
};

export default function Footer() {
    return (
        <Box sx={boxStyle}>
            <Center>
                <HStack>
                    <Text>Contact &rarr;</Text>
                    <InstagramButton url="https://www.instagram.com/neo_wish/" color="white" />
                </HStack>
            </Center>
        </Box>
    );
}
