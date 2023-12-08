import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from "next-auth/jwt";


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

            const user = await res.json();
    
            if (res.ok && user) {
                return user
            }
            return null
          }
        })
      ],
    callbacks: {
      async jwt({ token, user, account, profile, isNewUser}) {
    
        if (user) {
          token.accessToken = user.access
        }

        return token
      },

      async session({session, token}){

        session.accessToken = token.accessToken;
        const API_URL = 'https://bunkerapi.onrender.com/bunker/api/v1/';

        const config = {
          headers: { Authorization: `Bearer ${token.accessToken}` },
          method: 'GET',
        };

        let userData = await fetch(`${API_URL}whoiam`, config)

        session.user = await userData.json()

        return session;

      },
    }

}

const handler = NextAuth(nextAuthOptions)
  
export { handler as GET, handler as POST }