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
import { Dispatch, SetStateAction, useState } from 'react';
import { RoundedButton, TopButton } from '@/components/button';

import Link from 'next/link';
import { NeoBox } from '@/components/box';
import { NormalLogo } from '@/components/logo';

const generations = [...Array(46)].map((_, i) => String(i + 1));
const genres = ['Hiphop', 'Pop', 'Lock', 'Breaking', 'House', 'Jazz', 'Waack', 'Freestyle'];
const limitedGenres = ['Hiphop', 'Pop', 'Lock', 'Breaking', 'House', 'Jazz', 'Waack', 'その他'];

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
                    placeholder="選んでください"
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
            <Text fontSize="sm" textAlign="left" ml="5">
                {props.children}
            </Text>
        </GridItem>
    );
}

function SubmitButton(props: { text: string; onClick: () => void; isLoading?: boolean }) {
    return (
        <GridItem colSpan={2} textAlign="center" mt="5">
            <Button
                size="lg"
                bg="black"
                color="white"
                rounded="2xl"
                border="1px"
                borderColor="white"
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
        <Modal isOpen={props.isOpen} onClose={props.onClose} size="sm" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{props.apply}完了</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {props.content}の{props.apply}ありがとうございます。
                    当日会場にて料金をお支払いください。
                </ModalBody>

                <ModalFooter gap="2">
                    <Button
                        variant="outline"
                        as={Link}
                        href={props.href}
                        bg="black"
                        color="white"
                        rounded="2xl"
                    >
                        Entry List
                    </Button>
                    <Button
                        variant="outline"
                        as={Link}
                        href={'/'}
                        bg="black"
                        color="white"
                        rounded="2xl"
                    >
                        Home
                    </Button>
                    <Button mr={3} onClick={props.onClose} rounded="2xl">
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

function ErrorModal(props: { isOpen: boolean; onClose: () => void }) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size="sm" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>エラー</ModalHeader>
                <ModalCloseButton />
                <ModalBody>未入力の項目があります。全ての項目を入力してください。</ModalBody>

                <ModalFooter>
                    <Button onClick={props.onClose} rounded="2xl">
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

function BattleEntry() {
    const [generation, setGeneration] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [dancerName, setDancerName] = useState<string>('');
    const {
        isOpen: isOpenSuccess,
        onOpen: onOpenSuccess,
        onClose: onCloseSuccess,
    } = useDisclosure();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { isOpen: isOpenError, onOpen: onOpenError, onClose: onCloseError } = useDisclosure();

    async function handleEntry() {
        try {
            if (!generation || !genre || !name || !dancerName) {
                onOpenError();
                return;
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
            onOpenSuccess();
        } catch (error) {
            alert(error);
            setIsLoading(false);
            return;
        }
    }
    return (
        <NeoBox title="Battle Entry">
            <Grid templateColumns="repeat(2, 1fr)" gridTemplateColumns={'100px 1fr'} gap="2" mt="5">
                <EntrySelect title="代" options={generations} onChange={setGeneration} />
                <EntrySelect title="ジャンル" options={genres} onChange={setGenre} />
                <EntryInput title="名前" value={name} onChange={setName} />
                <EntryInput title="ダンサー名" value={dancerName} onChange={setDancerName} />
                <Description>
                    ※エントリー料3500円(ドリンク2杯込み)
                    <br />
                    ※エントリー上限：65枠
                    <br />
                    ※過去にWISHに在籍歴がある方はエントリー可能。
                    <br />
                    ※枠が埋まるとキャンセル待ちとなります。
                    <br />
                    ※5/25からキャンセル料が発生いたします。
                </Description>
                <SubmitButton text="Entry" onClick={handleEntry} isLoading={isLoading} />
            </Grid>
            <SuccessModal
                isOpen={isOpenSuccess}
                onClose={onCloseSuccess}
                href="/battle-entrylist"
                content="バトル"
                apply="エントリー"
            />
            <ErrorModal isOpen={isOpenError} onClose={onCloseError} />
        </NeoBox>
    );
}

function AudienceEntry() {
    const [generation, setGeneration] = useState<string>('');
    let generations = [...Array(46)].map((_, i) => String(i + 1));
    generations.push('その他');
    const [genre, setGenre] = useState<string>('');
    const [name, setName] = useState<string>('');
    const {
        isOpen: isOpenSuccess,
        onOpen: onOpenSuccess,
        onClose: onCloseSuccess,
    } = useDisclosure();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { isOpen: isOpenError, onOpen: onOpenError, onClose: onCloseError } = useDisclosure();

    async function handleEntry() {
        try {
            if (!generation || !genre || !name) {
                onOpenError();
                return;
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
            onOpenSuccess();
        } catch (error) {
            alert(error);
            setIsLoading(false);
            return;
        }
    }
    return (
        <NeoBox title="観覧申込">
            <Grid templateColumns="repeat(2, 1fr)" gridTemplateColumns={'100px 1fr'} gap="2" mt="5">
                <EntrySelect title="代" options={generations} onChange={setGeneration} />
                <EntrySelect title="ジャンル" options={limitedGenres} onChange={setGenre} />
                <EntryInput title="名前" value={name} onChange={setName} />
                <Description>
                    ※観覧料2000円(ドリンク2杯込み)
                    <br />
                    ※観覧上限：20枠
                    <br />
                    ※WISH外部の方も観覧可能です。
                    <br />
                    ※枠が埋まるとキャンセル待ちとなります。
                    <br />
                    ※5/25からキャンセル料が発生いたします。
                </Description>
                <SubmitButton text="申込" onClick={handleEntry} isLoading={isLoading} />
            </Grid>
            <SuccessModal
                isOpen={isOpenSuccess}
                onClose={onCloseSuccess}
                href="/audience-entrylist"
                content="イベント観覧"
                apply="申込"
            />
            <ErrorModal isOpen={isOpenError} onClose={onCloseError} />
        </NeoBox>
    );
}

export default function Entry() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                {/* <BattleEntry /> */}
                <AudienceEntry />
            </Box>
            <Box h={10}></Box>
            <RoundedButton href="/battle-entrylist">Battle Entry List &gt;</RoundedButton>
            <Box h={10}></Box>
            <RoundedButton href="/audience-entrylist">Audience Entry List &gt;</RoundedButton>
            <TopButton />
        </>
    );
}
