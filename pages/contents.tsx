import { RoundedButtonRight, TopButton } from '@/components/button';
import { Box, Center, Grid, GridItem, Img, Text } from '@chakra-ui/react';

import { NeoBox } from '@/components/box';
import { NormalLogo } from '@/components/logo';

function Showcase(props: { title: string; img: string; member: string[] }) {
    return (
        <NeoBox title={props.title} noBorder smaller>
            <Center>
                <Grid templateColumns="66px 70px 80px">
                    {props.member.map((m, i) => (
                        <GridItem key={i} colSpan={1}>
                            {m}
                        </GridItem>
                    ))}
                </Grid>
            </Center>
            <Img src={props.img} alt="showcase2" mt="5px" />
        </NeoBox>
    );
}

export default function Contents() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <NeoBox title="Battle">
                    <NeoBox title="予選サイファー" noBorder smaller>
                        <Text fontSize="md" px="2">
                            予選は10人程度のサイファー形式で行い、40秒1ムーブでジャッジに得点をつけてもらいます。
                        </Text>
                        <RoundedButtonRight href="casts#judge" mt="2">
                            Judges &gt;
                        </RoundedButtonRight>
                        <Img src="battle-rule1.png" alt="battle rule" mt="2" />
                    </NeoBox>
                    <NeoBox title="本戦トーナメント" noBorder smaller>
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
                        <RoundedButtonRight href="casts#gb" mt="2">
                            Guest battlers &gt;
                        </RoundedButtonRight>
                        <Img src="battle-rule2.png" alt="battle rule" mt="2" />
                    </NeoBox>
                    <RoundedButtonRight href="location#timetable">
                        Time Table &gt;
                    </RoundedButtonRight>
                </NeoBox>
                <NeoBox title="Showcases">
                    <Showcase
                        title="WishTrain"
                        img="WishTrain.jpg"
                        member={[
                            'Special',
                            'Guest',
                            '上島雪夫',
                            '5th',
                            'Lock',
                            '部長',
                            '3rd~15th',
                            '',
                            '12名',
                        ]}
                    />
                    <Showcase
                        title="岩永"
                        img="岩永.jpg"
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
                        img="RLasic.jpg"
                        member={['40th', 'House', 'RoL', '40th', 'Pop', 'hiro']}
                    />
                    <Showcase
                        title="La poire × Tear Wave"
                        img="LaPoirexTearWave.jpg"
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
                        img="全.jpg"
                        member={['43rd', 'House', 'Eric', '43rd', 'Hiphop', 'Lisa-Lisa']}
                    />
                    <Showcase
                        title="nifTy"
                        img="nifTy.jpg"
                        member={['45th', 'House', 'カラシ', '45th', 'House', 'ネコバス']}
                    />
                    <RoundedButtonRight href="location#timetable">
                        Time Table &gt;
                    </RoundedButtonRight>
                </NeoBox>
            </Box>
            <TopButton />
        </>
    );
}
