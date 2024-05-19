import { Button, ButtonProps, HStack, Spacer } from '@chakra-ui/react';

import Link from 'next/link';

interface RoundedButtonProps extends ButtonProps {
    href: string;
    fixed?: boolean;
}

function RoundedButton(props: RoundedButtonProps) {
    return (
        <Button
            as={Link}
            fontSize={'xl'}
            color="white"
            borderColor={'white'}
            borderWidth={'1px'}
            backgroundColor={'#000000bb'}
            p="6"
            rounded="2xl"
            position={props.fixed ? 'fixed' : 'relative'}
            {...props}
        >
            {props.children}
        </Button>
    );
}

function RoundedButtonRight(props: RoundedButtonProps) {
    return (
        <HStack>
            <Spacer />
            <RoundedButton {...props} />
        </HStack>
    );
}

function TopButton(props: { href?: string }) {
    const href = props.href || '/';
    return (
        <RoundedButton href={href} fixed left="50" bottom="70">
            &lt;
        </RoundedButton>
    );
}

export { RoundedButton, RoundedButtonRight, TopButton };
