import { 
    Card, CardHeader, CardBody, CardFooter, 
    Text, Heading, Button, Image, Stack, Divider, ButtonGroup
} from '@chakra-ui/react';
import {Project} from "../classes/Project"

export const ProjectCard = (project: Project) => (
    <Card>
        <Image
        src={project.image}
        alt='Project Image'
        borderRadius='lg'
        />
    <Stack mt='6' spacing='3'>
        <CardHeader>
            <Heading size='md'>{project.title}</Heading>
        </CardHeader>
        <CardBody>
            <Text>{project.tagline}</Text>
        </CardBody>
    </Stack>
  <Divider />
        <CardFooter>
        <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                View on GitHub
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Share
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
)