import { Heading, Container, Badge, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Gamejam">
    <Container minW={'50%'}>
      <Title>
        Gamejam <Badge>2025</Badge>
      </Title>
      <P>
        Un jeu d’infiltration développé en équipe de 5 dans le cadre d’une game
        jam académique. Le projet a été réalisé en Python avec Pygame sur une
        période d’une semaine.
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
        Le thème imposé était « Médiéval », avec la contrainte « Apparition et
        disparition ». Nous avons choisi de créer un jeu d’infiltration dans
        lequel le joueur doit explorer un château,voler des objets puis
        s’échapper sans se faire repérer par les gardes.
      </P>

      <Heading as="h3" variant="section-title" mt={8}>
        Mon rôle
      </Heading>
      <P>
        Durant ce projet, j'ai principalement participé au game design, en
        réflechissant et développant les différentes méchaniques de jeux, avec
        notamment la conception et l'implémentation :
      </P>

      <List styleType="disc" ml={6}>
        <ListItem>de la zone de vision du joueur et des gardes</ListItem>
        <ListItem>du système de trappes et de souterrain</ListItem>
        <ListItem>
          de la gestion de la difficulté en fonction de l'heure et de la
          suspicion des gardes
        </ListItem>
      </List>

      <Heading as="h3" variant="section-title" mt={8}>
        Compétences travaillées
      </Heading>

      <List styleType="disc" ml={6}>
        <ListItem>Implémentation de systèmes interactifs</ListItem>
        <ListItem>Résolution de problèmes et débogage</ListItem>
        <ListItem>Conception d'algorithmes</ListItem>
        <ListItem>Réalisation de tests</ListItem>
        <ListItem>Travail en équipe sur un projet informatique</ListItem>
        <ListItem>
          Gestion du temps et des priorités dans le cadre d'un projet rapide
        </ListItem>
      </List>

      <Heading as="h3" variant="section-title" mt={8}>
        Gameplay
      </Heading>
      <P>
        Le joueur incarne un voleur ayant pour but de voler le plus d'objets
        possibles et de s'enfuir du château. L'objet le plus proche de lui est
        indiqué par une flèche rouge. Mais des gardes protègent le château, il
        doit donc les éviter malgré le fait qu'il ne peut les voir que dans un
        certain rayon.
      </P>

      <WorkImage
        src="/images/works/gamejam_gameplay.png"
        alt="Gamejam Gameplay"
      ></WorkImage>

      <P>
        Il y a aussi des trappes placées un peu partout dans le château qui
        permettent d'accéder au sous-sol, une zone permettant de se déplacer
        facilement en étant invisible aux yeux des gardes. Cependant, il est
        difficile de se repérer dans les souterrains, la flèche indiquant
        l'objet le plus proche n'est donc pas disponible dans cette zone.
      </P>

      <WorkImage
        src="/images/works/gamejam_underground.png"
        alt="Gamejam Underground"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
