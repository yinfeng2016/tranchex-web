import {Container, Box, Stack, VStack, Text, Button, Image} from '@chakra-ui/react';

export default function Header() {
    return (
        <Container px={10} bg='white' mb={10} maxW={"1440px"}>
            <Stack direction={{xs: "column", md: "row"}}>
                <VStack mt={10}>
                    <Text color={"#101010"} 
                        lineHeight={{xs: "40px", md: "76px"}} 
                        fontSize={{xs: 36, md: 60}}
                        fontWeight={"600"} 
                        letterSpacing={"0.01em"} 
                        px={{xs: 0, md: 10}}>
                    Your entry to real-world lending through a DeFi Pool
                    </Text>

                    <VStack bgImage={"url('/assets/banner-bg.png')"} bgRepeat="no-repeat" alignItems={"left"}>
                        <Text py={6} px={{xs: 0, md: 10}} pr={{xs: 0, md: 40}} color={"#6F6F6F"} fontWeight={500} fontSize={16}>
                        Stop worrying about crypto money games. Start lending your USDC to real businesses worldwide.
                        </Text>

                        <Box pl={{xs: 0, md: 10}}>
                            <Button variant='solid' fontSize={16} fontFamily={"action"}>
                                Explore Deals
                            </Button>
                        </Box>
                    </VStack>
                </VStack>

                <Box display={{xs: 'none', md: 'initial'}}>
                    <Image src={"/assets/telephone.png"}></Image>
                </Box>
            </Stack>
        </Container>
    );
}