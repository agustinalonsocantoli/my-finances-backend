import transaction from "../models/transaction.js";

const transactionController = {
    getTransactions: async (req, res) => {
        try{
            const transactions = await transaction.find()
            .limit(50)
            .sort({ createdOn: -1 });

            res.status(200).json(transactions);

        } catch(err) {
            res.status(404).json({
                message: err.message
            });
        }
    },
}

export default transactionController;