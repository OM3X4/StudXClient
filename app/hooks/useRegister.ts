import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


async function fetchLogin(data : any) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(!response.ok){
        if(response.status === 400){
            const result = await response.json()
            if(result.username) throw new Error(`username is taken`)
            if(result.email) throw new Error(`email is in valid or taken`)
        }
        throw new Error(`Failed to login code ${response.status}`)
    }

    const result = await response.json()

    if(result.access){
        localStorage.setItem('access_token', result.access)
        localStorage.setItem('refresh_token', result.refresh)
    }

}

export function useRegister() {

    const router = useRouter()

    return useMutation({
        mutationFn: (data : any) => fetchLogin(data),
        onSuccess: () => {
            toast.success("Register Success")
            router.push('/dashboard')
        },
        onError: (error) => {
            toast.error(`${error}`)
        }
    })
}