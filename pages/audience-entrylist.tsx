import { AudienceEntryBox, WaitCancelBox } from '@/components/entrybox';
import { Box, HStack, Heading, Spacer } from '@chakra-ui/react';

import { NeoBox } from '@/components/box';
import { TopButton } from '@/components/button';
import { NormalLogo } from '@/components/logo';
import { AudienceEntry } from '@prisma/client';

type EntryListProps = {
    audienceEntries: AudienceEntry[];
};

export default function AudienceEntryList(props: EntryListProps) {
    props.audienceEntries.sort((a, b) => a.id - b.id);
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <NeoBox title="観覧 Entry List">
                {props.audienceEntries.map((entry: AudienceEntry, i: number) => (
                    <>
                        {i === 20 && <WaitCancelBox />}
                        <AudienceEntryBox key={entry.id} entry={entry} />
                    </>
                ))}
                <HStack mt="5">
                    <Spacer />
                    <Heading fontSize="sm">以上{props.audienceEntries.length}名</Heading>
                </HStack>
            </NeoBox>
            <Box h={50}></Box>
            <TopButton href="entry" />
        </>
    );
}

export async function getServerSideProps(context: any) {
    try {
        const host = context.req.headers.host || 'localhost:3000';
        const protocol = /^localhost/.test(host) ? 'http' : 'https';
        const audienceEntries = await fetch(`${protocol}://${host}/api/audience`).then((data) =>
            data.json()
        );
        return {
            props: {
                audienceEntries: audienceEntries,
            },
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                audienceEntries: [],
            },
        };
    }
}
