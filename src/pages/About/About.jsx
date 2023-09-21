import { Link as ReactRouterLink } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Text, Button } from '@chakra-ui/react'
import NavBar from '../../shared/NavBar'

export default function About() {

return (



<div>


<NavBar />
<Card>
    <CardBody>
    <Text>about.</Text>
    <Button as={ReactRouterLink} to="/about">View Customers</Button>
    </CardBody>
    </Card>
</div>
)
}