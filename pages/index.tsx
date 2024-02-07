import { AnimatedLogo } from '@/components/logo';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>NExus Over</title>
                <meta name="description" content="NExus Over" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box h={300}></Box>
            <AnimatedLogo />
            <Box h={5000}></Box>
        </Box>
    );
}
