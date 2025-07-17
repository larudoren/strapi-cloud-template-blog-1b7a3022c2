module.exports = () => ({
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            landingPage: true,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: true,
            },
        },
    },
});
