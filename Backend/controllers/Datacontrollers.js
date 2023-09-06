const Data = require("../Models/Data");

const Score = async (req, res) => {
  try {
    const { name, email, score } = req.body;
    
    // Find the document with the specified email
    const data = await Data.findOne({ email: email });

    if (data) {
      // If a document with the email exists, add the score to the existing score array
      data.score = data.score.concat(score);
      await data.save();
      res.status(200).json({ email, score: data.score });
    } else {
      // If no document with the email exists, create a new document
      const user = await Data.create({ name, email, score: [score] });
      if (user) {
        res.status(200).json({ email, score: user.score });
      }
    }
  } catch (error) {
    console.error(error); // Corrected 'errror' to 'error'
    res.status(500).json({ message: 'Internal server error' });
  }
};

const All = async (req, res) => {
    try {
        const { email } = req.body;
        const data = await Data.findOne({ email: email });

        console.log("Data:", data); // Log the data object

        if (data) {
            console.log("Score:", data.score); // Log the score value

            // Filter out null and non-number values from the score array
            const filteredScore = data.score.filter(value => value !== null && !isNaN(value));

            if (filteredScore.length > 0) {
                res.status(200).json({ score: filteredScore });
            } else {
                res.status(400).send("No valid scores found");
            }
        } else {
            res.status(400).send("Data not found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}



module.exports = { Score,All };
