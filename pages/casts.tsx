import { Box, Heading } from '@chakra-ui/react';

import { SimpleMotionBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { Img } from '@chakra-ui/react';

function CastBox(props: { name: string; represents: string; img?: string }) {
    const img = props.img || 'logo_white.png';
    return (
        <Box mt="5">
            <Heading fontSize="md">{props.name}</Heading>
            <Heading fontSize="sm">{props.represents}</Heading>
            <Img src={img} alt={img} />
        </Box>
    );
}

export default function Casts() {
    const comingSoon = true;
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
                        <SimpleMotionBox title="Judges">
                            <CastBox
                                name="U-ki the retro"
                                represents="Bixbite/GRAYSOURCE"
                                img={'U-ki_the_retro.jpg'}
                            />
                            <CastBox name="RiN." represents="Novel Nextus/fidi" />
                        </SimpleMotionBox>
                        <SimpleMotionBox title="DJ">
                            <CastBox name="OnokUro" represents="Mnchr-m" img={'OnokUro.jpg'} />
                        </SimpleMotionBox>
                        <SimpleMotionBox title="MC">
                            <CastBox name="Kakato" represents="44th" img={'kakato.jpg'} />
                        </SimpleMotionBox>
                        <SimpleMotionBox title="Guest Battlers">
                            <CastBox
                                name="Tait Angle"
                                represents="35th/LDC"
                                img={'Tait_Angle.jpg'}
                            />
                            <CastBox
                                name="軍犬ZERO"
                                represents="39th/Mighty Beat Bation/Free Front"
                                img={'軍犬ZERO.JPG'}
                            />
                            <CastBox name="Jr." represents="41st/Freaky Dickies" img={'Jr.jpg'} />
                        </SimpleMotionBox>
                        <Box h={50}></Box>
                    </>
                )}
            </Box>
            <BackLinkBox />
        </>
    );
}
