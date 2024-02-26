import { Box, Heading } from '@chakra-ui/react';

import { BaseBox } from '@/components/box';
import { BattleEntryBox } from '@/components/entrybox';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { BattleEntry } from '@prisma/client';

type EntryListProps = {
    battleEntries: BattleEntry[];
};

export default function BattleEntryList(props: EntryListProps) {
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <BaseBox>
                <Heading mb="5">Battle Entry List</Heading>
                {props.battleEntries.map((entry: any) => (
                    <BattleEntryBox key={entry.id} entry={entry} />
                ))}
            </BaseBox>
            <Box h={50}></Box>
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
