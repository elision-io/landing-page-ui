import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import SignatureCanvas from "react-signature-canvas";

export interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignatureModal({
  isOpen,
  onClose,
}: SignatureModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Signature</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg="elision.700">
          <VStack spacing={5}>
            <Text>Create signature to sign documents.</Text>
            <Text>Signatures are stored on the blockchain.</Text>
            <Divider orientation="horizontal" mb={"3"} />
            <SignatureCanvas
              penColor="white"
              canvasProps={{
                width: "auto",
                height: "auto",
                justifyContent: "center",
                alignContent: "center",
              }}
            />
          </VStack>
        </ModalBody>

        <ModalFooter bg="elision.100">
          <Button variant="secondary" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="secondary">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
