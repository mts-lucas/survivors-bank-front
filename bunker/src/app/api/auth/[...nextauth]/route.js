import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const nextAuthOptions = {
    providers: [
        CredentialsProvider({
          name: 'BunkerAPI',
          credentials: {
            username: { label: "username", type: "text"},
            password: { label: "password", type: "password" }
          },
          async authorize(credentials, req) {
            const res = await fetch("https://bunkerapi.onrender.com/bunker/api/v1/login/", {
                method: 'POST',
                body: JSON.stringify({
                    username: credentials?.username,
                    password: credentials?.password,
            }),
                headers: { "Content-Type": "application/json" }
            })

            const user = await res.json()
    
            if (res.ok && user) {
                return user
            }
            return null
          }
        })
      ],
}

const handler = NextAuth(nextAuthOptions)
  
export { handler as GET, handler as POST }