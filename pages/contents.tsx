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
                            予選は10人程度のサイファー形式で行い、40秒1ムーブでジャッジに得点をつけてもらいます。
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
                            本戦トーナメントの決定方法は以下の通りです。
                            <br />
                            ①2人のジャッジの合計得点の上位9名はそのまま本戦トーナメントに進出
                            <br />
                            ②10位以下のうち、43代から上位2人、現役（44・45代）から上位2人が本戦に進出
                            <br />
                            ③残った中の上位3人がゲストバトラーをコールアウトし、WILD
                            CARD枠をかけてバトルを行う
                            <br />
                            本戦はBEST8まで40秒1ムーブ、準決勝は45秒1ムーブ、決勝は45秒2ムーブです。
                            優勝者には賞金とウィナーボードが贈られます。
                        </Text>
                        <LinkButton href="casts#gb">
                            <Text mr="1" color="white" fontWeight="300">
                                &rarr; Guest battlers
                            </Text>
                        </LinkButton>
                        <Img src="battle-rule2.png" alt="battle rule" mt="2" />
                    </SimpleMotionBox>
                    <SimpleMotionBox title="Time Table" titleSize="xl">
                        <Center>
                            <LinkButton href="location#timetable">
                                <Text mr="1" color="white" fontWeight="300">
                                    &rarr; Time Table
                                </Text>
                            </LinkButton>
                        </Center>
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
                    <SimpleMotionBox title="Time Table" titleSize="xl">
                        <Center>
                            <LinkButton href="location#timetable">
                                <Text mr="1" color="white" fontWeight="300">
                                    &rarr; Time Table
                                </Text>
                            </LinkButton>
                        </Center>
                    </SimpleMotionBox>
                </BaseBox>
                <Box h={50}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
