import {
  Heading,
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Chat'Odyssee">
    <Container>
      <Title>
        Chat'Odyssee <Badge>2025</Badge>
      </Title>
      <P>
        Une application web de découverte de chateau d'Auvergne-Rhône-Alpes
        et de création de carnet de voyage.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, FatFreeFramework, JavaScript</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/chatodyssee.png"
        alt="Chat'Odyssee"
      />

      <Heading as="h3" variant="section-title" mt={8}>
        Contexte
      </Heading>
      <P>
        Chat'Odyssee est un projet réalisé dans le cadre de ma formation en
        BUT Informatique à l'IUT2 de Grenoble. Le sujet du projet était de
        développer une application web mettant en avant un patrimoine culturel
        français, en l'occurrence les châteaux de la région Auvergne-Rhône-Alpes.
      </P>
      
      <Heading as="h3" variant="section-title" mt={8}>
        Fonctionnalités
      </Heading>
      <P>
        L'application permet aux utilisateurs de découvrir des châteaux
        situés en Auvergne-Rhône-Alpes, de consulter leurs informations
        détaillées, et de créer un carnet de voyage personnalisé pour
        enregistrer leurs visites et impressions.

        Ce carnet de voyage peut être partagé avec d'autres utilisateurs,
        permettant ainsi de partager ses créations et découvertes à son 
        entourage.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
