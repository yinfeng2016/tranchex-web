import {ReactNode} from 'react';
import {Box, Flex, HStack, IconButton, Link, Spacer, Stack, useDisclosure,} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import {Logo} from "./Logo";

const Links = [
    { label: 'INVEST', href: '#invest', id: 'invest' }, 
    { label: 'ABOUT', href: '#about', id: 'about' }, 
];

const NavLink = ({children, href}: { children: ReactNode, href:  string}) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        color={"#101010"}
        fontSize={14}
        fontFamily={'action'}
        href={href}>
        {children}
    </Link>
);

export function Header() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Box px={7} boxShadow='md' bg='white' mb={5}>
            <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
                <HStack w={"100%"} alignItems={'center'}>
                    <Logo/>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{base: 'none', md: 'flex'}}>
                        {Links.map((link) => (
                            <NavLink key={link.id} href={link.href}>{link.label}</NavLink>
                        ))}
                    </HStack>
                    <Spacer/>
                </HStack>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                    aria-label={'Open Menu'}
                    display={{sm: 'none'}}
                    onClick={isOpen ? onClose : onOpen}
                />
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{sm: 'none'}}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link.id} href={link.href}>{link.label}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}