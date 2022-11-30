import {Container, Box, HStack, VStack, Stack, Text, Image, Button} from '@chakra-ui/react';

const IntroBoxDesc: React.FC<{title: string, desc: string, link: string}> = (props) => {
    return <VStack alignItems={"left"} spacing={5}>
        <Text color={"$000000"} fontSize={30} fontWeight={700}>
            {props.title}
        </Text>
        <Text color={"rgba(51, 51, 51, 0.4);"} fontWeight={400} fontSize={20} fontFamily={"desc"} width={{ xs: "100%", md: "80%"}}>
            {props.desc}
        </Text>
        <Box>
            <Button 
                variant={"outline"} 
                fontSize={18}
                fontWeight={500}
                fontFamily={"desc"}
                borderRadius={50} display={props.link == '' ? 'none': ''}>Learn how</Button>
        </Box>
    </VStack>
}

const IntroBoxImg: React.FC<{image: string}> = (props) => {
    return <Box>
        <Image src={props.image} borderRadius={20} />
    </Box>
}

const IntroBoxLT: React.FC<{title: string, desc: string, link: string, image: string}> = (props) => {
    return <Box>
        <Stack spacing={20} direction={{xs: "column", md: "row"}}>
            <IntroBoxDesc title={props.title} desc={props.desc} link={props.link} />
            <IntroBoxImg image={props.image} />
        </Stack>
    </Box>
}

const IntroBoxTL: React.FC<{title: string, desc: string, link: string, image: string}> = (props) => {
    return <Box>
        <Stack spacing={20} direction={{xs: "column", md: "row"}}>
            <IntroBoxImg image={props.image} />
            <IntroBoxDesc title={props.title} desc={props.desc} link={props.link} />
        </Stack>
    </Box>
}

export default function Header() {
    return (
        <Container px={10} bg='white' py={10} maxW={"1440px"}>
            <VStack spacing={20}>

                <IntroBoxLT title="Web3.0 Exposure"
                          desc="By removing the need for crypto collateral and providing a means for automatically distributed yield, the protocol dramatically expands both the potential borrowers who can access crypto and the potential investors who can gain exposure. "
                          link='#'
                          image='/assets/intro1.png' />
                <IntroBoxTL title="Transparent Process"
                          desc="Unlike traditional private markets, we don’t believe in opaque fees. Know exactly what and how the tranches are scored, structured, issued and published.                         "
                          link='#'
                          image='/assets/intro2.png' />
                <IntroBoxLT title="Better Liquidity"
                          desc="Private markets are typically illiquid. Not on Tranchex. With our multi-tier tranche pools and AMM swap pools, you have the freedom to cash out anytime.                            "
                          link=''
                          image='/assets/intro3.png' />
            </VStack>
        </Container>
    );
}