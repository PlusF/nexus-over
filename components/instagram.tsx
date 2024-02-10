import { IconButton } from '@chakra-ui/react';
import { FiInstagram } from 'react-icons/fi';

export default function InstagramButton(props: { url: string; color?: string }) {
    function openInstagram() {
        window.open(props.url);
    }
    return (
        <IconButton
            color={props.color || '#000'}
            background={'#0000'}
            aria-label="Open Instagram"
            icon={<FiInstagram />}
            onClick={openInstagram}
            size="md"
            width="1"
            height="4"
            verticalAlign="middle"
        />
    );
}
