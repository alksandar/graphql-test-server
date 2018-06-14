const garage = {
    async createGarage(parent, {name, echarger, totalSpaces, gateways, price, position}, context, info) {
        return context.db.mutation.createGarage({
            data: {
                name,
                echarger,
                totalSpaces,
                freeSpaces: totalSpaces,
                gateways,
                price,
                position
            },
        }, info)
    },

    async createPosition(parent, { longitude, lattitude, garageId }, context, info) {
        return context.db.mutation.createPosition({
            data: {
                longitude,
                lattitude,
                garage: {
                    connect: { id: garageId }
                }
            }
        });
    }
}

module.exports = { garage }
