import { NeoBox } from '@/components/box';
import { RoundedButtonRight, TopButton } from '@/components/button';
import { AspectRatio, Box, Center, Heading, Text, VStack } from '@chakra-ui/react';

import { NormalLogo } from '@/components/logo';
import { TimeTableBox } from '@/components/timetablebox';

export default function Location() {
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
            <NeoBox title="Location">
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
            </NeoBox>
            <NeoBox title="Time Table">
                <Heading id="timetable" fontSize="xl" m="2">
                    <Center>2024/6/1(Sat.)</Center>
                </Heading>
                <Center>
                    <VStack>
                        <TimeTableBox time="13:00" content="Open&受付開始" />
                        <TimeTableBox time="13:45" content="Start" />
                        <TimeTableBox time="13:55" content="Showcase①" />
                        <TimeTableBox time="14:20" content="Battle予選" />
                        <TimeTableBox time="16:00" content="Showcase②" />
                        <TimeTableBox time="16:15" content="Wild Card Battle" />
                        <TimeTableBox time="16:30" content="Best16" />
                        <TimeTableBox time="17:00" content="Showcase③" />
                        <TimeTableBox time="17:15" content="Best8" />
                        <TimeTableBox time="17:40" content="Judge Move" />
                        <TimeTableBox time="18:00" content="BEST4~" />
                        <TimeTableBox time="18:50" content="DJ Time" />
                        <TimeTableBox time="19:30" content="Close" />
                    </VStack>
                </Center>
                <RoundedButtonRight href="contents" linkText="Contents >" />
            </NeoBox>
            <TopButton />
        </>
    );
}
