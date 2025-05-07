import { useMutation } from "@tanstack/react-query";
import refreshToken from "./refreshToken";
import useUserData from "./useUserData";
import { toast } from "sonner";


async function fetchLog(data : any){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/log/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(data)
    })

    if (response.status == 401){
        const result = await response.json()
        if(result.detail == "Given token not valid for any token type"){
            refreshToken();
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/log/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify(data)
            })
            if(!response.ok) {
                throw new Error("Failed to get user data")
            }
            const res = await response.json()
            return res
        }
    }

    const result = await response.json()
    return result
}

export default function useLog(){

    const { refetch } = useUserData()

    return useMutation({
        mutationFn: (data : any) => fetchLog(data),
        onSuccess: () => {
            refetch()
            toast.success("Log Success")
        },
        onError: (error) => {
            toast.error(`${error}`)
        }
    })
}