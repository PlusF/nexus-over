import { HomeLinkBox } from '@/components/linkbox';
import { AnimatedLogo } from '@/components/logo';
import { Box, Heading } from '@chakra-ui/react';
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
            <Box h={600}></Box>

            <HomeLinkBox href="/concept" title="Concept">
                <Box my="2" fontSize="lg">
                    （仮）新感覚イベント
                </Box>
                <Box fontSize="md">
                    （仮）WISHの歴史の深さを体感 ストリートダンスシーンへの進出のきっかけ
                    熱量の底上げ
                </Box>
            </HomeLinkBox>

            <HomeLinkBox href="/location" title="Location">
                <Heading fontSize="md" mt="2">
                    六本木CUBE
                </Heading>
                <Heading fontSize="md" mt="2">
                    on 2024/6/1(Sat.)
                </Heading>
                <Box fontSize="md" mt="2">
                    タイムテーブルもこちらから
                </Box>
            </HomeLinkBox>

            <HomeLinkBox href="/casts" title="Casts">
                <Heading fontSize="md" mt="2">
                    Judges
                </Heading>
                <Box>U-ki the retro (Bixbite/GRAYSOURCE)</Box>
                <Box>RiN. (Novel Nextus/fidi)</Box>
                <Heading fontSize="md" mt="2">
                    DJ
                </Heading>
                <Box>OnokUro (Mnchr-m)</Box>
            </HomeLinkBox>

            <HomeLinkBox href="/contents" title="Contents">
                <Heading fontSize="md" mt="2">
                    1on1 Freestyle Battle
                </Heading>
                <Heading fontSize="md" mt="2">
                    Showcases
                </Heading>
            </HomeLinkBox>

            <HomeLinkBox href="/entry" title="Entry">
                <Heading fontSize="md" mt="2">
                    エントリー・観覧
                </Heading>
            </HomeLinkBox>

            <HomeLinkBox
                href="https://www.instagram.com/neo_wish?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                linkText="Check it now!"
                title="Contact"
            >
                <Heading fontSize="md" mt="2">
                    公式Instagramアカウント
                </Heading>
            </HomeLinkBox>

            <Box h={1000}></Box>
        </>
    );
}
