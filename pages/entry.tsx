import { SimpleBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box, Button, Grid, GridItem, Heading, Input, Select, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';

function EntrySelect(props: {
    title: string;
    options: string[];
    onChange: Dispatch<SetStateAction<string>>;
}) {
    return (
        <>
            <GridItem colSpan={1} textAlign="right" mt="2">
                <Heading fontSize="md">{props.title}</Heading>
            </GridItem>
            <GridItem colSpan={1}>
                <Select
                    placeholder="Select option"
                    onChange={(event) => props.onChange(event.target.value)}
                    isRequired
                >
                    {props.options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
            </GridItem>
        </>
    );
}

function EntryInput(props: {
    title: string;
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
}) {
    return (
        <>
            <GridItem colSpan={1} textAlign="right" mt="2">
                <Heading fontSize="md">{props.title}</Heading>
            </GridItem>
            <GridItem colSpan={1}>
                <Input
                    type="text"
                    value={props.value}
                    onChange={(event) => props.onChange(event.target.value)}
                    isRequired
                />
            </GridItem>
        </>
    );
}

function Description(props: { text: string }) {
    return (
        <GridItem colSpan={2} textAlign="center" mt="5">
            <Text fontSize="sm">{props.text}</Text>
        </GridItem>
    );
}

function SubmitButton(props: { text: string; onClick: () => void }) {
    return (
        <GridItem colSpan={2} textAlign="center" mt="5">
            <Button size="lg" colorScheme="gray" onClick={props.onClick}>
                {props.text}
            </Button>
        </GridItem>
    );
}

function BattleEntry() {
    const [generation, setGeneration] = useState<string>('');
    const generations = [...Array(45)].map((_, i) => String(i + 1));
    const [genre, setGenre] = useState<string>('');
    const genres = ['Hiphop', 'Pop', 'Lock', 'Breaking', 'House', 'Jazz', 'Freestyle'];
    const [name, setName] = useState<string>('');
    const [dancerName, setDancerName] = useState<string>('');

    function handleEntry() {
        try {
            if (!generation || !genre || !name || !dancerName) {
                throw new Error('Please fill in all fields');
            }
        } catch (error) {
            alert(error);
            return;
        }
        console.log(generation, genre, name, dancerName);
    }
    return (
        <SimpleBox title="Battle Entry">
            <Grid templateColumns="repeat(2, 1fr)" gridTemplateColumns={'100px 1fr'} gap="2" mt="5">
                <EntrySelect title="代" options={generations} onChange={setGeneration} />
                <EntrySelect title="ジャンル" options={genres} onChange={setGenre} />
                <EntryInput title="名前" value={name} onChange={setName} />
                <EntryInput title="ダンサー名" value={dancerName} onChange={setDancerName} />
                <Description text="※エントリー料2000円+One Drink" />
                <SubmitButton text="Entry" onClick={handleEntry} />
            </Grid>
        </SimpleBox>
    );
}

function AudienceEntry() {
    const [generation, setGeneration] = useState<string>('');
    const generations = [...Array(45)].map((_, i) => String(i + 1));
    const [genre, setGenre] = useState<string>('');
    const genres = ['Hiphop', 'Pop', 'Lock', 'Breaking', 'House', 'Jazz', 'Freestyle'];
    const [name, setName] = useState<string>('');

    function handleEntry() {
        try {
            if (!generation || !genre || !name) {
                throw new Error('Please fill in all fields');
            }
        } catch (error) {
            alert(error);
            return;
        }
        console.log(generation, genre, name);
    }
    return (
        <SimpleBox title="観覧申込">
            <Grid templateColumns="repeat(2, 1fr)" gridTemplateColumns={'100px 1fr'} gap="2" mt="5">
                <EntrySelect title="代" options={generations} onChange={setGeneration} />
                <EntrySelect title="ジャンル" options={genres} onChange={setGenre} />
                <EntryInput title="名前" value={name} onChange={setName} />
                <Description text="※観覧料1000円+One Drink" />
                <SubmitButton text="申込" onClick={handleEntry} />
            </Grid>
        </SimpleBox>
    );
}

export default function Entry() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <BattleEntry />
                <AudienceEntry />
            </Box>
            <BackLinkBox />
        </>
    );
}
