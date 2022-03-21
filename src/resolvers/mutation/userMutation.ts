
const { prisma } = require('../../database')
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
export default {
  Mutation: {
    signUpUser: async (parent, args, context) => {
      const postData = args.data.posts?.map((post) => {
        return { title: post.title, content: post.content || undefined }
      })
      const password = await bcrypt.hash(args.data.password, 10)
      const user = await prisma.user.create({
        data: {
          ...args.data,
          password,
          posts: {
            create: postData,
          },
        },
      })
      const token = jwt.sign({ userId: user.id }, `${process.env.APP_SECRET}`)
      return {
        token,
        user,
      }
    },


  }



}
