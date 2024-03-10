import { HStack, Text } from '@chakra-ui/react';
import { AudienceEntry, BattleEntry } from '@prisma/client';

function EntryBox(props: { generation: string; genre: string; name: string }) {
    return (
        <HStack mt="2">
            <Text width="20px">{props.generation}</Text>
            <Text width="75px">{props.genre}</Text>
            <Text>{props.name}</Text>
        </HStack>
    );
}

function WaitCancelBox() {
    return (
        <HStack mt="5">
            <Text>以下キャンセル待ち</Text>
        </HStack>
    );
}

function BattleEntryBox(props: { entry: BattleEntry }) {
    return (
        <EntryBox
            generation={props.entry.generation}
            genre={props.entry.genre}
            name={props.entry.dancerName}
        />
    );
}

function AudienceEntryBox(props: { entry: AudienceEntry }) {
    return (
        <EntryBox
            generation={props.entry.generation}
            genre={props.entry.genre}
            name={props.entry.name}
        />
    );
}

export { AudienceEntryBox, BattleEntryBox, WaitCancelBox };
