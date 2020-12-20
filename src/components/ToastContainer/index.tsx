import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      <AnimatePresence>
        {messages.map(message => (
          <Toast key={message.id} message={message} />
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default ToastContainer;
