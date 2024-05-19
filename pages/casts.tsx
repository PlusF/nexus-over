import { HStack, Heading, Spacer } from '@chakra-ui/react';

import { NeoBox } from '@/components/box';
import { TopButton } from '@/components/button';
import InstagramButton from '@/components/instagram';
import { NormalLogo } from '@/components/logo';
import { Img } from '@chakra-ui/react';

function CastBox(props: { name: string; represents: string; img?: string; instagram: string }) {
    const img = props.img || 'logo_white.png';
    return (
        <NeoBox title={props.name} noBorder smaller padding="0">
            <HStack m="2">
                <Heading fontSize="sm">{props.represents}</Heading>
                <Spacer />
                <InstagramButton url={props.instagram} />
            </HStack>
            <Img src={img} alt={img} />
        </NeoBox>
    );
}

export default function Casts() {
    return (
        <>
            <NormalLogo />
            <Heading h={100}></Heading>
            <NeoBox title="Judges" id="judge">
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
            </NeoBox>
            <NeoBox title="DJ">
                <CastBox
                    name="OnokUro"
                    represents="happen inn Mnchr-m"
                    img="OnokUro.jpg"
                    instagram="https://www.instagram.com/show.o_nokuro/"
                />
            </NeoBox>
            <NeoBox title="MC">
                <CastBox
                    name="Kakato"
                    represents="44th/fluorite/Buckdown"
                    img="kakato.jpg"
                    instagram="https://www.instagram.com/k_t_w_l/"
                />
            </NeoBox>
            <NeoBox title="Guest Battlers" id="gb">
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
            </NeoBox>
            <TopButton />
        </>
    );
}
