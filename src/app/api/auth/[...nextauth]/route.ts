import prisma from '../../utils/prisma';
import { compare } from 'bcrypt'
import { randomUUID, randomBytes } from 'crypto'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Auth } from '../../interface/interface'

const authConfig : Auth = {
  key : process.env.NEXT_AUTH_SECRET || '' ,
}

export const authOptions: NextAuthOptions = {
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  secret : authConfig.key,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 *60,
    updateAge: 24 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@gmail.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Please fill your email and password')
          
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          throw new Error('Do not have this account')
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
           throw new Error('Password is incorrect')
        }

        return {
          id: user.user_id + '',
          email: user.email,
          name: user.username,
          role: user.role,
          randomKey: "Shooting_Majestic_Star_Dragon",
          iat : Math.floor(Date.now() / 1000),
          exp : Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30)
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          randomKey: token.randomKey
        }
      }
    },
    jwt: ({ token, user }) => {
      console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          role: u.role,
          randomKey: u.randomKey
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }