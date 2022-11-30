import React from "react";
import {Box, HStack, VStack, Text, Image} from '@chakra-ui/react';

export default function Header() {
    return (
        <Box height={{xs: 350, md: 500}} width={"100%"}>
            <Box height={287} width={"100%"} position={"absolute"} bgImage={"url(/assets/bg-meet.png)"}>
                &nbsp;
            </Box>
            <VStack position={"absolute"} alignItems={"center"} width={"100%"}>
                <Text textTransform={"uppercase"} color={"#ffffff"} fontSize={30} fontWeight={700} my={35}>meet tranchex</Text>
                <Image src={"/assets/meet-video.png"} />
            </VStack>
        </Box>
    );
}