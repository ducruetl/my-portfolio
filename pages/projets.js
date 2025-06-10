import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbChatodyssee from '../public/images/works/chatodyssee.png'
import thumbJavaGame from '../public/images/works/javagame.png'

const Works = () => (
  <Layout title="Projets">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projets Institutionnels
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="chatodyssee"
            title="Chat'Odyssee"
            thumbnail={thumbChatodyssee}
          >
            Une application web de découverte de chateau d&apos;Auvergne-Rhône-Alpes
            et de création de carnet de voyage.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projets Personnels
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem 
            id="javagame" 
            thumbnail={thumbJavaGame} 
            title="Jeu 2D"
          >
            Un début de jeu 2D pour apprendre les bases et les concepts du
            développement de jeux vidéos.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
