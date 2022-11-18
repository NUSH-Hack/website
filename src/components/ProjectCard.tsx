import { 
    Card, CardBody, CardFooter, 
    Text, Heading, Button, Image, 
    Stack, Divider, ButtonGroup, LinkOverlay
} from '@chakra-ui/react';
import {Project} from "../types/Project"

export const ProjectCard = (project: Project) => (
    <Card>
        <Image
        src={project.image}
        alt='Project Image'
        borderRadius='lg'
        />
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{project.title}</Heading>
                    <Text>{project.award}, {project.year}</Text>
                    <Text>{project.tagline}</Text>
            </Stack>
        </CardBody>
  <Divider />
        <CardFooter>
        <ButtonGroup spacing='2'>
            
          <LinkOverlay href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant='solid' colorScheme='blue'>
                View on GitHub
            </Button>
          </LinkOverlay>
            {
                project.hasDemo ? 
                <LinkOverlay href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant='ghost' colorScheme='blue'>Demo</Button> 
                </LinkOverlay>
                : null   
            }
            </ButtonGroup>
        </CardFooter>
    </Card>
)