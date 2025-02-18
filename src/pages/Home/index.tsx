import { ChangeEvent, FormEvent, KeyboardEvent, useRef, useState } from 'react';
import { Container, Form, SubmitButton } from './styles';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import githubApiRequest from '../../api/githubApiRequest';
import { AxiosError, AxiosResponse } from 'axios';
import { RepoType } from '../../types';
import { sweetError } from '../../aux/sweetAlert';
import RepoList from '../../components/RepoList/RepoList';

const Home = () => {
  const [repoSearch, setRepoSearch] = useState<string>('');
  const [repositories, setRepositories] = useState<RepoType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRepo = useRef<HTMLInputElement>(null);

  const searchRepo = async () => {
    const repoExists = checkIfRepoExists();

    if (repoExists) {
      setRepoSearch('');
      inputRepo.current?.focus();
      return sweetError('Repositório ja existe');
    }

    try {
      setLoading(true);
      const { data }: AxiosResponse<RepoType> =
        await githubApiRequest(repoSearch);

      const newRepo: RepoType = {
        full_name: data.full_name,
      };

      setRepositories([...repositories, newRepo]);
    } catch (e) {
      const { status, message } = e as AxiosError;

      if (status === 404) {
        return sweetError(`${status}: Repositório não encontrado`);
      }

      sweetError(`${status}: ${message}`);
    } finally {
      setRepoSearch('');
      inputRepo.current?.focus();
      setLoading(false);
    }
  };

  const deleteRepo = (name: string): void => {
    const filteredRepoList = repositories.filter(
      (repo) => repo.full_name !== name
    );

    setRepositories(filteredRepoList);
  };

  const checkIfRepoExists = (): boolean => {
    const alreadyExists = repositories.find(
      (repo) => repo.full_name === repoSearch
    );

    if (alreadyExists) {
      return true;
    }

    return false;
  };

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

    if (repoSearch && key === enter && !loading) {
      searchRepo();
    }
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

        <SubmitButton disabled={!repoSearch || loading}>
          {!loading ? (
            <FaPlus color="#fff" size={15} />
          ) : (
            <FaSpinner className="loading" color="#fff" size={15} />
          )}
        </SubmitButton>
      </Form>
      <RepoList repositories={repositories} deleteRepo={deleteRepo} />
    </Container>
  );
};

export default Home;
