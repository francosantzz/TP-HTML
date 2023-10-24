export function getTasks(){
    return fetch('http://localhost:3000/loles')
    .then(res=>res.json())
    .then(json=>json)
}

export function getOneTask(id){
    return fetch(`http://localhost:3000/loles/${id}`)
    .then(res=>res.json())
    .then(json=>json)
}
export function getProductInState(category){
    return fetch(`http://localhost:3000/loles?category=${category}`)
    .then(res=>res.json())
    .then(json=>json)
}