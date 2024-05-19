import { BattleEntryBox, WaitCancelBox } from '@/components/entrybox';
import { Box, HStack, Heading, Spacer } from '@chakra-ui/react';

import { NeoBox } from '@/components/box';
import { TopButton } from '@/components/button';
import { NormalLogo } from '@/components/logo';
import { BattleEntry } from '@prisma/client';

type EntryListProps = {
    battleEntries: BattleEntry[];
};

export default function BattleEntryList(props: EntryListProps) {
    props.battleEntries.sort((a, b) => a.id - b.id);
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <NeoBox title="Battle Entry List">
                {props.battleEntries.map((entry: BattleEntry, i: number) => (
                    <>
                        {i === 65 && <WaitCancelBox />}
                        <BattleEntryBox key={entry.id} entry={entry} />
                    </>
                ))}
                <HStack mt="5">
                    <Spacer />
                    <Heading fontSize="sm">以上{props.battleEntries.length}名</Heading>
                </HStack>
            </NeoBox>
            <Box h={50}></Box>
            <TopButton />
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
