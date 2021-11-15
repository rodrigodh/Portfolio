import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants: Variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

export default function Layout({
  children,
  title
}: {
  children: ReactNode
  title?: string
}) {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Rodrigo Schieck</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}
