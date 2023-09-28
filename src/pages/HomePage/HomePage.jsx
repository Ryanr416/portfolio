import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import NavBar from '../../shared/NavBar'
import "../HomePage/HomePage.css"
export default function HomePage() {

return (
<div className="homePage">
  <NavBar />
  <div className="content-container">
    <div className="welcome-message">
      Welcome to my portfolio
    </div>
    <div className="other-content">
    </div>
  </div>
</div>


)
}