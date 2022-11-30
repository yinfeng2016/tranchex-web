import React from "react";
import {Container, Stack, VStack, Text, Image, Flex} from '@chakra-ui/react';

export const IndustryBox: React.FC<{ image: string, desc: string }> = (props) => {
    return <VStack px={18}>
            <Flex height={110} alignItems={"center"}>
                <Image src={props.image}></Image>
            </Flex>
            <Text fontSize={16} fontWeight={700} color={"#000000"} textAlign={"center"} py={10}>
                {props.desc}
            </Text>
        </VStack>
}

export default function Header() {
    return (
        <Container px={10} bg='white' py={30} maxW={"1440px"}>
            <VStack>
                <Text textTransform={"uppercase"} color={"#000000"} fontSize={30} fontWeight={700} my={{xs: 10, md: 20}}>
                We are one of the first compliance friendly DeFi pool
                </Text>
                <Stack direction={{xs: "column", md: "row"}}>
                    <IndustryBox  image={"/assets/industry-mas.png"}
                                desc={"All investors would go through KYC & KYT process to register and whitelist"} />
                    <IndustryBox  image={"/assets/industry-dbs.png"}
                                desc={"Your funds are controled by yourself in your own whitelisted wallet."} />

                </Stack>
            </VStack>
        </Container>
    );
}