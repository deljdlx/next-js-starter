import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const typeDefs = `
  type Post {
    id: String!
    title: String!
    content: String!
    author: User
  }

  type User {
    id: String!
    email: String!
    posts: [Post]
  }

  type Query {
    posts: [Post]
    postsByAuthor(authorId: String!): [Post]
  }

  type Mutation {
    createPost(title: String!, content: String!, authorId: String!): Post
    updatePost(id: String!, title: String, content: String): Post
    deletePost(id: String!): Post
  }


`;


/*
query GetPosts {
  posts {
    id
    title
    content
    author {
      id
      email
    }
  }
}

query GetPostsByAuthor($authorId: String!) {
  postsByAuthor(authorId: $authorId) {
    author {
      id
      email
    }
    id
    title
    content
  }
}

{
  "authorId": "0826c91c-ee98-424b-a67c-909dc47982a6"
}

// =======================================================

mutation CreatePost {
  createPost(title: "Nouveau post", content: "Ceci est un contenu", authorId: "0826c91c-ee98-424b-a67c-909dc47982a6") {
    id
    title
    content
    author {
      id
      email
    }
  }
}

// =======================================================

mutation UpdatePost {
  updatePost(
    id: "ce107ca6-17c0-447b-9616-597cd3eff891"
    title: "Nouveau titre mis à jour"
    content: "Contenu mis à jour"
  ) {
    id
    title
    content
    author {
      email
    }
  }
}

// =======================================================

mutation DeletePost {
  deletePost(id: "ce107ca6-17c0-447b-9616-597cd3eff891") {
    id
    title
    content
  }
}


*/


const resolvers = {
  Query: {
    posts: async () => {
      return await prisma.post.findMany({ include: { author: true } });
    },
    postsByAuthor: async (_parent: any, args: { authorId: string }) => {
      return await prisma.post.findMany({
        where: { authorId: args.authorId },
        include: { author: true },
      });
    },
  },
  Mutation: {
    createPost: async (_parent: any, args: { title: string, content: string, authorId: string }) => {
      return await prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
          authorId: args.authorId,
        },
        include: { author: true },
      });
    },
    updatePost: async (_parent: any, args: { id: string; title?: string; content?: string }) => {
      return await prisma.post.update({
        where: { id: args.id },
        data: {
          title: args.title ?? undefined,
          content: args.content ?? undefined,
        },
        include: { author: true },
      });
    },
    deletePost: async (_parent: any, args: { id: string }) => {
      return await prisma.post.delete({
        where: { id: args.id },
      });
    },
  },
};



console.log(process.env.NODE_ENV);


const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
  plugins: process.env.ENABLE_APOLLO_STUDIO !== "on"  ? [ApolloServerPluginLandingPageDisabled()] : [],
});





export default startServerAndCreateNextHandler(server);
