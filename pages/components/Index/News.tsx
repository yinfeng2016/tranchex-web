import React from "react";
import {Container, Box, Button, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';

export default function Header() {
    return (
        <Container px={10} bg='white' py={30} maxW={"1440px"} id={"learn"}>
            <VStack spacing={10}>
                <Text color={"#000000"} fontSize={{xs: 26, md: 40}} fontWeight={700} my={10}>
                    Tranchex In The News
                </Text>

                <Accordion allowToggle width={"100%"}>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' my={3} fontWeight={700} fontSize={14} fontFamily={"action"}>
                            What is tranchex?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' my={3} fontWeight={700} fontSize={14} fontFamily={"action"}>
                            How to Buy it?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' my={3} fontWeight={700} fontSize={14} fontFamily={"action"}>
                            How to Bid an item?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Box>
                    <Button fontFamily={"action"} fontSize={16} fontWeight={600} size='sm'>learn more</Button>
                </Box>
            </VStack>
        </Container>
    );
}