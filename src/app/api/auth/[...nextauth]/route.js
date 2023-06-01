import SignToken from "@/utils/SignToken";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

export const authoptions = {
    pages: {
        signIn: '/login'
    },
    providers:[
        CredentialsProvider({
            id: "credentials-login",
            async authorize(credentials, req) {
                const user = {
                    "email": credentials?.email,
                }
                console.log(user)
                if(user) {
                    return user
                }else{
                    return null
                }
            }
        }),
        CredentialsProvider({
            id: "credentials-signup",
            async authorize(credentials, req) {
                const user = {
                    "email": credentials?.email,
                }
                console.log(user)
                if(user) {
                    return user
                }else{
                    return null
                }
            }
        }),
        GoogleProvider({
            id: "google",
            checks: 'both',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
            },

            async authorize(credentials, req) {
                return true;
            }
        })
    ],

    secret: process.env.NEXT_PUBLIC_JWT_SECRET,

    callbacks: {
        async jwt({ token, user, account }) {
            
            if (account | user) {
                const TOKEN = await SignToken(user?.email);
                user.accessToken = TOKEN;
            }

            return {...token, ...user};
        },

        async session({ session, token }) {
            session.user = token;
            return session;
        }
    },

    events: {
        async signIn(message) {
            console.log(message?.user);
            // const userExists = await User.findOne({ 'email': message.user.email }).select('-password')

            // if (!userExists) {
            //     const data = {
            //         name: message.user.name,
            //         email: message.user.email
            //     };
            //     const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/authenticate/signup`, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify({ ...data })
            //     })
            //     const response = await res.json()
            //     message.user.accessToken = response.AuthToken
            // }
        }
    }
}

const handler =  NextAuth(authoptions);

export { handler as GET, handler as POST}