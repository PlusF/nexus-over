import BackLinkBox from '@/components/back';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Concept() {
    return (
        <Box>
            <NormalLogo />
            <Box h={1000}></Box>
            <BackLinkBox />
        </Box>
    );
}
