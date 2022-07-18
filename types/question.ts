interface option {
    votes: string[]
    text: string  
}

export type Question ={ 
    [key: string]:{
    id: string
    author: string
    timestamp:number
    optionOne: option
    optionTwo:option
}
}