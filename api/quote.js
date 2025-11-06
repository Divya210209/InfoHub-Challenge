// Vercel serverless Quote API handler
module.exports = async (req, res) => {
    try {
        const quotes = [
            "Life is what happens when you're busy making other plans.",
            'The only way to do great work is to love what you do.',
            'The best time to plant a tree was 20 years ago. The second best time is now.'
        ]
        const quote = quotes[Math.floor(Math.random() * quotes.length)]
        res.status(200).json({ quote })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}