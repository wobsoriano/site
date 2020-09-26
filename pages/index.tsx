import React from 'react';
import Head from 'next/head';
import { Box, SimpleGrid, Flex, Heading, Text, Link, Button, Center } from '@chakra-ui/core';
import ProjectCard from '../components/ProjectCard';
import axios from 'axios';
import useSWR from 'swr';

import { Project } from '../interfaces';
import ProjectSkeleton from '../components/ProjectSkeleton';

const fetcher = async (url: string) => {
  const { data } = await axios.get<Project[]>(url);
  return data;
};

const Home: React.FC = () => {
  const { data, error } = useSWR('/api/repositories', fetcher);

  return (
    <>
      <Head>
        <title>Robert Soriano | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Robert Soriano | Software Developer" />
        <meta property="og:url" content="https://robsoriano.com" />
        <meta property="og:site_name" content="Robert Soriano | Software Developer" />
        <meta property="og:image" content="https://og-image.vercel.app/robertsoriano.com.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Robert Soriano is a software developer based in Manila, PH specializing in building websites and applications."
        />
      </Head>
      <Box h="100vh">
        <Flex margin="0 auto" direction="column" maxW={992} px={[5, 8, 8]} py={5}>
          <Heading as="h1" fontSize={40} color="slate.lighter">
            {`Hi, I'm Robert Soriano.`}
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt={5}>
            {`I'm a software developer based in Manila, PH specializing in building websites and
          applications.`}
          </Text>
          <Text fontSize="lg" fontWeight="medium" mt={5}>
            {`My current toolset includes Vue, React, Redux, Node and other various
          frameworks, libraries and technologies related to them.`}
          </Text>
          <Text fontSize="lg" fontWeight="medium" mt={5}>
            {` Have a project you'd like to discuss?`} <br />
            {`Let's chat`} {` `}
            <Link
              color="green.custom"
              href="mailto:sorianorobertc@gmail.com?Subject=Hello"
              target="_top"
            >
              sorianorobertc@gmail.com
            </Link>
          </Text>
          <Heading as="h2" size="lg" color="slate.lighter" mt={5}>
            {`Some Things I've Built`}
          </Heading>

          {error ? (
            <Text mt={5}>An error occurred. Please refresh.</Text>
          ) : (
            <SimpleGrid columns={[1, null, 2]} spacing={5} mt={5}>
              {data
                ? data.map((item, idx) => <ProjectCard project={item} key={idx} />)
                : [...Array(6).keys()].map((item) => <ProjectSkeleton key={item} />)}
            </SimpleGrid>
          )}

          <Center mt={5}>
            <Button
              size="lg"
              _hover={{}}
              _active={{}}
              _focus={{}}
              borderColor="green.custom"
              color="green.custom"
              variant="outline"
              onClick={() => window.open('https://github.com/wobsoriano', '_blank')}
            >
              More on GitHub
            </Button>
          </Center>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
