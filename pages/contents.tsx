import { SimpleMotionBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Contents() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <SimpleMotionBox title="Battle">Coming soon...</SimpleMotionBox>
                <SimpleMotionBox title="Showcases">Coming soon...</SimpleMotionBox>
                <Box h={600}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
