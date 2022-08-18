import {Company} from './company.dto'

export interface Education {
  name: string
  institution: Company
  beginAt: string
  endAt: string
  description: string
}
