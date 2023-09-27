import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import toast from "react-hot-toast"



export const useLogin = () =>{
    const [error, setError] = useState(null)
    
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async(email, password)=>{
        setIsLoading(true);
        setError(null)
        
        const data={
            'email' : email,
            'password' : password,
            
        }
        const response = await fetch('http://localhost:8000/auth/chef/login/',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
            })

            const json = await response.json()

            if(!response.ok)
            {
                setIsLoading(false)
                setError(json.message)
                
                
                console.log(error);
                console.log(json.message)
            }

            if(response.ok)
            {
                // save user to local storage
                localStorage.setItem('user', JSON.stringify(json))

                //update AuthContext
                dispatch({type:'LOGIN', payload: json})

                setIsLoading(false)
                toast.success("Logged in Successfully")
               
            }

            
    }

    return {login, error, isLoading }
}