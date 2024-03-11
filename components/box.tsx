import { Heading, LinkBox } from '@chakra-ui/react';

import { ScrollOnce } from './motion';

function BaseBox(props: { width?: string; children?: React.ReactNode }) {
    const width = props.width || '92%';
    return (
        <LinkBox
            as="article"
            color="black"
            background="#ffffffbb"
            p="5"
            m="5"
            width={width}
            height="100%"
            maxWidth="600"
        >
            {props.children}
        </LinkBox>
    );
}

function SimpleColoredMotionBox(props: { title: string; children?: React.ReactNode }) {
    return (
        <BaseBox>
            <Heading>{props.title}</Heading>
            {props.children}
        </BaseBox>
    );
}

function SimpleMotionBox(props: {
    title?: string;
    titleSize?: string;
    children?: React.ReactNode;
}) {
    return (
        <ScrollOnce>
            <BaseBox>
                {props.title && <Heading fontSize={props.titleSize}>{props.title}</Heading>}
                {props.children}
            </BaseBox>
        </ScrollOnce>
    );
}

export { BaseBox, SimpleMotionBox };
