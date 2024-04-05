import { HStack, Text } from '@chakra-ui/react';

function TimeTableBox(props: { time: string; content: string }) {
    return (
        <HStack mt="2">
            <Text width="50px">{props.time}</Text>
            <Text width="150px">{props.content}</Text>
        </HStack>
    );
}

export { TimeTableBox };
