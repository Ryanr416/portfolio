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
  
    </div>
    </CardBody>
    </Card>
   
    )
    }