import { BaseBox, SimpleMotionBox } from '@/components/box';
import { Box, Center, Grid, GridItem, Heading, Img, Text } from '@chakra-ui/react';

import { BackLinkBox } from '@/components/linkbox';
import LinkButton from '@/components/linkbutton';
import { NormalLogo } from '@/components/logo';

function Showcase(props: { title: string; img: string; member: string[] }) {
    return (
        <SimpleMotionBox title={props.title} titleSize="xl">
            <Center>
                <Grid templateColumns="50px 80px 100px">
                    {props.member.map((m, i) => (
                        <GridItem key={i} colSpan={1}>
                            {m}
                        </GridItem>
                    ))}
                </Grid>
            </Center>
            <Img src={props.img} alt="showcase2" />
        </SimpleMotionBox>
    );
}

export default function Contents() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <BaseBox>
                    <Heading>Battle</Heading>
                    <SimpleMotionBox title="予選サイファー" titleSize="xl">
                        <Text fontSize="md" px="2">
                            予選は10人程度のサイファー形式で行い、45秒1ムーブでジャッジに得点をつけてもらいます。
                        </Text>
                        <LinkButton href="casts#judge">
                            <Text mr="1" color="white" fontWeight="300">
                                &rarr; Judges
                            </Text>
                        </LinkButton>
                        <Img src="battle-rule1.png" alt="battle rule" mt="2" />
                    </SimpleMotionBox>
                    <SimpleMotionBox title="本戦トーナメント" titleSize="xl">
                        <Text fontSize="md" px="2">
                            2人のジャッジの合計得点の上位13名はそのまま本戦トーナメントに進出します。
                            残り3枠は、予選14~16位がゲストバトラーをコールアウトし、勝者が出場権を獲得します。
                            本戦は準決勝まで45秒1ムーブ、決勝は45分2ムーブです。
                            優勝者には賞金とウィナーボードが贈られます。
                        </Text>
                        <LinkButton href="casts#gb">
                            <Text mr="1" color="white" fontWeight="300">
                                &rarr; Guest battlers
                            </Text>
                        </LinkButton>
                        <Img src="battle-rule2.png" alt="battle rule" mt="2" />
                    </SimpleMotionBox>
                </BaseBox>
                <BaseBox>
                    <Heading>Showcases</Heading>
                    <Showcase
                        title="WishTrain"
                        img="logo_white.png"
                        member={['5th', 'Lock', '部長', '~12th', '', '数名']}
                    />
                    <Showcase
                        title="岩永"
                        img="logo_white.png"
                        member={[
                            '38th',
                            'Lock',
                            'あきひと',
                            '38th',
                            'Pop',
                            'もっちー',
                            '39th',
                            'Hiphop',
                            'たかき',
                            '41st',
                            'Pop',
                            'たつや',
                        ]}
                    />
                    <Showcase
                        title="R:Lasic"
                        img="logo_white.png"
                        member={['40th', 'House', 'RoL', '40th', 'Pop', 'hiro']}
                    />
                    <Showcase
                        title="La poire × Tear Wave"
                        img="logo_white.png"
                        member={[
                            '43rd',
                            'Hiphop',
                            'たけと',
                            '43rd',
                            'Hiphop',
                            'ももか',
                            '43rd',
                            'Hiphop',
                            'りたん',
                            '43rd',
                            'Hiphop',
                            'オコジョ',
                        ]}
                    />
                    <Showcase
                        title="全"
                        img="logo_white.png"
                        member={['43rd', 'House', 'Eric', '43rd', 'Hiphop', 'Lisa-Lisa']}
                    />
                    <Showcase
                        title="nifTy"
                        img="logo_white.png"
                        member={['45th', 'House', 'カラシ', '45th', 'House', 'ネコバス']}
                    />
                </BaseBox>
                <Box h={50}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
