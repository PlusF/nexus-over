import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';

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
                <Heading>Audience List</Heading>
                <Grid
                    templateColumns="repeat(3, 1fr)"
                    gridTemplateColumns={'20px 75px 1fr'}
                    gap="1"
                    mt="5"
                >
                    {props.audienceEntries.map((entry: any) => (
                        <>
                            <GridItem key={entry.id + 'generation'} colSpan={1}>
                                {entry.generation}
                            </GridItem>
                            <GridItem key={entry.id + 'genre'} colSpan={1}>
                                {entry.genre}
                            </GridItem>
                            <GridItem key={entry.id + 'name'} colSpan={1}>
                                {entry.name}
                            </GridItem>
                        </>
                    ))}
                </Grid>
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
