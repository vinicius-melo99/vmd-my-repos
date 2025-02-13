import { FormEvent } from 'react';
import { Container, Form, SubmitButton } from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa';

const index = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>
      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="adicionar repositórios" autoFocus />
        <SubmitButton>
          <FaPlus color="#fff" size={15} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default index;
