import { NeoBox, NeoBoxWithButton } from '@/components/box';
import { Box, Center, Heading, Img } from '@chakra-ui/react';

import { AnimatedLogo } from '@/components/logo';
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
            <Box h={400}></Box>
            <Heading fontSize="lg" fontWeight="100" color="white">
                2024/6/1(Sat.) @六本木CUBE
            </Heading>
            <Box h={200}></Box>

            <NeoBoxWithButton href="/concept" title="Concept">
                <Box my="2" fontSize="sm">
                    今までにない感覚を、WISHのイベントで。
                </Box>
            </NeoBoxWithButton>

            <NeoBoxWithButton href="/location" title="Location">
                <Heading fontSize="md" mt="2">
                    六本木CUBE
                </Heading>
                <Heading fontSize="md">2024/6/1(Sat.)</Heading>
                <Box fontSize="sm" mt="2">
                    タイムテーブルもこちらから
                </Box>
                <Img src="cube.jpg" alt="cube" mt="3" />
            </NeoBoxWithButton>

            <NeoBoxWithButton href="/casts" title="Casts">
                <Heading fontSize="md" mt="2">
                    Judges
                </Heading>
                <Box fontSize="sm">U-KI the retro (Bixbite/GRAYSOURCE)</Box>
                <Box fontSize="sm">RiN. (Novel Nextus/fidi)</Box>
                <Heading fontSize="md" mt="2">
                    DJ
                </Heading>
                <Box fontSize="sm">OnokUro (happen inn Mnchr-m)</Box>
                <Img src="casts.jpg" alt="casts" mt="3" />
            </NeoBoxWithButton>

            <NeoBoxWithButton href="/contents" title="Contents">
                <Heading fontSize="md" mt="2">
                    1on1 Freestyle Battle
                </Heading>
                <Heading fontSize="md" mt="2">
                    Showcases
                </Heading>
                <Img src="contents.jpg" alt="contents" mt="3" />
            </NeoBoxWithButton>

            <NeoBoxWithButton href="/entry" title="Entry" linkText="Entry now! >">
                <Heading fontSize="md" mt="2">
                    バトル・観覧エントリーはこちらから
                </Heading>
            </NeoBoxWithButton>

            <NeoBox title="Movie">
                <Heading fontSize="md" mt="2">
                    準告知映像
                </Heading>
                <Center>
                    <iframe
                        width="250"
                        src="https://www.youtube.com/embed/pg7xLd-SXaI?si=Za155YUkDc-4zloj"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        style={{ borderWidth: '1px', borderColor: 'white' }}
                    ></iframe>
                </Center>
                <Heading fontSize="md" mt="2">
                    本告知映像
                </Heading>
                <Center>
                    <iframe
                        width="250"
                        src="https://www.youtube.com/embed/6XTam5p9X80?si=FpdXTOiEM_5xhg8z"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        style={{ borderWidth: '1px', borderColor: 'white' }}
                    ></iframe>
                </Center>
            </NeoBox>
        </>
    );
}
