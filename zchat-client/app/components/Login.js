 'use client'

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
const Login = () => {
    const [variant, setVariant]=useState('LOGIN')
    const [loading, setLoading]=useState(false)
const toggleVariant = useCallback(() => {
    if(variant==='LOGIN'){
        setVariant('REGISTER')
    }else{
        setVariant("LOGIN")
    }
},[variant])

const {} = useForm ({
    defaultValues:{
        name:'',
        email:'', 
        password:''
    }
})

    return (
        <div>
        </div>
    );
};

export default Login;