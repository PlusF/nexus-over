import { Button, Text } from '@chakra-ui/react';

import { FiInstagram } from 'react-icons/fi';

export default function InstagramButton(props: { url: string; backgroundColor?: string }) {
    function openInstagram() {
        window.open(props.url);
    }
    const backgroundColor = props.backgroundColor || 'black';
    return (
        <Button onClick={openInstagram} rounded="none" backgroundColor={backgroundColor}>
            <FiInstagram color="white" />
            <Text mr="1" color="white">
                &rarr;
            </Text>
        </Button>
    );
}
