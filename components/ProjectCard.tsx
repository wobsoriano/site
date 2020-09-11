import React, { useCallback } from 'react';

import { Box, Text, Flex, Icon, IconButton } from '@chakra-ui/core';
import { IoLogoGithub, IoMdOpen } from 'react-icons/io';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { MdFolderOpen } from 'react-icons/md';
import { Project } from '../interfaces';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const openLinkInNewTab = useCallback((url: string) => {
    window.open(url, '_blank');
  }, []);

  return (
    <Box bg="navy.light" borderRadius="md" px={5} pt={5} pb="60px" position="relative">
      <Flex justifyContent="space-between">
        <Icon color="green.custom" as={MdFolderOpen} boxSize={8} />
        <Box>
          {/* <Link href={project.url} isExternal>
            <Icon as={IoLogoGithub} boxSize={8} />
          </Link> */}
          <IconButton
            variant="link"
            _hover={{
              color: 'green.custom',
            }}
            _focus={{
              borderColor: 'transparent',
            }}
            aria-label="Open github link"
            icon={<IoLogoGithub size={30} />}
            onClick={() => openLinkInNewTab(project.url)}
          />
          <IconButton
            variant="link"
            _hover={{
              color: 'green.custom',
            }}
            _focus={{
              borderColor: 'transparent',
            }}
            aria-label="Open website"
            icon={<IoMdOpen size={30} />}
            onClick={() =>
              openLinkInNewTab(project.homepageUrl ? project.homepageUrl : project.url)
            }
          />
        </Box>
      </Flex>
      <Text color="slate.lighter" fontSize="xl" fontWeight="bold" mt={4}>
        {project.name}
      </Text>
      <Text fontWeight="medium" mt={3}>
        {project.description}
      </Text>
      <Flex alignItems="center" position="absolute" mt={3} bottom={5}>
        <Text fontWeight="medium">{project.primaryLanguage.name}</Text>
        <Icon as={AiOutlineStar} ml={4} />
        <Text ml={1} fontWeight="medium">
          {project.stargazers.totalCount}
        </Text>
        <Icon as={AiOutlineFork} ml={3} />
        <Text ml={1} fontWeight="medium">
          {project.forkCount}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
