import Link from 'next/link'
import { RiCodeBoxFill } from 'react-icons/ri'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover svg {
    transition: 0.5s;
    transform: rotate(180deg);
  }
`

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <RiCodeBoxFill size={20} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="'Nunito Sans'"
            fontWeight="bold"
            ml={3}
          >
            Rodrigo Schieck
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}
