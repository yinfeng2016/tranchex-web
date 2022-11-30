import React from "react";
import {Container, Stack, VStack, Text, Image} from '@chakra-ui/react';

export const GrowthBox: React.FC<{ image: string, title: string, desc: string }> = (props) => {
    return <VStack px={15}>
            <Image src={props.image}></Image>
            <Text textTransform={"uppercase"} fontSize={16} fontWeight={700} color={"#000000"}>
                {props.title}
            </Text>
            <Text fontSize={16} fontWeight={400} color={"rgba(51, 51, 51, 0.4)"} fontFamily={"desc"} textAlign={"center"}>
                {props.desc}
            </Text>
        </VStack>
}

export default function Header() {
    return (
        <Container px={10} bg='white' py={20} maxW={"1440px"}>
            <Stack direction={{xs: "column", md: "row"}}>
                <GrowthBox  image={"/assets/icon-growth.png"} 
                            title={"2X GrowtH"} 
                            desc={"Private equities have grown twice as fast as public equities since 2002*"} />
                <GrowthBox  image={"/assets/icon-asset.png"} 
                            title={"Returns"} 
                            desc={"The net asset value of private equity alone grew more than 7X since 2002*"} />
                <GrowthBox  image={"/assets/icon-diversification.png"} 
                            title={"Diversification"} 
                            desc={"Private markets offer enhanced diversification and potential returns"} />
            </Stack>
        </Container>
    );
}