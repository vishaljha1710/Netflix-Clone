import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Iv1.2601ce26fd0a15ff',
            clientSecret: 'f4a7c69700032873b569c6bc7f255f181af7cc91'

        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session?.user?.name.split(" ").join(" ").toLocaleLowerCase();

            Session.user.uid = token.sub

            return session
        },

    },
    secret: "default_secret_key"
};
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }