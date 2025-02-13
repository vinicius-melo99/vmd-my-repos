import { githubApi } from './baseUrl';

export default async (repo: string) => {
  const response = await githubApi.get(`repos/${repo}`);
  return response;
};
