import { Link as ReactRouterLink } from 'react-router-dom';
import {
Card,
CardHeader,
CardBody,
CardFooter,
Text,
Button,
Image,
Stack,
Heading,
Divider,
ButtonGroup,
Flex,
Link
} from '@chakra-ui/react';
import NavBar from '../../shared/NavBar';

export default function Portfolio() {
return (
        <div>
          <NavBar />
          <Flex justify="center" mt="4rem"> {/* Use Flex to horizontally center the cards */}
            <Card maxW="sm" mr="2rem">
              <CardBody>
                <Image
                  src="https://ancient-voice-480.fly.dev/static/assets/images/hero_img.png"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">WanderLust</Heading>
                  <Text>
                    Wanderlust is an app that allows you to plan your itinerary for your next trip.
                    You will be able to add a budget, add plans for a certain trip, and add friends to your planned
                    trip. Organize your trip today with Wanderlust!
                    Created with Python, Django, and GitHub
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {/* Add any additional content here */}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                <a href="https://ancient-voice-480.fly.dev/" target="_blank" rel="noopener noreferrer">
                  <Button variant="solid" colorScheme="blue">
                    View App Now
                  </Button>
                  </a>
                </ButtonGroup>
              </CardFooter>
            </Card>
      
            
            <Card maxW="sm" ml="2rem">
            <CardBody>
                <Image
                  src="https://i.imgur.com/gVG4sY5.png"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">WeatherApp</Heading>
                  <Text>
                    This weather app allows you to create an account and login to view the weather in your area.
                    Created using React, Node.js, Express, and PostgreSQL.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {/* Add any additional content here */}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                <a href="https://weather-app-mfq9.onrender.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="solid" colorScheme="blue">
                    View App Now
                  </Button>
                  </a>
                </ButtonGroup>
              </CardFooter>
            </Card>


            <Card maxW="sm" ml="4rem">
            <CardBody>
                <Image
                  src="https://ancient-voice-480.fly.dev/static/assets/images/hero_img.png"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Finch Collector</Heading>
                  <Text>
                    Finch Collector is a robust and intuitive app that allows you to collect and store information about your favorite finches.
                    Created using Django, Python, and PostgreSQL.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {/* Add any additional content here */}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    View App Now
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
        </div>
      );
      

    

}
