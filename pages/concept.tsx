import { Box, Center, HStack, Heading, Img, Spacer, Text, VStack } from '@chakra-ui/react';

import { NeoBox } from '@/components/box';
import { TopButton } from '@/components/button';
import InstagramButton from '@/components/instagram';
import { NormalLogo } from '@/components/logo';

export default function Concept() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <NeoBox title="Concept">
                    <Center textAlign="center">
                        <VStack>
                            <Heading fontSize="lg" mt="2" textDecoration="underline">
                                ストリート × WISH
                            </Heading>
                            <Text fontSize="sm" mt="2">
                                12公を筆頭に数多くのイベントが存在する T.U.D.C WISH
                            </Text>
                            <Text fontSize="sm" mt="2">
                                45年という長い歴史を積み上げてきたWISHだからこそ体現し感じることができるNexusつまり
                                <Text as="span" fontWeight="900">
                                    「つながり」
                                </Text>
                            </Text>
                            <Text fontSize="sm" mt="2">
                                身内イベントと位置付けながらも、
                                <Text as="span" fontWeight="900">
                                    ストリートダンスシーンの 最前線
                                </Text>
                                を走るキャスト陣営。
                                45年の歴史の中で、確かな実績と名を残した歴代のWISHer達。
                            </Text>
                            <Text fontSize="sm" mt="2">
                                本イベントが、WISHの積み上げてきたものを体感できるとともに、
                                <Text as="span" fontWeight="900">
                                    サークルを超えた一歩
                                </Text>
                                を踏み出すきっかけとなることを願っています。
                            </Text>
                        </VStack>
                    </Center>
                </NeoBox>
                <NeoBox title="Message">
                    <Img src="kakato.jpg" alt="kakato" />
                    <NeoBox title="Kakato" noBorder smaller>
                        <Box fontSize="sm">
                            <Text>「WISHを変えられる」</Text>
                            <Text>
                                ありがたいことにそのような言葉をかけてもらえることがありましたが、行動できずにいました。
                                そんな自分の転機になった12公から多くをいただいたように、何かを通してお返しをしたいと思うようになりました。
                            </Text>
                            <Text>
                                その答えをカタチにしたのが、本イベントです。
                                経験、プロップス、熱量、遼太郎をはじめとする最高の運営陣と共に込められるだけ込めました。
                                自分にとってもWISHにとっても、これは大きな挑戦であり可能性です。
                            </Text>
                            <Text>
                                今までにない新しい身内イベントNExus Over、記念すべきvol.
                                1は大都会六本木にて開催。現役OBG問わずお待ちしております。
                            </Text>
                            <HStack>
                                <Spacer />
                                <InstagramButton url="https://www.instagram.com/k_t_w_l/" />
                            </HStack>
                        </Box>
                    </NeoBox>
                    <Box h={50}></Box>
                    <Img src="rol.jpg" alt="rol" />
                    <NeoBox title="RoL" noBorder smaller>
                        <Box fontSize="sm">
                            <Text>
                                現役時代はほぼサークルの中で生きてきました。
                                食わず嫌いというか、出不精というか、そんなぼんやりとした理由だった気がします。
                                引退して外のつながりも作り始めて、それもまた刺激的で楽しいと気づきました。
                            </Text>
                            <Text>
                                WISHの空気感って温かくて居心地がよくて、みんなも人間が好きで居続けているのかなと思っています。
                                ダンスはどこでも誰とでもできますが、WISHを選んでいるのはそれぞれ理由があるはずです。
                            </Text>
                            <Text>
                                その理由を大切にしながら、さらに良い刺激を得られるように、このイベントを開催します。
                                このイベントが、みんなの熱量を増やす燃料になってほしいと思っています。
                            </Text>
                        </Box>
                        <HStack>
                            <Spacer />
                            <InstagramButton url="https://www.instagram.com/rol_rlasic/" />
                        </HStack>
                    </NeoBox>
                </NeoBox>
            </Box>
            <TopButton />
        </>
    );
}
