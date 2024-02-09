import { Heading, LinkBox } from '@chakra-ui/react';
import { ScrollOnce } from './motion';

function BaseBox(props: { width?: string; children?: React.ReactNode }) {
    const width = props.width || undefined;
    return (
        <LinkBox
            as="article"
            color="black"
            background="#ffffffbb"
            p="5"
            m="10"
            width={width}
            height="100%"
            maxWidth="600"
        >
            {props.children}
        </LinkBox>
    );
}

function SimpleBox(props: { title: string; children: React.ReactNode }) {
    return (
        <ScrollOnce>
            <BaseBox width="80%">
                <Heading>{props.title}</Heading>
                {props.children}
            </BaseBox>
        </ScrollOnce>
    );
}

export { BaseBox, SimpleBox };
