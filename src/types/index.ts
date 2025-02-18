export type RepoType = {
  full_name: string;
};

export type SubmitButtonProps = {
  loading: number;
};

export type RepoListType = {
  repositories: RepoType[];
  deleteRepo: (name: string) => void;
};
