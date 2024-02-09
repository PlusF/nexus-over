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
                        NExus Overとは
                    </Heading>
                    <Box fontSize="sm" ml="5">
                        <Text>
                            WISHには多くの身内イベントがあります。五月祭、2イベ、夏合宿、駒場祭、12公、卒公・・・
                            。そのどれにも当てはまらない全く新しいイベントが今年始まります。
                        </Text>
                        <Text>
                            「Nexus」とは「つながり」です。WISHは45年という長い歴史を持つサークルで、かつ上下のつながりが強いという特色を持っています。
                            代を超えたつながりはこのイベントのポイントとなります。
                        </Text>
                        <Text>
                            もう一つの鍵は、ストリートダンスシーンとのつながりです。
                            キャストを見ていただければわかる通り、身内イベントとは思えない豪華さ、本気度です。
                            敷居の低い身内イベントで、ストリートダンスシーンの空気感を存分に楽しんでいただければ幸いです。
                        </Text>
                        <Text>
                            そしてこのイベントが、サークルという枠組みを超えた一歩を踏み出すきっかけになることを願っています。
                        </Text>
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
                        <Text>
                            現役時代はほぼサークルの中で生きてきました。
                            理由は自分でもわかりませんが、食わず嫌いというか、出不精というか、そんなぼんやりとしたものだった気がします。
                            引退して外のつながりも作り始めて、それもまた刺激的で楽しいと気づきました。
                        </Text>
                        <Text>
                            WISHの空気感って温かくて居心地がよくて、みんなも人間が好きで居続けているのかなと思っています。
                            ダンスはどこでも誰とでもできますが、WISHを選んでいるのはそれぞれ理由があるはずです。
                        </Text>
                        <Text>
                            その理由を大切にしながら、さらに良い刺激を得られるように、このイベントを開催します。
                        </Text>
                        <Text>
                            このイベントが、みんなの熱量を増やす燃料になってほしいと思っています。
                        </Text>
                    </Box>
                </SimpleBox>
                <Box h={100}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
