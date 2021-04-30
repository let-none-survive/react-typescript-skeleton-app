import { GithubUser } from '@/interfaces'
import { GithubResponse } from '@/dto'
import axios, { AxiosResponse } from 'axios'
import _pick from 'lodash/pick'

type Params = {
  queryKey: [string, string]
}

const BASE_URL = 'https://api.github.com'

export const searchUsers = (params: Params): Promise<GithubUser[]> | null => {
  const q = params.queryKey[1]
  if (!q) return null
  return axios(BASE_URL + '/search/users', {
    headers: {
      accept: 'application/vnd.github.v3+json',
    },
    params: {
      q,
      per_page: 10,
    },
  }).then((res: AxiosResponse<GithubResponse>): GithubUser[] => {
    return res.data.items.map((user) => {
      return _pick(user, [
        'id',
        'login',
        'html_url',
        'avatar_url',
        'name',
        'company',
        'blog',
        'location',
        'public_repos',
        'followers',
        'created_at',
      ])
    })
  })
}
