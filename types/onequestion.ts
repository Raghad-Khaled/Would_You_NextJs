interface option {
    votes: string[]
    text: string  
}

export type OneQ ={ 
    id: string
    author: string
    avatarURL:string
    timestamp:number
    optionOne: option
    optionTwo:option
}