import { SimpleBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Location() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <SimpleBox title="Location">Coming soon...</SimpleBox>
                <SimpleBox title="Time Table">Coming soon...</SimpleBox>
                <Box h={200}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
