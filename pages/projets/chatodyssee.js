import { Heading, Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Chat'Odyssee">
    <Container minW={'50%'}>
      <Title>
        Chat'Odyssee <Badge>2025</Badge>
      </Title>
      <P>
        Une application web de découverte de chateau d'Auvergne-Rhône-Alpes et
        de création de carnet de voyage.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>PHP, FatFreeFramework, JavaScript</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/chatodyssee.png" alt="Chat'Odyssee" />
      <Heading as="h3" variant="section-title" mt={8}>
        Contexte
      </Heading>
      <P>
        Chat'Odyssee est un projet réalisé dans le cadre de ma formation en BUT
        Informatique à l'IUT2 de Grenoble. Le sujet du projet était de
        développer une application web mettant en avant un patrimoine culturel
        français, en l'occurrence les châteaux de la région
        Auvergne-Rhône-Alpes.
      </P>
      <Heading as="h3" variant="section-title" mt={8}>
        Mon rôle
      </Heading>
      <P>
        Mon rôle dans ce projet était assez large. Je me suis notamment occupé
        de la mise en place de Git et du framework FatFreeFramework, ainsi que
        de leur configuration pour le projet. J'ai également accompagné les
        autres membres du groupe dans leur utilisation de Git et du framework
        afin d'accélerer leur prise en main de ces outils et d'assurer une
        cohérence dans la manière de les utiliser.
      </P>
      <P>
        Concernant le développement, j'ai principalement travaillé sur la
        fonctionnalité de création et de consultation des carnets de voyage.
        J'ai notamment réalisé l'intégration d'un éditeur de texte, la
        sauvegarde du contenu, ainsi que la gestion des différents modes
        d'affichage du carnet (le mode édition et le mode visiteur). J'ai
        également développé la gestion de la visibilité des carnets afin de
        permettre aux utilisateurs de choisir par qui leurs créations peuvent
        être consultées.
      </P>

      <WorkImage src="/images/works/chatodyssee_carnet.png" alt="Carnet de voyage" />

      <Heading as="h3" variant="section-title" mt={8}>
        Compétences travaillées
      </Heading>
      <P>
        Ce projet m'a permis de développer plusieurs compétences techniques et
        transversales dans le domaine du développement web :
      </P>
      <List styleType="disc" ml={6}>
        <ListItem>Travail en équipe avec Git</ListItem>
        <ListItem>
          Accompagnement et transmission de connaissances au sein d'une équipe
        </ListItem>
        <ListItem>Prise en main et configuration d'un framework web</ListItem>
        <ListItem>Développement d'une application web dynamique</ListItem>
        <ListItem>Gestion et sauvegarde de données</ListItem>
        <ListItem>
          Conception et implémentation de fonctionnalités complexes
        </ListItem>
        <ListItem>Débogage et résolution de problèmes techniques</ListItem>
      </List>

      <Heading as="h3" variant="section-title" mt={8}>
        Fonctionnalités
      </Heading>
      <P>
        L'application permet aux utilisateurs de découvrir des châteaux situés
        en Auvergne-Rhône-Alpes, de consulter leurs informations détaillées, et
        de créer un carnet de voyage personnalisé pour enregistrer leurs visites
        et impressions. Ce carnet de voyage peut être partagé avec d'autres
        utilisateurs, permettant ainsi de partager ses créations et découvertes
        à son entourage.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
