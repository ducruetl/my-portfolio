import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Erreur 404</Heading>
      <Text>La page que vous cherchez n&apos;a pas été trouvée.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Returner à l&apos;accueil
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
