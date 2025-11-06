// Vercel serverless Currency API handler
module.exports = async (req, res) => {
    try {
        // Example: accept amount query and return mock conversions
        const amount = Number(req.query.amount) || 1
        const sample = {
            usd: (amount * 1).toFixed(2),
            eur: (amount * 0.92).toFixed(2),
            gbp: (amount * 0.79).toFixed(2)
        }
        res.status(200).json(sample)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}