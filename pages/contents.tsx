import { SimpleBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Contents() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <SimpleBox title="Battle">Coming soon...</SimpleBox>
                <SimpleBox title="Showcases">Coming soon...</SimpleBox>
                <Box h={200}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
