import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoMail } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Léo Ducruet
          </Heading>
          <p>Étudiant en BUT Informatique (IUT2 Grenoble)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/leo.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          A propos
        </Heading>
        <Paragraph>
          Passioné de programmation et de jeux vidéos, je suis actuellement
          étudiant en BUT Informatique à l&apos;
          <Link
            as={NextLink}
            href="https://iut2.univ-grenoble-alpes.fr/"
            passHref
            target="_blank"
          >
            IUT2 de Grenoble
          </Link>
          . Le domaine qui m&apos;intéresse le plus au sein de la programmation
          est le développement d&apos;applications web ou logicielles.
          J&apos;aime également me lancer dans des petits projets afin de
          découvrir de nouvelles technologies ou simplement pour m&apos;amuser.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projets"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Mes projets
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Diplomes
        </Heading>
        <BioSection>
          <BioYear>2020 - 2023</BioYear>
          Bac technologique - Système d&apos;Information et Numérique -{' '}
          <Link
            as={NextLink}
            href="https://ferdinand-buisson.ent.auvergnerhonealpes.fr/"
            passHref
            target="_blank"
          >
            Lycée Ferdinand Buisson
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2023 - Aujourd&apos;hui</BioYear>
          BUT Informatique - Déploiement d&apos;applications -{' '}
          <Link
            as={NextLink}
            href="https://iut2.univ-grenoble-alpes.fr/"
            passHref
            target="_blank"
          >
            IUT2 Grenoble
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experiences
        </Heading>
        <BioSection>
          <BioYear>2025</BioYear>
          Stage de 11 semaines - Développement d&apos;un système interactif
          d&apos;incitation à l&apos;usage d&apos;Energie Renouvelable pour la
          recharge d&apos;ordinateur portable -
          <Link as={NextLink} href="https://www.liglab.fr/fr">
            {' '}
            Laboratoire Informatique de Grenoble
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Loisirs
        </Heading>
        <Paragraph>Nouvelles technologies, Jeux Vidéos, Basketball</Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto:leo.ducruet@outlook.com" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
                leo.ducruet@outlook.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/ducruetl" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ducruetl
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
