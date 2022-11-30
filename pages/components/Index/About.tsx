import React from "react";
import {Container, Box, VStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';

export default function Header() {
    return (
        <Container px={10} bg='white' py={30} maxW={"1440px"} id={"about"}>
            <VStack>
                <Text color={"#000000"} fontSize={{xs: 26, md: 40}} fontWeight={700} my={10}>
                FAQs About TrancheX
                </Text>

                <Accordion allowToggle width={"100%"}>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' my={3} fontWeight={700} fontSize={14} fontFamily={"action"}>
                            What is tranchex? How does it work?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Tranchex is a decentralized, globally accessible credit protocol, with a mission to bring the world’s credit activity on-chain while expanding access to capital and fostering financial inclusion.
The protocol makes crypto loans without requiring crypto collateral—the missing piece that finally unlocks access to cryptocurrency capital for most people in the world. By incorporating the principle of trust through consensus Tranchex creates a way for borrowers to show credit based on the collective assessment of other participants, rather than based on over-collateralizing with highly volatile crypto assets. 
This provides the basis for establishing an immutable, on-chain credit scoring system, a core foundation of any scalable lending model and a primitive that is missing in a meaningful way for many growing markets globally.
                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' my={3} fontWeight={700} fontSize={14} fontFamily={"action"}>
                            Do I qualify as an individual accredited, corporate accredited or institutional investor to open an Tranchex account?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Yes, only accredited investors, corporate accredited or institutional investors are qualified to open an Tranchex account and get a DID to access the platform using their whitelisted wallet.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' my={3} fontWeight={700} fontSize={14} fontFamily={"action"}>
                            Do I need to pay fees to sign up as an investor with tranchex?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        No sign up fees for Tranchex platform.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' my={3} fontWeight={700} fontSize={14} fontFamily={"action"}>
                            Is tranchex safe? How does tranchex protect my funds and securities holdings?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Tranchex will only implement smart contracts audited by multiple smart contract auditors, and will never hold users' money. Users' money are either in their only wallet or invest to borrowers' wallet.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
        </Container>
    );
}