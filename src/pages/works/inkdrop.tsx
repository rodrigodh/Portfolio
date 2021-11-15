import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

export default function Work() {
  return (
    <Layout>
      <Container>
        <Title>
          InkDrop <Badge>2016</Badge>
        </Title>

        <P>
          A Markdown note-taking app with 100+ plugins, cross platform,
          encrypted data sync
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              http://www.inkdrop.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
        </List>

        <WorkImage src="/images/inkdrop_eyecatch.png" alt="inkdrop" />
      </Container>
    </Layout>
  )
}
