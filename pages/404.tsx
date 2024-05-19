import { NeoBox } from '@/components/box';
import { TopButton } from '@/components/button';
import { NormalLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';

export default function Custom404() {
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <NeoBox title="404">ページが見つかりませんでした。</NeoBox>
            <Box h={200}></Box>
            <TopButton />
        </>
    );
}
