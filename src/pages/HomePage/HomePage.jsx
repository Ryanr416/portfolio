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
  CardFooter
} from '@chakra-ui/react';
import NavBar from '../../shared/NavBar';
import '../HomePage/HomePage.css';

export default function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <div className="content-container">
        <div className="welcome-message">
          Welcome to Ryan's portfolio
          <Flex justify="flex-start" mt="4rem" marginLeft="-33rem">
            <Card maxW="sm" mr="2rem" maxH="800px" marginTop="10rem">
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
              </div>
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
            </Card>
          </Flex>
        </div>
        <div className="other-content">
          {/* Add other content here */}
        </div>
      </div>
    </div>
  );
}

  