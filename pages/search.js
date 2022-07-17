import { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Input, Text } from '@chakra-ui/react';

export default function SearchTalent() {
  const [results, setResults] = useState([]);
  const handleChange = async (e) => {
    const query = e.target.value;
    const params = new URLSearchParams({ query });
    const data = await fetch('/api/getjobs?' + params);
    const response = await data.json();
    console.log(response.jobs);
    setResults(response['jobs']);
  };
  return (
    <div>
      <Head>
        <title>Hire talents</title>
        <meta name="description" content="Hire best talents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container my="5">
        <>
          <Text fontWeight="medium" mb="10px">
            Search a job:
          </Text>
          <Input onChange={handleChange} placeholder="" size="md" />
        </>
        {results && results?.map((job) => {
          return (
            <Box mt="8">
              <Text fontWeight="medium" mb="10px">
                {job.title}
              </Text>
              <Text fontWeight="medium" mb="10px">
                {job.company}
              </Text>
              <Text fontWeight="medium" mb="10px">
                {job.experience}
              </Text>
              <Text fontWeight="medium" mb="10px">
                {job.website}
              </Text>
            </Box>
          );
        })}
        {!results.length && (
          <Text fontWeight="medium" mb="10px">
            No results
          </Text>
        )}
      </Container>
    </div>
  );
}
