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
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://ancient-voice-480.fly.dev/static/assets/images/hero_img.png"
          alt="Screenshot of WanderLust App"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">WanderLust</Heading>
          <Text>
            Wanderlust is an app that allows you to plan your itinerary for your
            next trip. You will be able to add a budget, add plans for a certain
            trip, and add friends to your planned trip. Organize your trip today
            with Wanderlust! Created with Python, Django, and GitHub
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
              href="https://ancient-voice-480.fly.dev/"
              variant="solid"
              colorScheme="blue"
              leftIcon={<FaExternalLinkAlt />}
            >
              View App Now
            </Button>
            <Button
              as={Link}
              href="https://github.com/Dami-Olus/ga_capstone_prjct_wanderlust"
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
