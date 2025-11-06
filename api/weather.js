// Vercel serverless Weather API handler
module.exports = async (req, res) => {
    try {
        // Simple example response. Replace with real API calls as needed.
        const sample = {
            temperature: 22,
            description: 'Partly cloudy',
            location: 'Example City'
        }
        res.status(200).json(sample)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}