import { Container, Heading, SimpleGrid, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import Thumbnail from '../../public/images/post-thumbnail.jpeg'

export default function Posts() {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3">Adding posts!</Heading>

        <Button mt={{ md: 4 }} background="grassTeal" color="#202023">
          <NextLink href="/">Go back</NextLink>
        </Button>

        {/* <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="My Fish workflow"
              thumbnail={Thumbnail}
              href="https://www.google.com"
            />

            <GridItem
              title="My Fish workflow"
              thumbnail={Thumbnail}
              href="https://www.google.com"
            />

            <GridItem
              title="My Fish workflow"
              thumbnail={Thumbnail}
              href="https://www.google.com"
            />
          </SimpleGrid>
        </Section> */}
      </Container>
    </Layout>
  )
}
