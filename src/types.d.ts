declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'

declare const process: {
  env: {
    NODE_ENV: 'development' | 'production'
    [key: string]: any
  }
}

// type ProjectGlobal = {
//   baseUrl: string
// }

// declare const PROJECT_GLOBAL: ProjectGlobal
