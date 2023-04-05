import kpi from "../models/kpi.js";

const kpiController = {
    getKpis: async (req, res) => {
        try{
            const kpis = await kpi.find();

            res.status(200).json({
                data: kpis
            })

        } catch(err) {
            res.status(404).json({
                message: err.message
            })
        }
    },
}

export default kpiController;