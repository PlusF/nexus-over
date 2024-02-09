import BaseLinkBox from '@/components/linkbox';
import { AnimatedLogo } from '@/components/logo';
import { Box, Center, Heading } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>NExus Over</title>
                <meta name="description" content="NExus Over" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AnimatedLogo />
            <Box h={800}></Box>
            <BaseLinkBox href="/concept" linkText="&rarr; Read more">
                <Heading textAlign="center">Concept</Heading>
                <Center my="2" fontSize="lg">
                    （仮）新感覚イベント
                </Center>
                <Center fontSize="md">
                    （仮）WISHの歴史の深さを体感 ストリートダンスシーンへの進出のきっかけ
                    熱量の底上げ
                </Center>
            </BaseLinkBox>
            <Box h={5000}></Box>
        </>
    );
}
