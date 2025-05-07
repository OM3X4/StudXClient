import { useMutation } from "@tanstack/react-query";

async function fetchLogin({ username , password} : any) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/token/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    const result = await response.json()

    if(result.access){
        localStorage.setItem('access_token', result.access)
        localStorage.setItem('refresh_token', result.refresh)
    }

}

export function useLogin() {
    return useMutation({
        mutationFn: fetchLogin,
        onSuccess: () => {
            window.location.href = '/dashboard'
            console.log('success login' , localStorage.getItem('access_token'))
        }
    })
}