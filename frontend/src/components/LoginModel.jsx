import React from 'react'
import { FiX } from "react-icons/fi";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import api from '../utils/axios';
function LoginModel({ onClose ,setUser}) {

    const handleGoogleAuth = async () => {
        try {
            const result = await signInWithPopup(auth , provider)
            const token = await result.user.getIdToken()

            const response = await api.post("/api/auth/login" , {token})
          
            setUser(response?.data?.user)
            onClose()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4'>
            <div className='relative w-full max-w-sm
        bg-[#0F0F1A]/90 backdrop-blur-2xl
        border border-violet-500/20
        rounded-2xl
        overflow-hidden
        shadow-[0_8px_60px_rgba(124,58,237,0.2)]'>

                <div className='absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-transparent pointer-events-none' />

                <div className='relative p-7'>
                    <button
                        onClick={onClose}
                        className='absolute top-4 right-4
              text-[#F1F0FF]/30 hover:text-[#F1F0FF]
              transition-colors'><FiX size={16} /></button>

                    <h2 className='text-lg font-bold text-center mb-2 text-[#F1F0FF]'>
                        Sign In to {" "}
                        <span className='font-extrabold text-lg tracking-tight text-violet-300'>PrepVault</span>
                    </h2>
                    <p className='text-[#F1F0FF]/45 text-center text-xs'>
                        Continue your AI interview journey
                    </p>

                    <div className='mt-7'>
                        <motion.button
                        onClick={handleGoogleAuth}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className='w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-violet-500/20 bg-violet-500/10 backdrop-blur-md hover:border-violet-500/35 hover:bg-violet-500/[0.15] shadow-inner transition-all'
                        >
                            <FcGoogle size={18}/>
                            <span className='text-[#F1F0FF] font-medium text-sm'>
                                Continue with Google
                            </span>


                        </motion.button>
                    </div>
                </div>

                <div className='relative border-t border-violet-500/15 bg-[#09090F]/50 p-4 text-center'>
                <p className='text-[#F1F0FF]/30 text-xs'>
                Secure authentication powered by Firebase
                </p>
                </div>




            </div>

        </div>
    )
}

export default LoginModel
