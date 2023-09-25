import { Card, CardHeader, CardBody, CardFooter, Text, Button, Link as ChakraLink, LinkProps, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'





export default function NavBar() {

    return (
    <Card>
    <CardBody>
    <ButtonGroup gap='5'>
    <Button colorScheme='teal' as={Link} to="/home">Home</Button>
    <Button as={Link} to="/about">About</Button>
    <Button as={Link} to="/portfolio">Portfolio</Button>
    </ButtonGroup>
    </CardBody>
    </Card>
    )
    }