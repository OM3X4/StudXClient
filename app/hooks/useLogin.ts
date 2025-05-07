import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

async function fetchLogin(data : any) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/token/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(!response.ok){
        throw new Error(`Failed to login code ${response.status}`)
    }

    const result = await response.json()

    if(result.access){
        localStorage.setItem('access_token', result.access)
        localStorage.setItem('refresh_token', result.refresh)
    }

}

export function useLogin() {

    const router = useRouter()

    return useMutation({
        mutationFn: (data : any) => fetchLogin(data),
        onSuccess: () => {
            router.push('/dashboard')
            toast.success("Login Success")
        },
        onError: (error) => {
            toast.error(`${error}`)
        }
    })
}