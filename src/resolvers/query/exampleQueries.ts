
const { prisma } = require('../../database')
export default {

    Query: {
        example: async (parent, args, context) => {
            const example = { sayHi: "hello world"}
            return example
        },
    }
}





