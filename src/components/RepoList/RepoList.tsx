import { MouseEvent } from 'react';
import { RepoListType } from '../../types';
import { DeleteButton, List, NoRepo } from './styles';
import { FaBars, FaTrash } from 'react-icons/fa';

const RepoList = ({ repositories, deleteRepo }: RepoListType) => {
  const handleButton = ({
    currentTarget: { name },
  }: MouseEvent<HTMLButtonElement>) => {
    deleteRepo(name);
  };

  if (!repositories.length) {
    return <NoRepo>Busque por um repositório...</NoRepo>;
  }

  return (
    <List>
      {repositories.map((repo) => (
        <li key={repo.full_name}>
          <span>
            <DeleteButton name={repo.full_name} onClick={handleButton}>
              <FaTrash size={16} color="red" />
            </DeleteButton>
            {repo.full_name}
          </span>
          <a href="">
            <FaBars size={20} />
          </a>
        </li>
      ))}
    </List>
  );
};

export default RepoList;
