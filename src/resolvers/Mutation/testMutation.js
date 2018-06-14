const test = {
    async createTestMutation(parent, args, ctx, info) {
        return ctx.db.mutation.createTestMutation({
            data: {
                ...args
            }
        }, info)
    },

    async createTestType(parent, { dummyStuff, testMutationId }, ctx, info) {
        return ctx.db.mutation.createTestType({
            data: {
                dummyStuff,
                testMutation: {
                    connect: { id: testMutationId }
                }
            }
        }, info)
    }
}

module.exports = { test }