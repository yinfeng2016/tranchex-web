import {Container, Box, Stack, HStack, VStack, Text, Image, Spacer, Button, SimpleGrid, IconButton} from '@chakra-ui/react';
import {ArrowForwardIcon, ArrowBackIcon} from '@chakra-ui/icons';

const InvestBox: React.FC<{ id: string, image: string, title: string, target: string, irr:string }> = (props) => {
    return <Box position={"relative"} ml={{xs: 0, md: 5}} id={props.id}>
        <Image src={`/assets/${props.image}`} />
        <Box borderRadius={13} 
            position={"absolute"} 
            zIndex={20} 
            bg={"white"} 
            width={"100%"} 
            bottom={0} 
            boxShadow='lg'
            py={3}>
            <VStack>
                <Text textAlign={"left"} 
                    width={"100%"} 
                    pl={5} 
                    color={"#000000"} 
                    letterSpacing={"0.01em"} 
                    fontSize={18} 
                    fontWeight={600}>{props.title}</Text>
                <Text textAlign={"left"} 
                    width={"100%"} 
                    pl={5} 
                    pb={4}
                    color={"#000"}
                    opacity={0.7}
                    letterSpacing={"0.01em"}
                    fontSize={10}
                    fontWeight={600}
                    mt={"0 !important"}>{props.target} &nbsp;&nbsp;&nbsp;&nbsp; {props.irr}</Text>
                <HStack width={"100%"} pr={5}>
                    <Spacer></Spacer>
                    <Button variant='outline' size='sm'>Digital Asset</Button>
                    <Button size='sm'>FUND</Button>
                </HStack>
            </VStack>
        </Box>
    </Box>
}

export default function Header() {

    const scrollToLeft = () => {
        var element = document.getElementById("scrollBox");
        // element?.scrollIntoView({behavior: 'smooth'});
        // console.log(element?.scrollWidth, element!.scrollLeft)
        if (element) {
            element!.scrollLeft -= 280;
        }
    }

    const scrollToRight = () => {
        var element = document.getElementById("scrollBox");
        // element?.scrollIntoView({behavior: 'smooth'});
        if (element) {
            element!.scrollLeft += 280;
        }
    }

    return (
        <Box bg='white' pb={30} position={"relative"} alignItems={"left"} w={"100%"} id={"invest"}>
            <SimpleGrid columns={1} w={"100%"} height={370} display={{xs: 'none', md: 'grid'}}>
                <Box>
                    &nbsp;
                </Box>
                <Box bg={"#E7E7E7"} opacity={0.2}>
                    &nbsp;
                </Box>
            </SimpleGrid>
            <Container maxW={"1440px"}>
                <Box display={{xs: "", md: "-webkit-box"}} 
                    position={{xs: "relative", md: "absolute"}} 
                    top={0} 
                    px={{xs: 10, md: 10}}>
                    <VStack pt={10} 
                        alignItems={"left"}
                        pr={{xs:0, md: 5}}>
                        <Text color={"#101010"} fontSize={30} fontWeight={700}>Invest in</Text>
                        <Text color={"mainColor"} fontSize={40} fontWeight={700}>Emerging Market</Text>
                        <HStack py={10} display={{xs: 'none', md: 'initial'}}>
                            <IconButton
                                variant='outline'
                                colorScheme='gray'
                                color='gray'
                                aria-label='Call Sage'
                                fontSize='20px'
                                borderRadius={20}
                                onClick={scrollToLeft}
                                icon={<ArrowBackIcon />}
                                />
                            <IconButton
                                variant='outline'
                                colorScheme='gray'
                                color='gray'
                                aria-label='Call Sage'
                                fontSize='20px'
                                borderRadius={20}
                                onClick={scrollToRight}
                                icon={<ArrowForwardIcon />}
                                />
                        </HStack>
                        <Text color={"mainColor"} fontSize={20} fontWeight={600}>View All Offerings &gt;&gt;</Text>
                    </VStack>
                    <Stack
                        id='scrollBox'
                        scrollBehavior={"smooth"}
                        pb={5} 
                        pt={{xs: 10, md: 0}} 
                        width={{xs: '100%', md: "calc(100% - 275px)"}}
                        display={{xs: 'flex', md: 'inherit'}}
                        overflowX={"auto"} 
                        spacing={4} 
                        direction={{xs: "column", md: "row"}}>
                        <InvestBox 
                            id={"ib0"}
                            image={"invest1.png"} 
                            title={"Aura Venture Fund II"} 
                            target={"Target return"} 
                            irr={"30% net IRR"} />
                        <InvestBox 
                            id={"ib1"}
                            image={"invest2.png"} 
                            title={"Aura Venture Fund II"} 
                            target={"Target return"} 
                            irr={"30% net IRR"} />
                        <InvestBox 
                            id={"ib2"}
                            image={"invest3.png"} 
                            title={"Aura Venture Fund II"} 
                            target={"Target return"} 
                            irr={"30% net IRR"} />
                        <InvestBox 
                            id={"ib3"}
                            image={"invest1.png"} 
                            title={"Aura Venture Fund II"} 
                            target={"Target return"} 
                            irr={"30% net IRR"} />
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}