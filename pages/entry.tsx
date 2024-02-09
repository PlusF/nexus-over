import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Entry() {
    return (
        <Box>
            <NormalLogo />
            <Box h={1000}></Box>
            <BackLinkBox />
        </Box>
    );
}
