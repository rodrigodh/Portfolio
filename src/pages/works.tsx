import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../../public/images/inkdrop_eyecatch.png'

export default function Works() {
  return (
    <Layout>
      <Container>
        <Heading as="h3">Adding works!</Heading>

        <Button
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          background="grassTeal"
          color="#202023"
        >
          <NextLink href="/">Go back</NextLink>
        </Button>

        {/* <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app
            </WorkGridItem>
          </Section>
        </SimpleGrid> */}
      </Container>
    </Layout>
  )
}
