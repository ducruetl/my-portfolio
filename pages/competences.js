import {
  Box,
  Container,
  Heading,
  HStack,
  VStack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from 'next/link';

import Layout from "../components/layouts/article";
import { FaCode, FaToolbox, FaUser } from "react-icons/fa";
import { ImTree } from "react-icons/im";

const skillGroups = [
  {
    title: "Développement",
    icon: FaCode,
    skills: [
      { name: "HTML / CSS", link: "/projets/chatodyssee" },
      { name: "JavaScript", link: "/projets/chatodyssee" },
      { name: "PHP", link: "/projets/chatodyssee" },
      { name: "Python", link: "/projets/gamejam" },
      { name: "Java", link: "#" },
      { name: "C", link: "#" },
      { name: "C++", link: "#" },
      { name: "Rust", link: "#" },
      { name: "SQL", link: "#" },
    ],
  },
  {
    title: "Outils & environnements",
    icon: FaToolbox,
    skills: [
      { name: "Git", link: "/projets/chatodyssee" },
      { name: "Linux", link: "#" },
      { name: "Docker", link: "#" },
      { name: "IA", link: "#" }
    ],
  },
  {
    title: "Conception & méthodes",
    icon: ImTree,
    skills: [
      { name: "UML", link: "#" },
      { name: "Méthodes agiles", link: "#" },
    ],
  },
  {
    title: "Compétences transversales",
    icon: FaUser,
    skills: [
      { name: "Travail en équipe", link: "/projets/chatodyssee" },
      { name: "Autonomie", link: "#" },
    ],
  },
];

const Competences = () => {
  const accent = useColorModeValue("#319795", "#80E5DF");
  const cardBg = "transparent";
  const cardBorder = useColorModeValue("gray.700", "gray.600");
  const textUnderline = useColorModeValue("#525252", "gray.600")
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Layout title="Compétences">
      <Container maxW="container.md" px={{ base: 4, md: 0 }}>
        <Heading as="h2" mb={8} fontSize="2xl">
          Compétences
        </Heading>

        <VStack align="stretch" spacing={8}>
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Box key={group.title}>
                <HStack spacing={4} mb={4} align="center">
                  <Box color={accent} flexShrink={0}>
                    <Icon size={28} />
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize="lg"
                      color={textColor}
                      pb={2}
                      borderBottom="2px solid"
                      borderColor={textUnderline}
                    >
                      {group.title}
                    </Heading>
                  </Box>
                </HStack>

                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 3 }}
                  spacing={3}
                  ml={{ base: 0, md: 0 }}
                >
                  {group.skills.map((skill) => (
                    <Link
                      key={skill.name}
                      as={NextLink}
                      href={skill.link}
                    >
                      <Box
                        border="1px solid"
                        borderColor={cardBorder}
                        borderRadius="md"
                        bg={cardBg}
                        px={3}
                        py={2}
                        transition="border-color 0.2s, transform 0.2s"
                        _hover={{
                          borderColor: accent,
                          transform: "translateY(-2px)",
                        }}
                      >
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          color={textColor}
                        >
                          {skill.name}
                        </Text>
                      </Box>
                    </Link>
                  ))}
                </SimpleGrid>
              </Box>
            );
          })}
        </VStack>
      </Container>
    </Layout>
  );
};

export default Competences;
export { getServerSideProps } from '../components/chakra'
