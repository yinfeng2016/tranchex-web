import React from "react";
import {Flex, Box, Stack, VStack, Text, Image} from '@chakra-ui/react';

const shareHolders = ["shareholder1.png", "shareholder2.png", "shareholder3.png", "shareholder4.png", "shareholder5.png", "shareholder6.png", "shareholder7.png", "shareholder8.png", "shareholder9.png"]

export default function Header() {
    return (
        <Box px={10} bg='white' py={20}>
            <VStack spacing={10}>
                <Text textTransform={"uppercase"} color={"#000000"} fontSize={{xs: 26, md: 30}} fontWeight={700}>
                Our Backers
                </Text>
                <Stack spacing={5} direction={{xs: "column", md: "row"}}>
                    {shareHolders.map((item, index) => { return <Flex bg={"#f6f6f7"} borderRadius={10} p={4} key={index} alignItems={"center"}>
                            <Image src={`/assets/${item}`}></Image>
                        </Flex>
                    })}
                </Stack>
            </VStack>
        </Box>
    );
}