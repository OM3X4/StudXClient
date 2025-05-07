import { useQuery } from "@tanstack/react-query";


async function fetchUserData(){
    if(!localStorage.getItem('access_token')){
        return "no token";
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('access_token')}1`
        }
    })

    if(response.status === 401){
        const result = await response.json()
        if(result.detail == "Given token not valid for any token type"){

        }
    }


    const result = await response.json()
    console.log(result)
    return result
}

export default function useUserData(){

    return useQuery({
        queryKey: ['userData'],
        queryFn: fetchUserData
    })

}