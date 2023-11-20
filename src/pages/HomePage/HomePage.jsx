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
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import NavBar from '../../shared/NavBar';
import '../HomePage/HomePage.css';

export default function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <div className="content-container">
        <div className="welcome-message">
          <div id="home">
            <center>Welcome to Ryan's portfolio</center>
          </div>
          <div className="other-content">
            <div id="about">
              <Flex justify="center" padding="10" align="center" mt="4rem">
                <Card
                  align="center"
                  style={{
                    background: 'linear-gradient(to right, #A1C4FD, #C2E9FB)',
                  }}
                  className="card-animation"
                  maxW="60%"
                  maxH="400px"
                >
                  <CardHeader>
                    <Heading size="md"> A Little About Me...</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize="large">
                      {' '}
                      I am a creative-minded software engineer who excels at
                      problem-solving. As a student at General Assembly, I was
                      taught the critical frameworks and languages for
                      full-stack development. With my experience in tech
                      support, I have developed a passion for software and
                      everything that involves creating it. This experience has
                      taught me to listen attentively to customers and provide
                      the best possible solutions for each problem presented. It
                      allowed me to nurture and foster my interest in
                      technology, enabling me to pursue my true passion, which
                      is software development You may contact me through the
                      following channels : Email : ryanrichardson635@gmail.com
                      and my LinkedIn :
                      https://www.linkedin.com/in/ryan-richardson19/{' '}
                    </Text>
                  </CardBody>
                  <CardFooter></CardFooter>
                </Card>
              </Flex>
            </div>

            <Flex justify="center" padding="6" align="center" mt="4rem">
              <Card maxW="sm" maxH="800px" flex="1" margin="1rem">
                <div className="card-content">
                  <div id="portfolio">
                    <Heading size="large">WanderLust</Heading>
                    <Image
                      src="https://ancient-voice-480.fly.dev/static/assets/images/hero_img.png"
                      borderRadius="lg"
                      objectFit="cover"
                      h="100%"
                    />
                    <Stack mt="3" spacing="3">
                      <Text fontSize="md">
                        Wanderlust is an app that allows you to plan your
                        itinerary for your next trip. You will be able to add a
                        budget, add plans for a certain trip, and add friends to
                        your planned trip. Organize your trip today with
                        Wanderlust! Created with Python, Django, and GitHub
                      </Text>
                      <Text color="blue.600" fontSize="2xl"></Text>
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

              <Card
                maxW="sm"
                maxH="800px"
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
                      This weather app allows you to create an account and login
                      to view the weather in your area. Created using React,
                      Node.js, Express, and PostgreSQL.
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
                      <a
                        href="https://weather-app-mfq9.onrender.com"
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
                        href="https://github.com/Ryanr416/Weather-App"
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

              <Card
                maxW="sm"
                maxH="800px"
                flex="1"
                margin="1rem"
                className="finch"
              >
                <div className="card-content">
                  <Heading size="large">Finch Collector</Heading>
                  <Image src="" borderRadius="lg" objectFit="cover" h="60%" />
                  <Stack mt="3" spacing="3">
                    <Text fontSize="md">
                      Finch Collector is a robust and intuitive app that allows
                      you to collect and store information about your favorite
                      finches. Created using Django, Python, and PostgreSQL.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      {/* Add any additional content here */}
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
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
}
