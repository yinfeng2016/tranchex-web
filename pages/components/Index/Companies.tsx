import {Box, Stack, VStack, Text, Image} from '@chakra-ui/react';

const companies = [ "/assets/company-netflix.png", 
                    "/assets/company-netflix.png", 
                    "/assets/company-netflix.png", 
                    "/assets/company-netflix.png", 
                    "/assets/company-netflix.png"]

export default function Header() {
    return (
        <Box px={10} bg='#F7F7F8;' textTransform={"uppercase"} py={30}>
            <VStack>
                <Text py={5} color={"#000000"} fontWeight={700} fontSize={{xs: 24, md: 30}}>
                "We are the bridge that brings trillions of assets and real yields from the real world to DeFi"
                </Text>
                <Stack py={10} direction={{xs: "column", md: "row"}} spacing={{xs: 10, md: 0}}>
                    {companies.map((item, index) => 
                        <Image src={item} height={"50px"} key={index}></Image>
                    )}
                </Stack>
            </VStack>
        </Box>
    );
}