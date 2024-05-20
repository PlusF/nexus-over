import { RoundedButtonRight, TopButton } from '@/components/button';
import { Box, Center, Heading, VStack } from '@chakra-ui/react';

import { NeoBox } from '@/components/box';
import { NormalLogo } from '@/components/logo';
import { TimeTableBox } from '@/components/timetablebox';

export default function Timetable() {
    return (
        <>
            <NormalLogo />
            <Box h={100}></Box>
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
            </NeoBox>
            <Box h={30}></Box>
            <RoundedButtonRight href="contents">Contents &gt;</RoundedButtonRight>
            <TopButton />
        </>
    );
}
