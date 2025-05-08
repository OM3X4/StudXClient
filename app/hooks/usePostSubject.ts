import { toast } from "sonner";
import refreshToken from "./refreshToken";
import { useMutation } from "@tanstack/react-query";


async function postSubject(data: any) {
    console.log(data)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subject/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(data)
    })

    if (response.status == 401) {
        const result = await response.json()
        if (result.detail == "Given token not valid for any token type") {
            console.log("401")
            await refreshToken();
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subject/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify(data)
            })
            return null
        }
    }

    if (!response.ok) {
        throw new Error("Failed to post the subject")
    }

    return null;
}

export default function usePostSubject(){
    return useMutation({
        mutationFn: (data : any) => postSubject(data),
        onSuccess: () => {
            toast.success("Subject Created")
        },
        onError: (error) => {
            toast.error(`${error}`)
        }
    })
}