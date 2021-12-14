import { HStack, Link as ChakraLink } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const PageLinks = () => {
  return (
    <HStack spacing="2rem">
      <ChakraLink as={Link} to="/" fontSize="2xl">
        Sign In Page
      </ChakraLink>
      <ChakraLink as={Link} to="/home" fontSize="2xl">
        Home Page
      </ChakraLink>
      <ChakraLink as={Link} to="/account" fontSize="2xl">
        Account Page
      </ChakraLink>
    </HStack>
  );
};

export default PageLinks;
