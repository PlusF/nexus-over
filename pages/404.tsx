import { SimpleMotionBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Custom404() {
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <SimpleMotionBox title="404">ページが見つかりませんでした。</SimpleMotionBox>
            <Box h={200}></Box>
            <BackLinkBox />
        </>
    );
}
