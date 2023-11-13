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
          <center>
          Welcome to Ryan's portfolio
          </center>
          <Flex justify="center" align="center" mt="4rem">
            <Card maxW="sm" maxH="800px" flex="1" margin="1rem">
              <div className="card-content">
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
                  src="data:image/jpeg;base64,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"
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
  );
}
