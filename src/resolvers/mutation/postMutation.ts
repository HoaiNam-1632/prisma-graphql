import { ApolloError } from 'apollo-server'
import { DateTimeResolver } from 'graphql-scalars'
const { prisma } = require('../../database')

export default {
  Mutation: {
    createDraft: async (parent, args, context,) => {
      try {
        const { userId } = context
        const createPost = await prisma.post.create({
          data: {
            title: args.data.title,
            content: args.data.content,
            authorId: userId,
          },
          include: {
            author: true
          }
        })
        return createPost
      }
      catch (e) {
        console.log(e)
        return new ApolloError("this email invalid")

      }
    },
    togglePublishPost: async (
      parent,
      args,
      context,
    ) => {
      try {
        const post = await prisma.post.findUnique({
          where: { id: args.id || undefined },
          select: {
            published: true,
          },
        })

        return prisma.post.update({
          where: { id: args.id || undefined },
          data: { published: !post?.published },
        })
      } catch (error) {
        throw new Error(
          `Post with ID ${args.id} does not exist in the database.`,
        )
      }
    },
    incrementPostViewCount: async (
      parent,
      args,
      context,
    ) => {
      return prisma.post.update({
        where: { id: args.id || undefined },
        data: {
          viewCount: {
            increment: 1,
          },
        },
        include: {
          author: true
        }
      })
    },
    deletePost: async (parent, args, context) => {
      return context.prisma.post.delete({
        where: { id: args.id },
      })
    },
  },
  DateTime: DateTimeResolver,

}





