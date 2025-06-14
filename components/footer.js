import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      Ce site est construit sur la base du site web de{' '}
      <a href="https://www.craftz.dog/" target="_blank">
        Takuya Matsuyama
      </a>
      .
    </Box>
  )
}

export default Footer
