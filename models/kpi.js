import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const dayScheme = new Schema({
    date: String,
    revenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
}, 
{
    toJSON: {
        getters: true
    }
});

const monthSchema = new Schema({
    month: String,
    revenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    operationalExpenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    nonOperationalExpenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },

}, 
{
    toJSON: {
        getters: true
    }
});

const kpiSchema = new Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    totalRevenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    totalExpenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100
    },
    expensesByCategory: {
        type: Map,
        of: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        }
    },
    monthlyData: [monthSchema],
    dailyData: [dayScheme],
},
{
    timestamps: true,
    toJSON: {
        getters: true
    }
});

const kpi = mongoose.model("kpi", kpiSchema);

export default kpi;