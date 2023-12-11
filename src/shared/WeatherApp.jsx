import {
  Card,
  CardBody,
  Text,
  Button,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Flex,
  CardFooter,
  CardHeader,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function WeatherApp() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://i.imgur.com/gVG4sY5.png"
          alt="Screenshot of WeatherApp"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">WeatherApp</Heading>
          <Text>
            This weather app allows you to create an account and login to view
            the weather in your area. Created using React, Node.js, Express, and
            PostgreSQL.
          </Text>
        </Stack>
      </CardBody>
      <Flex
        direction="column"
        justify="flex-end"
        align="center"
        mt="auto"
        p="3"
      >
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              as={Link}
              href="https://weather-app-mfq9.onrender.com"
              variant="solid"
              colorScheme="blue"
              leftIcon={<FaExternalLinkAlt />}
            >
              View App Now
            </Button>
            <Button
              as={Link}
              href="https://github.com/Ryanr416/Weather-App"
              leftIcon={<FaGithub />}
              variant="solid"
              colorScheme="green"
            >
              View GitHub Now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Flex>
    </Card>
  );
}
