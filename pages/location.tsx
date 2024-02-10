import { SimpleBox } from '@/components/box';
import { BackLinkBox } from '@/components/linkbox';
import { NormalLogo } from '@/components/logo';
import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react';

export default function Location() {
    return (
        <>
            <Box>
                <NormalLogo />
                <Box h={100}></Box>
                <SimpleBox title="Location">
                    <Heading fontSize="lg" mt="2">
                        六本木CUBE
                    </Heading>
                    <Heading fontSize="md" mt="2">
                        住所
                    </Heading>
                    <Text fontSize="sm">〒106-0041</Text>
                    <Text fontSize="sm">東京都港区麻布台3-4-11 中央飯倉ビルB1</Text>
                    <Heading fontSize="md" mt="2">
                        アクセス
                    </Heading>
                    <Text fontSize="sm">六本木駅から徒歩10分</Text>
                    <Text fontSize="sm">六本木一丁目駅から徒歩10分</Text>
                    <Text fontSize="sm">神谷町駅から徒歩13分</Text>
                    <Text fontSize="sm">麻布十番駅から徒歩15分</Text>
                    <AspectRatio ratio={16 / 9} mt="2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6685306753207!2d139.73802939880613!3d35.66053747795626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b9971fe6bad%3A0x450f201f19acce43!2z5YWt5pys5pyoQ1VCRQ!5e0!3m2!1sja!2sjp!4v1707538052199!5m2!1sja!2sjp"
                            width="600"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </AspectRatio>
                </SimpleBox>
                <SimpleBox title="Time Table">
                    <Heading fontSize="md" mt="2">
                        2024/6/1(Sat.)
                    </Heading>
                    Coming soon...
                </SimpleBox>
                <Box h={100}></Box>
            </Box>
            <BackLinkBox />
        </>
    );
}
