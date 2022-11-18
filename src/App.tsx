import * as React from "react"
import {
  ChakraProvider,
  Box, Button,
  VStack,
  theme,
  Heading, ButtonGroup
} from "@chakra-ui/react"

import { ProjectGallery } from "./views/ProjectGallery"

export const App = () => {

  return (
  <ChakraProvider theme={theme}>
    <Box id="header" textAlign="center" fontSize="xl">
      <VStack mt='100px' spacing='50px'>
        <ButtonGroup fontSize="3xl">
          
            <Button variant='ghost' colorScheme='blue' fontSize="xl">HOME</Button>
            <Button variant='ghost' colorScheme='blue' fontSize="xl">ABOUT</Button>
            <Button variant='ghost' colorScheme='blue' fontSize="xl">PROJECT GALLERY</Button>
            <Button variant='ghost' colorScheme='blue' fontSize="xl">CONTACT US</Button>
        </ButtonGroup>
        <Heading fontSize="5xl">Hello World!</Heading>
        <Heading fontSize="5xl">Welcome to NUSH Hack 2023!</Heading>
      </VStack>
      
    </Box>
    <ProjectGallery></ProjectGallery>
  </ChakraProvider>
)}
