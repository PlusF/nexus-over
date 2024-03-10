import { AudienceEntryBox, WaitCancelBox } from '@/components/entrybox';
import { Box, Heading } from '@chakra-ui/react';

import { BaseBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { AudienceEntry } from '@prisma/client';

type EntryListProps = {
    audienceEntries: AudienceEntry[];
};

export default function AudienceEntryList(props: EntryListProps) {
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <BaseBox>
                <Heading mb="5">Audience List</Heading>
                {props.audienceEntries.map((entry: AudienceEntry, i: number) => (
                    <>
                        {i === 60 && <WaitCancelBox />}
                        <AudienceEntryBox key={entry.id} entry={entry} />
                    </>
                ))}
            </BaseBox>
            <Box h={600}></Box>
            <BackLinkBox href="/entry" />
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
