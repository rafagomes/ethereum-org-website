import React, { useContext } from "react"
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react"

import { QuizzesHubContext } from "./context"

interface IProps extends ModalProps {
  children: React.ReactNode
}

const QuizzesModal: React.FC<IProps> = ({ children, ...rest }) => {
  const { status: quizStatus } = useContext(QuizzesHubContext)

  const statusColor =
    quizStatus === "neutral"
      ? "neutral"
      : quizStatus === "success"
      ? "success.light"
      : "error.light"

  return (
    <ChakraModal
      isCentered
      size={{ base: "full", md: "xl" }}
      scrollBehavior="inside"
      {...rest}
    >
      <ModalOverlay bg="blackAlpha.700" hideBelow="md" />

      <ModalContent justifyContent="center" bg={statusColor}>
        <ModalCloseButton size="lg" p={6} zIndex={1} />
        {children}
      </ModalContent>
    </ChakraModal>
  )
}

export default QuizzesModal
