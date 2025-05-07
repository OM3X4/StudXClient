import { useQuery } from "@tanstack/react-query";
import refreshToken from "./refreshToken";


async function fetchUserData(){
    if(!localStorage.getItem('access_token')){
        return "no token";
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    })

    if(response.status === 401){
        const result = await response.json()
        if(result.detail == "Given token not valid for any token type"){
            refreshToken();
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access_token')}1`
                }
            })

            if(!response.ok) {
                throw new Error("Failed to get user data")
            }
            const result = await response.json()
            return result
        }else{
            throw new Error("Failed to get user data")
        }
    }


    const result = await response.json()
    console.log(result)
    return result
}

export default function useUserData(){

    return useQuery({
        queryKey: ['userData'],
        queryFn: fetchUserData,
        retry: false
    })

}