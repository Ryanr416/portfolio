import { Card, CardHeader, CardBody, CardFooter, Text, Button, Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link } from 'react-router-dom'





export default function NavBar() {

    return (
    <Card>
    <CardBody>
    <Button as={Link} to="/home">Home</Button>
    <Button as={Link} to="/about">About</Button>
    <Button as={Link} to="/portfolio">Portfolio</Button>
    </CardBody>
    </Card>
    )
    }