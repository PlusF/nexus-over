import { BaseBox, SimpleMotionBox } from '@/components/box';
import { Box, HStack, Heading, Spacer } from '@chakra-ui/react';

import InstagramButton from '@/components/instagram';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Img } from '@chakra-ui/react';

function CastBox(props: { name: string; represents: string; img?: string; instagram: string }) {
    const img = props.img || 'logo_white.png';
    return (
        <SimpleMotionBox title={props.name} titleSize="xl">
            <Heading fontSize="sm">{props.represents}</Heading>
            <Img src={img} alt={img} />
            <HStack mt="2">
                <Spacer />
                <InstagramButton url={props.instagram} />
            </HStack>
        </SimpleMotionBox>
    );
}

export default function Casts() {
    const comingSoon = false;
    return (
        <>
            <Box>
                <NormalLogo />
                <Heading h={100}></Heading>
                {comingSoon && (
                    <>
                        <SimpleMotionBox title="Casts">Coming soon...</SimpleMotionBox>
                        <Box h={500}></Box>
                    </>
                )}
                {!comingSoon && (
                    <>
                        <BaseBox>
                            <Heading id="judge">Judges</Heading>
                            <CastBox
                                name="U-KI the retro"
                                represents="Bixbite/GRAYSOURCE"
                                img="U-ki_the_retro.jpg"
                                instagram="https://www.instagram.com/the_retro__/"
                            />
                            <CastBox
                                name="RiN."
                                represents="Novel Nextus/fidi"
                                img="RiN.jpg"
                                instagram="https://www.instagram.com/rin_tsubo163/"
                            />
                        </BaseBox>
                        <BaseBox>
                            <Heading>DJ</Heading>
                            <CastBox
                                name="OnokUro"
                                represents="happen inn Mnchr-m"
                                img="OnokUro.jpg"
                                instagram="https://www.instagram.com/show.o_nokuro/"
                            />
                        </BaseBox>
                        <BaseBox>
                            <Heading>MC</Heading>
                            <CastBox
                                name="Kakato"
                                represents="44th/fluorite/Buckdown"
                                img="kakato.jpg"
                                instagram="https://www.instagram.com/k_t_w_l/"
                            />
                        </BaseBox>
                        <BaseBox>
                            <Heading id="gb">Guest Battlers</Heading>
                            <CastBox
                                name="Tait Angle"
                                represents="35th/LDC"
                                img="Tait_Angle.jpg"
                                instagram="https://www.instagram.com/aka_ango/"
                            />
                            <CastBox
                                name="軍犬ZERO"
                                represents="39th/Free Front/Mighty Beat Bation"
                                img="軍犬ZERO.JPG"
                                instagram="https://www.instagram.com/bboy_emma_ffc_mbb/"
                            />
                            <CastBox
                                name="Jr."
                                represents="41st/Freaky Dickies"
                                img="Jr.jpg"
                                instagram="https://www.instagram.com/mas_koma/"
                            />
                        </BaseBox>
                        <Box h={50}></Box>
                    </>
                )}
            </Box>
            <BackLinkBox />
        </>
    );
}
