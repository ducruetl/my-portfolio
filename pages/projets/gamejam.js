import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Gamejam">
    <Container>
      <Title>
        Gamejam <Badge>2025</Badge>
      </Title>
      <P>
        Un petit jeu réalisé en l&apos;espace de 2 semaines, 
        dans un cadre académique.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>Python, Pygame</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
