import axios from "axios";
export const Api = axios.create({
    baseURL:"https://fakestoreapi.com",
});
export const getData = async() =>{
    const res = await Api.get("/products");
    return res.data;
    
}
export const singleData = async(id) =>{
    const res=await Api.get(`/products/${id}`);
    console.log(res);
    return res.data;
}

