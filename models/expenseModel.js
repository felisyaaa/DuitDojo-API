const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    },
    namaPengeluaran: {
        type: String,
        required: [true, "Please enter a expense name"]
    },
    besarPengeluaran: {
        type: Number,
        required: true,
        default: 0
    },
    tanggal: {
        type: Date,
        required: true
    },
    jenisPengeluaran: {
        type: [String], 
        required: true,
        enum: ['Food & Drinks', 'Clothing', 'Utilities', 'Electronic', 'Others']
    },
    dompet: {
        type: [String], 
        required: true,
        enum: ['Cash', 'E-money', 'Debit card', 'Credit card']
    },
    note: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Expense', expenseSchema)