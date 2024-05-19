import { Button } from '@chakra-ui/react';
import { FiInstagram } from 'react-icons/fi';

export default function InstagramButton(props: { url: string; backgroundColor?: string }) {
    function openInstagram() {
        window.open(props.url);
    }
    const backgroundColor = props.backgroundColor || 'black';
    return (
        <Button
            onClick={openInstagram}
            rounded="3xl"
            border="1px"
            borderColor="white"
            backgroundColor={backgroundColor}
        >
            <FiInstagram color="white" />
        </Button>
    );
}
