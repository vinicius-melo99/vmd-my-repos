import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Container, Form, SubmitButton } from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa';
import githubApiRequest from '../../api/githubApiRequest';
import { AxiosResponse } from 'axios';
import { RepoType } from '../../types';

const Home = () => {
  const [repoSearch, setRepoSearch] = useState<string>('');
  const [repositories, setRepositories] = useState<RepoType[]>([]);
  const inputRepo = useRef<HTMLInputElement>(null);

  const searchRepo = useCallback(() => {
    (async () => {
      const { data }: AxiosResponse<RepoType> =
        await githubApiRequest(repoSearch);

      const newRepo: RepoType = {
        full_name: data.full_name,
      };

      setRepositories([...repositories, newRepo]);
      setRepoSearch('');
      inputRepo.current?.focus();
    })();
  }, [repoSearch, repositories]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepo();
  };

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setRepoSearch(value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const enter = 'Enter';

    if (key === enter) searchRepo();
  };

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="adicionar repositórios"
          autoFocus
          value={repoSearch}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          ref={inputRepo}
        />

        <SubmitButton>
          <FaPlus color="#fff" size={15} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Home;
