import { useRef } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

export default function Jobform() {
  const formElement = useRef();
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      const formData = Object.fromEntries(form.entries());
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      await res.json().then(
        toast({
          title: 'Your new job is added.',
          description: "We've added your job to public to see.",
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
      );
      formElement.current.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} minW="500px" maxW="500px" py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Hire best talents
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit} ref={formElement}>
                <FormControl mb={6} id="company name" isRequired>
                  <FormLabel>Company Name</FormLabel>
                  <Input name="company" type="text" />
                </FormControl>
                <FormControl mb={6} id="job title" isRequired>
                  <FormLabel>Job title</FormLabel>
                  <Input name="title" type="text" />
                </FormControl>
                <FormControl mb={6} id="experience" isRequired>
                  <FormLabel>Years of experience</FormLabel>
                  <Input name="experience" type="number" />
                </FormControl>
                <FormControl mb={6} id="website" isRequired>
                  <FormLabel>Company website</FormLabel>
                  <Input name="website" type="text" />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={'green.400'}
                    color={'white'}
                    _hover={{
                      bg: 'green.500',
                    }}
                  >
                    Hire a talent
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
