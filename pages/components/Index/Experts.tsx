import {Container, Box, Stack, VStack, Text, Image, Button} from '@chakra-ui/react';

export default function Header() {
    return (
        <Container px={10} bg='white' py={30} maxW={"1440px"}>
            <Stack direction={{xs: "column", md: "row"}}>
                <Image src={"/assets/Experts.png"} />

                <VStack alignItems={"left"} pl={{xs: 0, md: 20}} spacing={8}>
                    <Text color={"#000000"} fontWeight={700} fontSize={30}>
                    Experienced investment experts do your research
                    </Text>
                    <Text color={"rgba(51, 51, 51, 0.4)"} fontSize={20} fontWeight={400} fontFamily={"desc"}>
                    With a rigorous screening process, only a fraction of all opportunities are approved and structured to tranches by our experienced listing committee.
                    </Text>
                    <Box>
                        <Button fontFamily={"action"} fontSize={16} fontWeight={600} size='sm'>learn more</Button>
                    </Box>
                </VStack>
            </Stack>
        </Container>
    );
}