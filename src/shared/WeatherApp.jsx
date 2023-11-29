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
    <Card
      align="center"
      className="card-animation"
      maxW="sm"
      style={{ maxH: '300px' }}
      flex="1"
      margin="1rem"
    >
      <CardBody>
        <Text fontSize="large">
          <Card
            maxW="sm"
            maxH="500px"
            flex="1"
            margin="1rem"
            className="weather-card"
          >
            <div className="card-content">
              <Heading size="large">WeatherApp</Heading>
              <Image
                src="https://i.imgur.com/gVG4sY5.png"
                borderRadius="lg"
                objectFit="cover"
                h="60%"
              />
              <Stack mt="3" spacing="3">
                <Text fontSize="md">
                  This weather app allows you to create an account and login to
                  view the weather in your area. Created using React, Node.js,
                  Express, and PostgreSQL.
                </Text>
                <Text fontSize="md" mt="auto" flex="1"></Text>
              </Stack>
            </div>
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
                    isExternal
                    href={`https://weather-app-mfq9.onrender.com`}
                    variant="solid"
                    colorScheme="blue"
                    leftIcon={<FaExternalLinkAlt />}
                  >
                    View App Now
                  </Button>

                  <Button
                    as={Link}
                    href={`https://github.com/Ryanr416/Weather-App"`}
                    variant="solid"
                    colorScheme="green"
                    leftIcon={<FaExternalLinkAlt />}
                  >
                    View GitHub Now
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Flex>
          </Card>
        </Text>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
