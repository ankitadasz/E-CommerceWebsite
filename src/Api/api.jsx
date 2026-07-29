import axios from "axios";
export const Api = axios.create({
    baseURL:"https://fakestoreapi.com",
});
export const getData = async() =>{
    const res = await Api.get("/products");
    console.log(res.data)
    return res.data;
    
}
