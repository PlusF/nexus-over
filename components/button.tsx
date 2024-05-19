import { Box, BoxProps, HStack, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/react';

import Link from 'next/link';

interface ButtonProps extends BoxProps {
    href: string;
    linkText: string;
    fixed?: boolean;
}

function RoundedButton(props: ButtonProps) {
    return (
        <LinkBox
            size="lg"
            color="white"
            borderColor={'white'}
            borderWidth={'1px'}
            backgroundColor={'#000000bb'}
            p="2"
            rounded="2xl"
            position={props.fixed ? 'fixed' : 'relative'}
            {...props}
        >
            {props.children}
            <Box fontSize="lg">
                <LinkOverlay as={Link} href={props.href}>
                    {props.linkText}
                </LinkOverlay>
            </Box>
        </LinkBox>
    );
}

function RoundedButtonRight(props: ButtonProps) {
    return (
        <HStack>
            <Spacer />
            <RoundedButton {...props} />
        </HStack>
    );
}

function TopButton(props: { href?: string }) {
    const href = props.href || '/';
    return <RoundedButton href={href} linkText="< Top" fixed left="50" bottom="70" />;
}

export { RoundedButton, RoundedButtonRight, TopButton };
