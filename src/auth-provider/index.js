'use client'

import {sessionProvider} from 'next-auth/react'

export default function NextAuthProvider({children}){
    return <sessionProvider>{children}</sessionProvider>
}