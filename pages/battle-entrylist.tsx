import { SimpleBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { BattleEntry } from '@prisma/client';

type EntryListProps = {
    battleEntries: BattleEntry[];
};

export default function BattleEntryList(props: EntryListProps) {
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <SimpleBox title="Battle Entry List">
                <Grid
                    templateColumns="repeat(3, 1fr)"
                    gridTemplateColumns={'20px 75px 1fr'}
                    gap="1"
                    mt="5"
                >
                    {props.battleEntries.map((entry: any) => (
                        <>
                            <GridItem key={entry.id + 'generation'} colSpan={1}>
                                {entry.generation}
                            </GridItem>
                            <GridItem key={entry.id + 'genre'} colSpan={1}>
                                {entry.genre}
                            </GridItem>
                            <GridItem key={entry.id + 'dancerName'} colSpan={1}>
                                {entry.dancerName}
                            </GridItem>
                        </>
                    ))}
                </Grid>
            </SimpleBox>
            <Box h={400}></Box>
            <BackLinkBox href="/entry" />
        </>
    );
}

export async function getServerSideProps(context: any) {
    try {
        const host = context.req.headers.host || 'localhost:3000';
        const protocol = /^localhost/.test(host) ? 'http' : 'https';
        const battleEntries = await fetch(`${protocol}://${host}/api/battle`).then((data) =>
            data.json()
        );
        return {
            props: {
                battleEntries: battleEntries,
            },
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                battleEntries: [],
            },
        };
    }
}
