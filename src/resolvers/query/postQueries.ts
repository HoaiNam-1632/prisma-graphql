
import { DateTimeResolver } from 'graphql-scalars'
const { prisma } = require('../../database')
export default {

  Query: {
    postById: async (parent, args, context) => {
      return prisma.post.findUnique({
        where: { id: args.id || undefined },
        include: {
          author: true
        },
      })
    },
    feed: async (parent, args, context,) => {
      const or = args.searchString
        ? {
          OR: [
            { title: { contains: args.searchString } },
            { content: { contains: args.searchString } },
          ],
        }
        : {}
      return prisma.post.findMany({
        where: {
          ...or,
        },
        include: {
          author: true
        },
        take: args?.take || undefined,
        skip: args?.skip || undefined,
        orderBy: args?.orderBy,
      })
    },
    draftsByUser: async (parent, args, context,) => {
      return context.prisma.user
        .findUnique({
          where: {
            id: args.userUniqueInput.id || undefined,
            email: args.userUniqueInput.email || undefined,
          },
        })
        .posts({
          where: {
            published: false,
          },
        })
    },
  },
  DateTime: DateTimeResolver,

}





