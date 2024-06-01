import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "https://via.placeholder.com/150",
    price: "$999.99",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    image: "https://via.placeholder.com/150",
    price: "$799.99",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet for work and play.",
    image: "https://via.placeholder.com/150",
    price: "$499.99",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
            Electronics Store
          </Link>
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" color="white" _hover={{ textDecoration: "none" }}>
            Products
          </Link>
          <Link as={RouterLink} to="/contact" color="white" _hover={{ textDecoration: "none" }}>
            Contact
          </Link>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8} alignItems="center">
        <Heading as="h2" size="xl">
          Welcome to the Electronics Store
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the latest and greatest in electronics. From laptops to smartphones, we have everything you need.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text mb={2}>{product.description}</Text>
            <Text fontWeight="bold">{product.price}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;