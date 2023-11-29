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
import '../HomePage/HomePage.css';
import Wanderlust from '../../shared/Wanderlust';
import FinchCollector from '../../shared/FinchCollector';
import WeatherApp from '../../shared/WeatherApp';

export default function HomePage() {
  return (
    <Flex direction={'column'} className="homePage">
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
              problem-solving. As a student at General Assembly, I was taught
              the critical frameworks and languages for full-stack development.
              With my experience in tech support, I have developed a passion for
              software and everything that involves creating it. This experience
              has taught me to listen attentively to customers and provide the
              best possible solutions for each problem presented. It allowed me
              to nurture and foster my interest in technology, enabling me to
              pursue my true passion, which is software development You may
              contact me through the following channels : Email :
              ryanrichardson635@gmail.com and my LinkedIn :
              https://www.linkedin.com/in/ryan-richardson19/{' '}
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} p={8}>
        <Wanderlust />
        <WeatherApp />
        <FinchCollector />
      </SimpleGrid>
    </Flex>
  );
}
