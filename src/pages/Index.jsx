import { Container, Text, VStack, Box, Image, SimpleGrid, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar.jsx";

const products = [
  {
    id: 1,
    name: "Laptop",
    image: "/images/laptop.jpg",
    description: "High performance laptop for all your needs.",
    price: "$999.99",
  },
  {
    id: 2,
    name: "Smartphone",
    image: "/images/smartphone.jpg",
    description: "Latest model smartphone with cutting-edge features.",
    price: "$799.99",
  },
  {
    id: 3,
    name: "Tablet",
    image: "/images/tablet.jpg",
    description: "Portable and powerful tablet for work and play.",
    price: "$499.99",
  },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl" textAlign="center">
            Welcome to ElectroShop
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your one-stop shop for the latest electronics
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
            {products.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={6}>
                  <Box d="flex" alignItems="baseline">
                    <Heading as="h3" size="md" fontWeight="semibold">
                      {product.name}
                    </Heading>
                  </Box>
                  <Text mt={2}>{product.description}</Text>
                  <Text mt={2} fontWeight="bold">
                    {product.price}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
};

export default Index;