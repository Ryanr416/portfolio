import { Card, CardHeader, CardBody, CardFooter, Text, Button, Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'





export default function NavBar() {

    return (
    <Card>
    <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
    <Button as={ReactRouterLink} to="/about">View Customers</Button>
    </CardBody>
    </Card>
    )
    }