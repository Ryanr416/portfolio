import { Card, CardHeader, CardBody, CardFooter, Text, Button, Link as ChakraLink, LinkProps, ButtonGroup, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../shared/NavBar.css'




export default function NavBar() {
    const ButtonGroupStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        
    };
    return (
    <Card className="navbar">
    <CardBody>
    <div style={ButtonGroupStyle}>
    <ButtonGroup gap='5'>
    <Button colorScheme='blue' as={Link} to="/home">Home</Button>
    <Button as={Link} to="/portfolio">Portfolio</Button>
    <Button as={Link} to="/about">About</Button>
    </ButtonGroup>
    </div>
    </CardBody>
    </Card>
   
    )
    }