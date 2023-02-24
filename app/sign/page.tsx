import {
  Box,
  Button,
  Card,
  CardBody,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import SignatureModal from "components/Modal/SignatureModal";
import { NextPage } from "next";

const Sign: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <SignatureModal isOpen={isOpen} onClose={onClose} />
      <Card>
        <CardBody>
          <VStack>
            <Text>Create signature to sign documents</Text>
            <Text>Signatures are stored on the blockchain.</Text>
            <Button onClick={onOpen} variant="primary">
              Create
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Sign;
