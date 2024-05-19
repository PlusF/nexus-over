import { Box, BoxProps, Heading } from '@chakra-ui/react';

import { RoundedButtonRight } from './button';
import { ScrollOnce } from './motion';

function BaseBox(props: BoxProps) {
    const width = props.width || '92%';
    return (
        <Box
            color="white"
            background="#000000bb"
            p="5"
            m="5"
            width={width}
            height="100%"
            maxWidth="600"
            {...props}
        >
            {props.children}
        </Box>
    );
}

interface NeoBoxProps extends BoxProps {
    noBorder?: boolean;
    smaller?: boolean;
    title: string;
}

interface NeoBoxWithButtonProps extends NeoBoxProps {
    href: string;
    linkText?: string;
}

function NeoBox(props: NeoBoxProps) {
    return (
        <ScrollOnce>
            <Box
                color="white"
                p={props.smaller ? '0' : '3'}
                m="5"
                maxW="600px"
                border={!props.noBorder ? '1px' : '0px'}
                borderColor="white"
                backgroundColor="#000000dd"
                {...props}
            >
                <Heading fontSize={props.smaller ? '2xl' : '4xl'}>{props.title}</Heading>
                {props.children}
            </Box>
        </ScrollOnce>
    );
}

function NeoBoxWithButton(props: NeoBoxWithButtonProps) {
    const linkText = props.linkText || 'Read more >';
    return (
        <ScrollOnce>
            <NeoBox title={props.title}>
                {props.children}
                <Box height={5}></Box>
                <RoundedButtonRight href={props.href} linkText={linkText} />
            </NeoBox>
        </ScrollOnce>
    );
}

export { BaseBox, NeoBox, NeoBoxWithButton };
