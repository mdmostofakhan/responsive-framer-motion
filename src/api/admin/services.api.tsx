import axios from "axios"

 export const getServices = async () => {
   return await axios.get("https://jsonplaceholder.typicode.com/users")
    
}

//  export const getServices = async () => {
//    const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())

//     if(!res.success){
//         throw new Error("something went wrong")
//     }

//     return res;
// }