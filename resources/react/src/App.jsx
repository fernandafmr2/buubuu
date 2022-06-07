import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useCallback, useState } from "react"

function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        fetch('http://localhost:9000/auth/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                name: email,
                password,
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(er => console.error(er.message))

    }, [email, password])

    return (
        <section className="max-w-[1000px] min-w-screen min-h-screen grid place-content-center mx-auto">
            <form className="flex flex-col w-screen p-8 sm:max-w-[600px]" onSubmit={handleSubmit}>
                <h1 className='bg-[#B8DFD8] text-2xl px-3 py-1 -skew-y-2 w-fit'>Sign In</h1>
                <div className="flex flex-col w-full mt-8">
                    <div className="flex justify-between">
                        <label htmlFor="email" className="text-xs">Email</label>
                        <label htmlFor="email" className="text-xs">your@email.com</label>
                    </div>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 text-base border-black border outline-none rounded my-2 transition shadow-c-fifth focus:shadow-none" 
                    />
                    <div className="flex justify-between mt-3">
                        <div className="text-red-600 text-xs opacity-0">Error</div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-5">
                    <div className="flex justify-between">
                        <label htmlFor="password" className="text-xs">Password</label>
                        <label htmlFor="password" className="text-xs">
                            {
                                showPassword
                                    ? 'Your Password'
                                    : '*******'
                            }
                        </label>
                    </div>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 text-base border-black border outline-none rounded my-2 transition shadow-c-fifth focus:shadow-none" 
                    />
                    <div className="flex justify-between mt-3">
                        <div className="text-red-600 text-xs opacity-0">Error</div>
                        <button onClick={() => setShowPassword(prev => !prev)} type="button">
                            {
                                showPassword
                                    ? <FaEyeSlash size={20} />
                                    : <FaEye size={20} />
                            }
                        </button>
                    </div>
                </div>
                <button type="submit" className='mt-8 border w-8/12 sm:w-6/12 ml-auto block px-3 py-2 border-black bg-first shadow-c-fifth transition-all hover:shadow-none active:shadow-none focus:shadow-none'>Login</button>
            </form>
        </section>
    )
}

export default App
