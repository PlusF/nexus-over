import { SimpleBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

export default function Concept() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <SimpleBox title="Concept">
                    <Heading fontSize="md" mt="2">
                        サブタイトル
                    </Heading>
                    <Box fontSize="sm" ml="5">
                        <Text>WISHは</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </Box>
                </SimpleBox>
                <SimpleBox title="Message">
                    <Image src="kakato.jpg" alt="kakato" />
                    <Heading fontSize="md" mt="2">
                        Kakato
                    </Heading>
                    <Box fontSize="sm" ml="5">
                        <Text>自分のプロップスと</Text>
                        <Text>WISHのカラーとの調和</Text>
                        <Text>試行錯誤した答え</Text>
                        <Text>たった一つのイベント</Text>
                        <Text>たった5時間のイベント</Text>
                        <Text>そこに全てを込めました</Text>
                        <Text>第一回は六本木にて開催</Text>
                        <Text>お待ちしております</Text>
                    </Box>
                </SimpleBox>
                <SimpleBox title="Message">
                    <Image src="rol.jpg" alt="rol" />
                    <Heading fontSize="md" mt="2">
                        ROL
                    </Heading>
                    <Box fontSize="sm" ml="5">
                        <Text>a</Text>
                        <Text>a</Text>
                        <Text>a</Text>
                        <Text>a</Text>
                        <Text>a</Text>
                        <Text>a</Text>
                        <Text>a</Text>
                        <Text>a</Text>
                    </Box>
                </SimpleBox>
                <Box h={200}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
