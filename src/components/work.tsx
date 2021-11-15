import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export function Title({ children }) {
  return (
    <Box>
      <Box>
        <NextLink href="/works">
          <Link>Works</Link>
        </NextLink>
        <span>
          &nbsp;
          <ChevronRightIcon />
          &nbsp;
        </span>
      </Box>

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export function WorkImage({ src, alt }) {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

export function Meta({ children }) {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  )
}
