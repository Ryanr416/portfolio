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
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://www.allaboutbirds.org/guide/assets/og/526209281-1200px.jpg"
          alt="Screenshot of Finch Collector"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Finch Collector</Heading>
          <Text>
            Finch Collector is a robust and intuitive app that allows you to
            collect and store information about your favorite finches. Created
            using Django, Python, and PostgreSQL.
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
