import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  SimpleGrid
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { ProjectCard } from "./components/ProjectCard"
import { Project } from './classes/Project'
import rhyolite from "./images/rhyolite.png"
import clash_of_forest from "./images/clash_of_forest.png"
import hermes from "./images/hermes.png"
import grocersChoice from "./images/grocersChoice.png"

const projects = [
  new Project(
    "Clash of Forest", "A gamified, machine-vision powered time-management software for PC",
    "🥇 1st Place", 2022, clash_of_forest,
    "https://github.com/NUSH-Hack/clash-of-forest", false, ""
  ),
  new Project(
    "Rhyolite", "A powerful tab management browser extension for the power users among us",
    "🥈 2nd Place", 2022, rhyolite,
    "https://github.com/NUSH-Hack/rhyolite", false, ""
  ),
  new Project(
    "Hermes", "A Progressive App for Item Sharing",
    "Represented at Intl' NUSH Hack", 2021, hermes,
    "https://github.com/NUSH-Hack/hermes", false, ""
  ),
  new Project(
    "Grocer's Choice", "An app that helps you make a greener choice.",
    "🥇 1st Place", 2021, grocersChoice,
    "https://github.com/NUSH-Hack/grocersChoice", false, ""
  ),
  new Project(
    "Coeus", "A simple Research Development Toolkit designed in Python.",
    "Junior Prize", 2018, "",
    "https://github.com/NUSH-Hack/coeus", false, ""
  )
]

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            {projects.map(ProjectCard)}
          </SimpleGrid>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
