import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Jeu 2D">
    <Container>
      <Title>
        Jeu 2D <Badge>2024</Badge>
      </Title>
      <P>
        Un début de jeu 2D pour apprendre les bases et les concepts du 
        développement de jeux vidéos.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <span>
            <Link href="https://github.com/ducruetl/2DGame" target="_blank">
              https://github.com/ducruetl/2DGame <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Java / Swing
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/javagame.png" alt="Java Game Thumbnail" />

      <P>
        J'ai conçu différentes surfaces possédant chacune ses propres caractéristiques 
        tel que la collision. Les surfaces existantes à l'heure actuelle sont : la terre, l'eau et les murs.
      </P>

      <WorkImage src="/images/works/javagame_grass.png" alt="Terre" />
      <WorkImage src="/images/works/javagame_water.png" alt="Eau" />
      <WorkImage src="/images/works/javagame_wall_brick.png" alt="Mur" />

      <P>
        J'ai notamment appris à utiliser l'algorithme <Link href='https://fr.wikipedia.org/wiki/Algorithme_A*' target='_blank'>A*</Link> pour implémenter un 
        système de "pathfinding", l'utilisateur clique sur une case et 
        l'algorithme trouve le chemin le plus court pour arriver à cette case.
      </P>

      <WorkImage src="/images/works/javagame_pathfinding.gif" alt="Pathfinding Example Gif" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
