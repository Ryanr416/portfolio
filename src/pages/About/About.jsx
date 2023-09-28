import { Link as ReactRouterLink } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Text, Button, Heading } from '@chakra-ui/react'
import NavBar from '../../shared/NavBar'
import "../About/About.css"


export default function About() {

return (



<div className="about">


<NavBar />
<div style={{ marginTop: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
<Card align='center' style={{ width: '900px'}} className="card-animation">
  <CardHeader>
    <Heading size='md'> A Little About Me</Heading>
  </CardHeader>
  <CardBody>
    <Text> hello </Text>
  </CardBody>
  <CardFooter>
  </CardFooter>
</Card>
</div>
</div>
)
}