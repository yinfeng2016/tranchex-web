import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    VStack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';
import {Logo} from "./LogoWhite";
import styles from '../../styles/Home.module.css'

const SocialButton = ({
                          children,
                          label,
                          href,
                      }: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'18px'} mb={2} color={"white"}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={"#4B2EF5;"}
            color={"white"}
            py={10}
            px={10}
            id={"contact"}
            className={styles.Container}
        >
            <Container as={Stack} maxW={"1440px"} fontFamily={"foot"}>
                <SimpleGrid
                    templateColumns={{sm: '1fr 1fr', md: '3fr 1fr 1fr 1fr'}}
                    spacing={20}>
                    <Stack spacing={6}>
                        <VStack alignItems={{xs: 'center', md: 'flex-start'}} spacing={8}>
                            <Box>
                                <Logo/>
                            </Box>

                            <Text fontSize={'16px'} color={"white"} maxWidth={"80%"}>
                            Tranchex is a decentralized, globally accessible credit defi protocol
                            </Text>

                            <Stack direction={'row'} spacing={4}>
                                <SocialButton label={'FaceBook'} href={'#'}>
                                    <FaFacebook size={'25'}/>
                                </SocialButton>
                                <SocialButton label={'Twitter'} href={'#'}>
                                    <FaTwitter size={'25'}/>
                                </SocialButton>
                                <SocialButton label={'Instagram'} href={'#'}>
                                    <FaInstagram size={'25'}/>
                                </SocialButton>
                            </Stack>

                            <Text fontSize={'sm'} color={"#AFB5C0"}>
                                © 2022 TrancheX
                            </Text>
                        </VStack>
                    </Stack>
                    <Stack alignItems={{xs: 'center', md: 'flex-start'}}>
                        <ListHeader>Product</ListHeader>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Locations</Link>
                        <Link href={'#'}>Countries</Link>
                        <Link href={'#'}>Blog</Link>
                    </Stack>
                    <Stack alignItems={{xs: 'center', md: 'flex-start'}}>
                        <ListHeader>Engage</ListHeader>
                        <Link href={'#'}>FAQ</Link>
                        <Link href={'#'}>Tutorials</Link>
                        <Link href={'#'}>About Us</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}