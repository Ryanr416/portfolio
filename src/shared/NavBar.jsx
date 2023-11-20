import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';
import { IoIosHome, IoIosFolderOpen, IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../shared/NavBar.css';

export default function NavBar() {
  const ButtonGroupStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const StackStyle = {
    marginBottom: '200px', // Adjust this value to move the buttons up or down
  };

  const CardStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Adjust the z-index as needed
  };

  return (
    <Card className="navbar" style={CardStyle}>
      <CardBody>
        {/* <Image src={Logo.src} h="50px" /> */}
        <div style={ButtonGroupStyle} className="Home">
          <Stack direction="row" spacing={4} align="center" style={StackStyle}>
            <Button
              as="a"
              href="#home"
              leftIcon={<IoIosHome />}
              colorScheme="teal"
              variant="outline"
            >
              Home
            </Button>
            <Button
              as="a"
              href="#portfolio"
              leftIcon={<IoIosFolderOpen />}
              colorScheme="teal"
              variant="outline"
            >
              Portfolio
            </Button>
            <Button
              as="a"
              href="#about"
              leftIcon={<IoMdMail />}
              colorScheme="teal"
              variant="outline"
            >
              Contact Me
            </Button>
          </Stack>
        </div>
      </CardBody>
    </Card>
  );
}
