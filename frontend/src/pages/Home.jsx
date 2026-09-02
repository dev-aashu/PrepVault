import React from 'react'
import { motion } from "motion/react"
import { GiArtificialHive } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import LoginModel from '../components/LoginModel';
import { useState } from 'react';
import dashboard from "../assets/image.png"
import { FiMic, FiFileText, FiBarChart2, FiMap } from "react-icons/fi";
function Home({ setUser }) {
    const [showLogin, setShowLogin] = useState(false)
    return (
        <div className='bg-[#09090F] text-[#F1F0FF] font-sans min-h-screen overflow-x-hidden'>

            {/* navbar */}

            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center justify-between px-5 bg-[#09090F]/80 backdrop-blur-xl border-b border-violet-500/15'>

                <div className='flex items-center gap-2'>

                    <div className='w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center shadow-[0_4px_14px_rgba(124,58,237,0.4)]'>
                        <GiArtificialHive size={15} color='white' /></div>

                    <span className='font-extrabold text-base tracking-tight text-[#F1F0FF]'>PrepVault</span>
                </div>

                <motion.button
                    onClick={() => setShowLogin(true)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className='bg-violet-600 hover:bg-violet-500 text-white font-semibold border border-violet-500/30 rounded-md px-3 py-1.5 text-xs cursor-pointer transition-all shadow-[0_4px_20px_rgba(124,58,237,0.35)] flex items-center gap-2'>
                    Log In <FaArrowRight />

                </motion.button>

            </motion.nav>

            {/* main area */}
            <section className='relative pt-20 pb-14 overflow-hidden bg-[#09090F]'>
                {/* Violet ambient glow */}
                <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/[0.07] blur-[120px] pointer-events-none' />
                <div className='absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-[100px] pointer-events-none' />

                <div className='max-w-4xl mx-auto px-6 text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className='inline-flex items-center px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4'>
                        Multi-Agent Interview Platform

                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.12 }}
                        className='text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4 text-[#F1F0FF] [text-shadow:0_4px_40px_rgba(124,58,237,0.2)]'>
                        Job Interviews<br />
                        <span className="text-violet-400/50">
                            Don't Have to Suck
                        </span><br />
                        Anymore!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className='text-[#F1F0FF]/50 text-sm leading-relaxed max-w-md mx-auto mb-6'>
                        PrepVault is an innovative AI-powered interview preparation platform
                        designed to help job seekers excel in their interviews.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.28 }}>

                        <motion.button
                            onClick={() => setShowLogin(true)}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(124,58,237,0.45)" }}
                            whileTap={{ scale: 0.97 }}
                            className='relative gap-2 overflow-hidden bg-violet-600 hover:bg-violet-500 text-white font-bold px-5 py-2.5 rounded-lg text-xs cursor-pointer border border-violet-400/30 shadow-[0_8px_32px_rgba(124,58,237,0.35)] transition-all'>
                            <span className='flex items-center justify-center gap-2'> Get Started For Free <FaArrowRight /></span>
                            <span className='absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none rounded-lg' />
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className='mt-10 rounded-xl overflow-hidden border border-violet-500/20 shadow-[0_0_80px_rgba(124,58,237,0.15)] max-w-2xl mx-auto'>

                    <img src={dashboard} alt='dashboard img' className='w-full h-auto object-cover block ' />

                </motion.div>

            </section>

            {/* Agents */}
            <section className='py-16 bg-[#09090F]'>
                <div className='max-w-5xl mx-auto px-6'>
                    <div className='text-center mb-10'>
                        <div className='inline-flex items-center px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300 text-xs font-medium mb-4'>
                            AI Powered Agents
                        </div>

                        <h2 className='text-2xl md:text-4xl font-extrabold tracking-tight text-[#F1F0FF] [text-shadow:0_4px_30px_rgba(124,58,237,0.2)]'>
                            Specialized Agents For
                            <span className="block text-violet-400/50">
                                Every Interview Stage
                            </span>
                        </h2>

                        <p className='text-[#F1F0FF]/40 text-sm max-w-2xl mx-auto mt-4 leading-relaxed'>
                            PrepVault combines multiple AI agents that work together
                            to help you build your resume, practice interviews,
                            receive detailed feedback, and follow a personalized roadmap
                            to land your dream job.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            [
                                {
                                    icon: <FiFileText />,
                                    title: "Resume Agent",
                                    desc: "Create ATS-friendly resumes, improve profile strength and maximize interview opportunities.",
                                },
                                {
                                    icon: <FiMic />,
                                    title: "Interview Agent",
                                    desc: "Conduct realistic HR, Technical and Coding interviews with AI-powered simulations.",
                                },
                                {
                                    icon: <FiBarChart2 />,
                                    title: "Feedback Agent",
                                    desc: "Get detailed answer analysis, scoring reports and improvement recommendations.",
                                },
                                {
                                    icon: <FiMap />,
                                    title: "Roadmap Agent",
                                    desc: "Generate personalized learning roadmaps based on goals, skills and performance.",
                                },
                            ].map((agent, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.08 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className='group relative overflow-hidden bg-[#16162A]/80 backdrop-blur-2xl border border-violet-500/15 rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_48px_rgba(124,58,237,0.2)] hover:border-violet-500/35 transition-all'>
                                        <div className='absolute inset-0 bg-gradient-to-br from-violet-500/[0.07] via-transparent to-transparent pointer-events-none'/>

                                        <div className='absolute -top-10 -right-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'/>

                                        <div className='relative'>
                                            <div className='w-11 h-11 rounded-xl bg-violet-500/15 backdrop-blur-md border border-violet-500/25 flex items-center justify-center text-violet-300 text-lg mb-4 shadow-inner'>{agent.icon}</div>

                                            <h2 className='text-base font-bold mb-2 text-[#F1F0FF]'>{agent.title}</h2>

                                            <p className='text-[#F1F0FF]/45 text-xs leading-relaxed'>{agent.desc}</p>
                                        </div>

                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {showLogin && <LoginModel onClose={() => setShowLogin(false)} setUser={setUser} />}

                <footer className='border-t border-violet-500/15 py-6 text-center bg-[#09090F]'>
                <div className='flex items-center justify-center gap-2 mb-1.5'>
                    <div className='w-5 h-5 rounded-md bg-violet-600 flex items-center justify-center shadow-[0_2px_10px_rgba(124,58,237,0.4)]'>
                        <GiArtificialHive size={11} color='white'/>

                    </div>
                    <span className='font-bold text-xs text-[#F1F0FF]/70'>PrepVault</span>
                </div>
                <div className='text-[#F1F0FF]/30 text-xs'>
                © {new Date().getFullYear()} PrepVault · Designed & Built by Aashu
                </div>

                </footer>


        </div>
    )
}

export default Home
