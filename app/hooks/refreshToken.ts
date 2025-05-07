import { toast } from "sonner"
export default async function(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/token/refresh/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({refresh: localStorage.getItem('refresh_token')})
    })

    if(!response.ok) {
        toast.error("Failed to refresh")
        throw new Error("Failed to refresh")
    }

    const result = await response.json()
    if(result.access){
        localStorage.setItem('access_token', result.access)
        localStorage.setItem('refresh_token', result.refresh)
    }
}