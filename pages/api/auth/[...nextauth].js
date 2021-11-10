import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/Google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    async session({ session, token, user }) {
      session.user?.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

        session.user?.uid = token.sub;
        return session;
    },
  },

  //   theme: {
  // Customize the look and feel of NextAuth
  // (defaults to the standard theme)
  //
  // For example:
  //
  // logo: "https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg",
  // brandColor: "#0070f3",
  // colorScheme: "dark",
  //
  // showNav: false,
  //
  // showHeader: false,
  //
  // showFooter: false,
  //
  //   },
});
