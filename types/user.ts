type StringMap= {
    [key: string]: string|undefined
}

export  type User ={ 
    [key: string]:{
    id: string
    name: string
    avatarURL: string
    answers : StringMap
    questions: Array<string>
   }
}