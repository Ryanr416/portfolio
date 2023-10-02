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
    <Text> Thank you for visiting my website. I am excited to showcase my skills to you through this portoflio. I have been working hard on my react, django, python, 
      JavaScript, GitHub, AWS, MongoDB, HTML and CSS.  You may contact me through the following channels : Email : ryanrichardson635@gmail.com and my LinkedIn : https://www.linkedin.com/in/ryan-richardson19/ </Text>
  </CardBody>
  <CardFooter>
  </CardFooter>
</Card>
</div>
</div>
)
}