import { BaseBox, SimpleMotionBox } from '@/components/box';
import { Box, Heading } from '@chakra-ui/react';

import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Img } from '@chakra-ui/react';

function CastBox(props: { name: string; represents: string; img?: string }) {
    const img = props.img || 'logo_white.png';
    return (
        <SimpleMotionBox title={props.name} titleSize="xl">
            <Heading fontSize="sm">{props.represents}</Heading>
            <Img src={img} alt={img} />
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
                            <Heading>Judges</Heading>
                            <CastBox
                                name="U-KI the retro"
                                represents="Bixbite/GRAYSOURCE"
                                img="U-ki_the_retro.jpg"
                            />
                            <CastBox name="RiN." represents="Novel Nextus/fidi" img="RiN.jpg" />
                        </BaseBox>
                        <BaseBox>
                            <Heading>DJ</Heading>
                            <CastBox
                                name="OnokUro"
                                represents="happen inn Mnchr-m"
                                img="OnokUro.jpg"
                            />
                        </BaseBox>
                        <BaseBox>
                            <Heading>MC</Heading>
                            <CastBox
                                name="Kakato"
                                represents="44th/fluorite/Buckdown"
                                img="kakato.jpg"
                            />
                        </BaseBox>
                        <BaseBox>
                            <Heading>Guest Battlers</Heading>
                            <CastBox name="Tait Angle" represents="35th/LDC" img="Tait_Angle.jpg" />
                            <CastBox
                                name="軍犬ZERO"
                                represents="39th/Mighty Beat Bation/Free Front"
                                img="軍犬ZERO.JPG"
                            />
                            <CastBox name="Jr." represents="41st/Freaky Dickies" img="Jr.jpg" />
                        </BaseBox>
                        <Box h={50}></Box>
                    </>
                )}
            </Box>
            <BackLinkBox />
        </>
    );
}
