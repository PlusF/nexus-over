import { Button, HStack, Spacer } from '@chakra-ui/react';

import Link from 'next/link';
import React from 'react';

function LinkButton(props: { href: string; children: React.ReactNode }) {
    return (
        <HStack>
            <Spacer />
            <Button as={Link} href={props.href} rounded="none" backgroundColor="black">
                {props.children}
            </Button>
        </HStack>
    );
}

export default LinkButton;
