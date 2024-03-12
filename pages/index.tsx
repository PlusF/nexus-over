import { Box, Center, Heading } from '@chakra-ui/react';

import { SimpleMotionBox } from '@/components/box';
import { HomeLinkBox } from '@/components/linkbox';
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

            <HomeLinkBox href="/concept" title="Concept">
                <Box my="2" fontSize="sm">
                    今までにない感覚を、WISHのイベントで。
                </Box>
            </HomeLinkBox>

            <HomeLinkBox href="/location" title="Location">
                <Heading fontSize="md" mt="2">
                    六本木CUBE
                </Heading>
                <Heading fontSize="md">2024/6/1(Sat.)</Heading>
                <Box fontSize="sm" mt="2">
                    タイムテーブルもこちらから
                </Box>
            </HomeLinkBox>

            <HomeLinkBox href="/casts" title="Casts">
                <Heading fontSize="md" mt="2">
                    Judges
                </Heading>
                <Box fontSize="sm">U-KI the retro (Bixbite/GRAYSOURCE)</Box>
                <Box fontSize="sm">RiN. (Novel Nextus/fidi)</Box>
                <Heading fontSize="md" mt="2">
                    DJ
                </Heading>
                <Box fontSize="sm">OnokUro (happen inn Mnchr-m)</Box>
            </HomeLinkBox>

            <HomeLinkBox href="/contents" title="Contents">
                <Heading fontSize="md" mt="2">
                    1on1 Freestyle Battle
                </Heading>
                <Heading fontSize="md" mt="2">
                    Showcases
                </Heading>
            </HomeLinkBox>

            <HomeLinkBox href="/entry" title="Entry" linkText="Entry now!">
                <Heading fontSize="md" mt="2">
                    バトル・観覧エントリー
                </Heading>
            </HomeLinkBox>

            <SimpleMotionBox title="Teaser Movie">
                <Box fontSize="sm" mt="2">
                    3/9 卒業公演にて準告知映像を公開。
                    <br />
                    4/13 新歓公演にて本告知映像を公開。
                </Box>
                <Heading fontSize="md" mt="2">
                    準告知映像
                </Heading>
                <Center>
                    <iframe
                        width="250"
                        src="https://www.youtube.com/embed/pg7xLd-SXaI?si=Za155YUkDc-4zloj"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </Center>
            </SimpleMotionBox>

            <HomeLinkBox
                href="https://www.instagram.com/neo_wish?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                linkText="Check it now!"
                title="Contact"
            >
                <Heading fontSize="md" mt="2">
                    公式Instagramアカウント
                </Heading>
            </HomeLinkBox>

            <Box h={100}></Box>
        </>
    );
}
