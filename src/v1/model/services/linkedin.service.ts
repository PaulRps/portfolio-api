import {Injectable} from '@nestjs/common'
import {Education} from '../dto/education.dto'
import {JobExperience} from '../dto/job-experience.dto'
import {LinkedinProfileDto} from '../dto/linkedin-profile.dto'

@Injectable()
export class LinkedinService {
  async getProfile(): Promise<LinkedinProfileDto> {
    return {
      fulllName: 'Paulo Ricardo Pereira da Silva',
      shortName: 'Paulo Silva',
      jobPosition: 'Full Stack Software Engineer',
      email: 'paulosilvajp0@gmail.com',
      location: {
        city: 'João Pessoa',
        state: 'PB'
      },
      linkedinUrl: 'https://www.linkedin.com/in/paulo-silva-a981a9a7/',
      githubUrl: 'http://www.github.com/paulrps',
      portfolioUrl: 'https://paulrps-dev.netlify.app/'
    }
  }

  async getEducation(): Promise<Education[]> {
    return [
      {
        name: 'Msc Computer Scienci',
        institution: {
          name: 'Universidade Federal da Paraíba',
          location: {country: 'Brazil'}
        },
        beginAt: 'feb 2018',
        endAt: 'may 2020',
        description:
          'I developed a Machine Learning model (Python, Keras and Tensorflow) based on Convolutional Neural Network to detect biometric features (singularities) from fingerprint images. Also, i developed desktop application (C# and Windows Form), Fingerprint-Label-Mark, to mark singularities on images and create ground truth databases with them.'
      },
      {
        name: 'Bachelor Computer Scienci',
        institution: {
          name: 'Universidade Federal da Paraíba',
          location: {country: 'Brazil'}
        },
        beginAt: 'nov 2012',
        endAt: 'jun 2017',
        description:
          'I have been member in the Programa de Educação Tutorial group for about 5 years, there i have  done teaching, researching and extras activities. Also, i have participated initiation scientific program and i have worked in digital image processing with fingerprint singularities extraction for 2 years.'
      }
    ]
  }

  async getExperience(): Promise<JobExperience[]> {
    return [
      {
        role: 'Senior Software Engineer',
        company: {
          name: 'Certisign',
          location: {
            city: 'São Paulo',
            country: 'Brazil'
          }
        },
        squad: 'Innovation team',
        beginAt: 'Dec 2020',
        endAt: 'Present',
        description: [
          'I have created a brand new mobile product about digital identity. I have developed for Android platform and i have integrated external services like Firebase, Cloud Functions, biometric REST APIs and SDKs. I have used some technologies like Google Cloud Platform to launch REST APIs in Docker containers and I have designed a messenger architecture to integrate Firebase Cloud Message and a NodeJs API through HTTP Cloud Functions. Also, i have created (with SOLID principles) a tested backend for frontend (BFF) NestJs REST API to provide data to a Flutter mobile app.',
          'I have worked in a team with an agile environment and SCRUM and i have been mainly responsible to guide the mobile development in the team but it is not limited to it.'
        ]
      },
      {
        role: 'Software Engineer II',
        company: {
          name: 'Indra Company',
          location: {
            city: 'Paraíba',
            country: 'Brazil'
          }
        },
        squad: 'Government of state of Paraíba team',
        beginAt: '2018',
        endAt: '2020',
        description: [
          'I developed new features of a system used by Paraíba’s citizens (there are about 4 million people) for managing processes related to public government services like new car purchase tax exemption. I developed a query service to help citizens search all kinds of processes. I developed process flows in Red Hat JBPM and I used Spring Boot, Java, Oracle database, Angular, Typescript and Red Hat JBPM engine. The goal of that application was to save trees by making the process on paper into a digital process.',
          'I worked in an agile environment with SCRUM.'
        ]
      },
      {
        role: 'Software Developer I',
        company: {
          name: 'Conductor Tecnologia em Meios de Pagamentos',
          location: {
            city: 'Paraíba',
            country: 'Brazil'
          }
        },
        squad: 'Payment team',
        beginAt: '2017',
        endAt: '2018',
        description: [
          'I developed an integration between a web client and a distributed REST API through webhook with Redis. That API was written in a master slave architecture with Spring Boot and Java, there were some slave processing nodes and one master node with an Angular application interface. The Client was responsible to install custom plugins dynamically in the slave nodes. Those plugins were used to process a big data volume like credit card bills. I developed some plugins, the biggest challenge was to write tuned Microsoft SQL Server queries to be processed concurrently in each slave node to get the best performance.',
          'I worked in an agile environment and  a squad with all roles (PM, PO, and so on).'
        ]
      }
    ]
  }
}
