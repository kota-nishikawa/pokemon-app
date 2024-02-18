export const getAllPokemon = async (url:string) => {
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> resolve(data))
    })
};
export const getPokemon = async (url: string) => {
    return new Promise((resolve,reject ) =>{
        fetch(url)
        .then((res) => res.json())
        .then((data)=> {
            resolve(data)
        })


    })
}