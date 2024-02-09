import { Box, Center, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Link from 'next/link';

function BaseLinkBox(props: { href: string; children?: React.ReactNode; linkText: string }) {
    const href = props.href;
    return (
        <LinkBox
            as="article"
            color="black"
            background="#ffffff88"
            px="5"
            m="10"
            borderWidth="1px"
            rounded="md"
        >
            <Box my="5">{props.children}</Box>
            <Center my="2" fontSize="lg">
                <LinkOverlay as={Link} href={href}>
                    {props.linkText}
                </LinkOverlay>
            </Center>
        </LinkBox>
    );
}

export default BaseLinkBox;
