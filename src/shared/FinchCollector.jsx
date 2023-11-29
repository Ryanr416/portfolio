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

export default function FinchCollector() {
  return (
    <Card
      align="center"
      style={{
        background: 'linear-gradient(to right, #A1C4FD, #C2E9FB)',
      }}
      className="card-animation"
      maxW="60%"
      maxH="400px"
    >
      <CardBody>
        <Text fontSize="large">
          <Card maxW="sm" maxH="800px" flex="1" margin="1rem" className="finch">
            <div className="card-content">
              <Heading size="large">Finch Collector</Heading>
              <Image src="" borderRadius="lg" objectFit="cover" h="60%" />
              <Stack mt="3" spacing="3">
                <Text fontSize="md">
                  Finch Collector is a robust and intuitive app that allows you
                  to collect and store information about your favorite finches.
                  Created using Django, Python, and PostgreSQL.
                </Text>
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
                  <a
                    href="https://ancient-voice-480.fly.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      leftIcon={<FaExternalLinkAlt />}
                    >
                      View App Now
                    </Button>
                  </a>
                  <a
                    href="https://github.com/Dami-Olus/ga_capstone_prjct_wanderlust"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="solid"
                      colorScheme="green"
                      leftIcon={<FaGithub />}
                    >
                      View GitHub Now
                    </Button>
                  </a>
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
