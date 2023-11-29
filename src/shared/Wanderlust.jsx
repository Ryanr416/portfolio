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

export default function Wanderlust() {
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
        <Flex
          justify="center"
          padding="6"
          align="center"
          mt="4rem"
          id="portfolio"
        >
          <Card maxW="sm" style={{ maxH: '1000px' }} flex="1" margin="1rem">
            <div className="card-content">
              <div>
                <Heading size="large">WanderLust</Heading>
                <Image
                  src="https://ancient-voice-480.fly.dev/static/assets/images/hero_img.png"
                  borderRadius="lg"
                  h="300px"
                />
                <Stack mt="3" spacing="3">
                  <Text fontSize="md">
                    Wanderlust is an app that allows you to plan your itinerary
                    for your next trip. You will be able to add a budget, add
                    plans for a certain trip, and add friends to your planned
                    trip. Organize your trip today with Wanderlust! Created with
                    Python, Django, and GitHub
                  </Text>
                </Stack>
              </div>
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
                      leftIcon={<FaGithub />}
                      variant="solid"
                      colorScheme="green"
                    >
                      View GitHub Now
                    </Button>
                  </a>
                </ButtonGroup>
              </CardFooter>
            </Flex>
          </Card>
        </Flex>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
