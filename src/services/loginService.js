import api from"./api"

export async function login(username,password) {

try{
    const response = await api.post("/auth/login" ,{
      username,
      password
    });

    return response.data
  }catch(error){

    if (error.response){
        if(error.response.status === 400||error.response.status === 401){
            throw new Error("INVALID_CREDENTIALS");
        }
    }
    console.log(error.response?.status)
    throw new Error("API_ERROR")
  }
}
