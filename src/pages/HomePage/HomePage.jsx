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
  CardHeader
} from '@chakra-ui/react';
import NavBar from '../../shared/NavBar';
import '../HomePage/HomePage.css';

export default function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <div className="content-container">
        <div className="welcome-message">
          <div id='home'>
          <center>
          Welcome to Ryan's portfolio
          </center>
          </div>
          <Flex justify="center" padding="6" align="center" mt="4rem">
            <Card maxW="sm" maxH="800px" flex="1" margin="1rem">
              
              <div className="card-content">
                <div id='portfolio'>
                <Image
                  src="https://ancient-voice-480.fly.dev/static/assets/images/hero_img.png"
                  borderRadius="lg"
                />
                <Stack mt="3" spacing="3">
                  <Heading size="md">WanderLust</Heading>
                  <Text fontSize="md">
                    Wanderlust is an app that allows you to plan your itinerary for your next trip.
                    You will be able to add a budget, add plans for a certain trip, and add friends to your planned
                    trip. Organize your trip today with Wanderlust!
                    Created with Python, Django, and GitHub
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {/* Add any additional content here */}
                  </Text>
                </Stack>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <a href="https://ancient-voice-480.fly.dev/" target="_blank" rel="noopener noreferrer">
                      <Button variant="solid" colorScheme="blue">
                        View App Now
                      </Button>
                    </a>
                    <a href="https://github.com/Dami-Olus/ga_capstone_prjct_wanderlust" target="_blank" rel="noopener noreferrer">
                      <Button variant="solid" colorScheme="blue">
                        View GitHub Now
                      </Button>
                    </a>
                  </ButtonGroup>
                </CardFooter>
                </div>
              </div>
            </Card>

            <Card maxW="sm" maxH="800px" flex="1" margin="1rem" className="weather-card">
  <div className="card-content">
    <Image
      src="https://i.imgur.com/gVG4sY5.png"
      borderRadius="lg"
    />
    <Stack mt="3" spacing="3">
      <Heading size="md">WeatherApp</Heading>
      <Text fontSize="md">
        This weather app allows you to create an account and login to view the weather in your area.
        Created using React, Node.js, Express, and PostgreSQL.
      </Text>
      {/* Add additional content or padding to match the desired height */}
      <Text fontSize="md" mt="auto" flex="1">
        
      </Text>
    </Stack>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing="2">
        <a href="https://weather-app-mfq9.onrender.com" target="_blank" rel="noopener noreferrer">
          <Button variant="solid" colorScheme="blue">
            View App Now
          </Button>
        </a>
        <a href="https://github.com/Ryanr416/Weather-App" target="_blank" rel="noopener noreferrer">
          <Button variant="solid" colorScheme="blue">
            View GitHub Now
          </Button>
        </a>
      </ButtonGroup>
    </CardFooter>
  </div>
</Card>


            <Card maxW="sm" maxH="800px" flex="1" margin="1rem" className="finch">
              <div className="card-content">
                <Image
                  src=""
                  borderRadius="lg"
                />
                <Stack mt="3" spacing="3">
                  <Heading size="md">Finch Collector</Heading>
                  <Text fontSize="md">
                  Finch Collector is a robust and intuitive app that allows you to collect and store information about your favorite finches.
                    Created using Django, Python, and PostgreSQL.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {/* Add any additional content here */}
                  </Text>
                </Stack>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <a href="https://ancient-voice-480.fly.dev/" target="_blank" rel="noopener noreferrer">
                      <Button variant="solid" colorScheme="blue">
                        View App Now
                      </Button>
                    </a>
                    <a href="https://github.com/Dami-Olus/ga_capstone_prjct_wanderlust" target="_blank" rel="noopener noreferrer">
                      <Button variant="solid" colorScheme="blue">
                        View GitHub Now
                      </Button>
                    </a>
                  </ButtonGroup>
                </CardFooter>
              </div>
            </Card>
          </Flex>
        </div>
        <div className="other-content">
          <div id='about'>
        <Card align='center' style={{ width: '900px'}} className="card-animation">
  <CardHeader>
    <Heading size='md'> A Little About Me</Heading>
  </CardHeader>
  <CardBody>
    <Text> Thank you for visiting my website. I am excited to showcase my skills to you through this portoflio. I have been working hard on my react, django, python, 
      JavaScript, GitHub, AWS, MongoDB, HTML and CSS.  You may contact me through the following channels : Email : ryanrichardson635@gmail.com and my LinkedIn : https://www.linkedin.com/in/ryan-richardson19/ </Text>
  </CardBody>
  <CardFooter>
  </CardFooter>
</Card>
</div>
        </div>
      </div>
    </div>
  );
}
