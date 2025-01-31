import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// test providers list http://localhost:3000/api/auth/providers
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Mot de passe", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({ where: { email: credentials.email } });
                if (!user) return null;

                const isValidPassword = await bcrypt.compare(credentials.password, user.password);
                if (!isValidPassword) return null;

                return { id: user.id, email: user.email };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email;
            }
            return session;
        }
    },
    trustHost: true,
    secret: process.env.NEXTAUTH_SECRET,
};

// ✅ Export de NextAuth avec authOptions
export default NextAuth(authOptions);
