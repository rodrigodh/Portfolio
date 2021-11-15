import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  Icon,
  ListItem,
  List,
  useColorModeValue
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragrath from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

export default function Page() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a full-stack developer based in Brazil!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rodrigo Schieck
            </Heading>

            <p>Developer / UI Designer / Tech Enthusiast</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/rodrigo.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragrath>
            Rodrigo is a full-stack developer based in Brazil with a passion for
            building digital services, after some time and practice I got used
            to dealing with real-life problems, and I'm currently working at{' '}
            <Link href="https://www.instagram.com/v4company/" target="_blank">
              <Link>V4 Company</Link>
            </Link>{' '}
            as a Software Engineer. Also accepting freelance projects.
          </Paragrath>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <BioSection>
            <BioYear>2003</BioYear>
            Born in Agudo, Brazil.
          </BioSection>

          <BioSection>
            <BioYear>2018</BioYear>
            First experience with software development.
          </BioSection>

          <BioSection>
            <BioYear>2018</BioYear>
            Began my first job as a professional video editor inside a small
            company, creating institutional and marketing videos. That's the
            place where I learned solid concepts about teamwork and
            professionalism.
          </BioSection>

          <BioSection>
            <BioYear>2020 to present</BioYear>
            Working at V4 Company as a Software Engineer.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>

          <Paragrath>
            Animes,{' '}
            <Link
              href="https://steamcommunity.com/id/76569489415681561586/"
              target="_blank"
            >
              Games
            </Link>
            , Music, Skate, Parties,{' '}
            <Link href="https://github.com/rodrigodh">Tech in general</Link>
          </Paragrath>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>

          <List>
            <ListItem>
              <Link href="http://github.com/rodrigodh" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @rodrigodh
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.instagram.com/rodrigoschieck/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @rodrigoschieck
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/rodrigo-schieck/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Rodrigo Schieck
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
