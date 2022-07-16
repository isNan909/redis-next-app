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
} from '@chakra-ui/react';

export default function Jobform() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
  };

  return (
    <div>
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
              <form onSubmit={handleSubmit}>
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
                    Sign up
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
