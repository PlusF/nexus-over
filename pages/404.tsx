import { SimpleBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Custom404() {
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <SimpleBox title="404">ページが見つかりませんでした。</SimpleBox>
            <Box h={200}></Box>
            <BackLinkBox />
        </>
    );
}
