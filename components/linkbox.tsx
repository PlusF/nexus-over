import { Box, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Link from 'next/link';
import { ScrollOnce } from './motion';

function BaseLinkBox(props: {
    href: string;
    linkText: string;
    width?: string;
    children?: React.ReactNode;
}) {
    const href = props.href;
    const width = props.width || undefined;
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
            <Box fontSize="lg" textAlign="right">
                <LinkOverlay as={Link} href={href}>
                    {props.linkText}
                </LinkOverlay>
            </Box>
        </LinkBox>
    );
}

function BackLinkBox(props: { href?: string }) {
    const href = props.href || '/';
    return <BaseLinkBox href={href} linkText="&larr; Back" />;
}

function HomeLinkBox(props: {
    href: string;
    linkText?: string;
    title: string;
    children: React.ReactNode;
}) {
    const linkText = props.linkText || 'Read more';
    return (
        <ScrollOnce enableTap>
            <BaseLinkBox href={props.href} linkText={'→ ' + linkText} width="90%">
                <Heading>{props.title}</Heading>
                {props.children}
            </BaseLinkBox>
        </ScrollOnce>
    );
}

export { BackLinkBox, BaseLinkBox, HomeLinkBox };
