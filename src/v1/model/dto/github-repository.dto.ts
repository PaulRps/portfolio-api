export interface GithubRepositoryDto {
  name: string
  description: string
  owner: string
  technologies: string[]
  createdAt: string
  url: string
  isFork?: boolean
}
