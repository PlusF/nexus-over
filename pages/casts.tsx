import { SimpleBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Casts() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <SimpleBox title="Judges">Coming soon...</SimpleBox>
                <SimpleBox title="DJ">Coming soon...</SimpleBox>
                <SimpleBox title="MC">Coming soon...</SimpleBox>
                <SimpleBox title="Guest Battlers">Coming soon...</SimpleBox>
                <Box h={200}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
