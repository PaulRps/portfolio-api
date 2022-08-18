import {Company} from './company.dto'

export interface JobExperience {
  company: Company
  role: string
  beginAt: string
  endAt: string
  description: string[]
  squad: string
}
