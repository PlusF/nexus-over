import { SimpleBox } from '@/components/box';
import { BackLinkBox, BaseLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
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

function Description(props: { children?: React.ReactNode }) {
    return (
        <GridItem colSpan={2} textAlign="center" mt="5">
            <Text fontSize="sm">{props.children}</Text>
        </GridItem>
    );
}

function SubmitButton(props: { text: string; onClick: () => void; isLoading?: boolean }) {
    return (
        <GridItem colSpan={2} textAlign="center" mt="5">
            <Button
                size="lg"
                colorScheme="gray"
                onClick={props.onClick}
                isLoading={props.isLoading}
            >
                {props.text}
            </Button>
        </GridItem>
    );
}

function SuccessModal(props: {
    isOpen: boolean;
    onClose: () => void;
    href: string;
    content: string;
    apply: string;
}) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size="sm">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{props.apply}完了</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {props.content}の{props.apply}ありがとうございます。
                    当日会場にて料金をお支払いください。
                </ModalBody>

                <ModalFooter gap="2">
                    <Button variant="outline" as={Link} href={props.href}>
                        Entry List
                    </Button>
                    <Button variant="outline" as={Link} href={'/'}>
                        Home
                    </Button>
                    <Button mr={3} onClick={props.onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

function BattleEntry() {
    const [generation, setGeneration] = useState<string>('');
    const generations = [...Array(45)].map((_, i) => String(i + 1));
    const [genre, setGenre] = useState<string>('');
    const genres = ['Hiphop', 'Pop', 'Lock', 'Breaking', 'House', 'Jazz', 'Waack', 'Freestyle'];
    const [name, setName] = useState<string>('');
    const [dancerName, setDancerName] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleEntry() {
        try {
            if (!generation || !genre || !name || !dancerName) {
                throw new Error('未入力の項目があります。全ての項目を入力してください。');
            }
            setIsLoading(true);
            const res = await fetch('/api/battle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ generation, genre, name, dancerName }),
            });
            const data = await res.json();
            setIsLoading(false);
            onOpen();
        } catch (error) {
            alert(error);
            setIsLoading(false);
            return;
        }
    }
    return (
        <SimpleBox title="Battle Entry">
            <Grid templateColumns="repeat(2, 1fr)" gridTemplateColumns={'100px 1fr'} gap="2" mt="5">
                <EntrySelect title="代" options={generations} onChange={setGeneration} />
                <EntrySelect title="ジャンル" options={genres} onChange={setGenre} />
                <EntryInput title="名前" value={name} onChange={setName} />
                <EntryInput title="ダンサー名" value={dancerName} onChange={setDancerName} />
                <Description>
                    <Text fontSize="sm" textAlign="left" ml="5">
                        ※エントリー料2500円+One Drink
                        <br />
                        ※エントリー上限：50枠
                        <br />
                        ※枠が埋まるとキャンセル待ちとなります。
                    </Text>
                </Description>
                <SubmitButton text="Entry" onClick={handleEntry} isLoading={isLoading} />
            </Grid>
            <SuccessModal
                isOpen={isOpen}
                onClose={onClose}
                href="/battle-entrylist"
                content="バトル"
                apply="エントリー"
            />
        </SimpleBox>
    );
}

function AudienceEntry() {
    const [generation, setGeneration] = useState<string>('');
    const generations = [...Array(45)].map((_, i) => String(i + 1));
    const [genre, setGenre] = useState<string>('');
    const genres = ['Hiphop', 'Pop', 'Lock', 'Breaking', 'House', 'Jazz', 'Waack'];
    const [name, setName] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleEntry() {
        try {
            if (!generation || !genre || !name) {
                throw new Error('未入力の項目があります。全ての項目を入力してください。');
            }
            setIsLoading(true);
            const res = await fetch('/api/audience', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ generation, genre, name }),
            });
            const data = await res.json();
            setIsLoading(false);
            onOpen();
        } catch (error) {
            alert(error);
            setIsLoading(false);
            return;
        }
    }
    return (
        <SimpleBox title="観覧申込">
            <Grid templateColumns="repeat(2, 1fr)" gridTemplateColumns={'100px 1fr'} gap="2" mt="5">
                <EntrySelect title="代" options={generations} onChange={setGeneration} />
                <EntrySelect title="ジャンル" options={genres} onChange={setGenre} />
                <EntryInput title="名前" value={name} onChange={setName} />
                <Description>
                    <Text fontSize="sm" textAlign="left" ml="5">
                        ※観覧料1000円+One Drink
                        <br />
                        ※観覧上限：20枠
                        <br />
                        ※枠が埋まるとキャンセル待ちとなります。
                    </Text>
                </Description>
                <SubmitButton text="申込" onClick={handleEntry} isLoading={isLoading} />
            </Grid>
            <SuccessModal
                isOpen={isOpen}
                onClose={onClose}
                href="/audience-entrylist"
                content="イベント観覧"
                apply="申込"
            />
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
            <BaseLinkBox href="/battle-entrylist" linkText="Battle Entry List &rarr;" />
            <BaseLinkBox href="/audience-entrylist" linkText="観覧 Entry List &rarr;" />
            <BackLinkBox />
        </>
    );
}
