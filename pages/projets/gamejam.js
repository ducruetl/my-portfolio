import { Heading, Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
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

      <WorkImage src="/images/works/gamejam.png" alt="Gamejam Thumbnail" />

      <Heading as="h3" variant="section-title" mt={8}>
        Contexte
      </Heading>
      <P>
        Le jeu 'Le château sans portes' est un petit jeu réalisé avec une équipe de 5 personnes 
        et sur période d'une semaine, avec comme thème 'Médiéval' et comme contrainte 
        'Apparition et disparition'.
      </P>

      <Heading as="h3" variant="section-title" mt={8}>
        Gameplay
      </Heading>
      <P>
        Le joueur incarne un voleur ayant pour but de voler le plus d'objets possibles et de
        s'enfuir du château. L'objet le plus proche de lui est indiqué par une flèche rouge.
        Mais des gardes protègent le château, il doit donc les éviter malgré le fait qu'il ne 
        peut les voir que dans un certain rayon.
      </P>

      <WorkImage src="/images/works/gamejam_gameplay.png" alt="Gamejam Gameplay"></WorkImage>

      <P>
        Il y a aussi des trappes placées un peu partout dans le château qui permettent d'accéder 
        au sous-sol, une zone permettant de se déplacer facilement en étant invisible aux yeux 
        des gardes. Cependant, il est difficile de se repérer dans les souterrains, la flèche 
        indiquant l'objet le plus proche n'est donc pas disponible dans cette zone. 
      </P>

      <WorkImage src="/images/works/gamejam_underground.png" alt="Gamejam Underground"></WorkImage>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
