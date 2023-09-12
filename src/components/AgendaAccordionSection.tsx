import React, { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
// import { BsChevronDown } from "react-icons/bs";

function AgendaAccordionSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const titleColor = useColorModeValue("gray.800", "gray.200");
  const titleBackgroundColor = useColorModeValue("gray.50", "gray.800");
  const titleHoverColor = useColorModeValue("gray.300", "gray.600");
  const descriptionColor = useColorModeValue("gray.600", "gray.400");
  const descriptionBackgroundColor = useColorModeValue("gray.100", "#202736");

  return (
    <AccordionItem borderRadius={10}>
      <AccordionButton
        borderRadius={10}
        display="flex"
        flexDir={{ base: "column", md: "column", lg: "row" }}
        alignItems="center"
        width={"100%"}
        padding={{ base: "2rem 1rem", md: "2rem 1rem", lg: "1.5rem 1rem" }}
        backgroundColor={titleBackgroundColor}
        _hover={{ bg: titleHoverColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text fontSize="2.2rem" color={titleColor} flex="1">
          {title}
        </Text>
        <ChevronDownIcon
          fontSize="24px"
          color={"gray.400"}
          style={{ transform: isOpen ? "rotate(180deg)" : "" }}
          transition="transform 0.3s ease-in-out"
          marginTop={{ base: "2rem" }}
        />
      </AccordionButton>
      <AccordionPanel
        padding="2rem 2rem"
        backgroundColor={descriptionBackgroundColor}
        justifyContent="center"
        alignItems="center"
      >
        <Text color={descriptionColor} textAlign="left" fontSize="2rem">
          {description}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default AgendaAccordionSection;
