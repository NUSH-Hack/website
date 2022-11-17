import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  SimpleGrid
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { ProjectCard } from "./components/ProjectCard"
import { Project } from './classes/Project'
import logo from "./logo.svg"

const projects = [
  new Project(
    "Clash of Forest", "A gamified, machine-vision powered time-management software for PC",
    "1st Place", true, 2022, logo
  ),
  new Project(
    "Rhyolite", "A powerful tab management browser extension for the power users among us",
    "2nd Place", true, 2022, ""
  ),
]

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {projects.map(ProjectCard)}
            <ProjectCard title={"Rhyolite"} tagline={"A powerful tab management browser extension for the power users among us"} award={"2nd Place"} isAward={true} year={2022} image={""}></ProjectCard>
          </SimpleGrid>
          
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
