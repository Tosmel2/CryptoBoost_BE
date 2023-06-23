import Contributor from '../model/contributorModel.js';

// Create a new contributor
const createContributor = async (req, res) => {
  try {
    const { fullname, amountContributed, remarks, profilePicture } = req.body;

    // Create a new contributor instance
    const contributor = new Contributor({
      fullname,
      amountContributed,
      remarks,
      profilePicture
    });

    // Save the contributor to the database
    const createdContributor = await contributor.save();

    res.status(201).json({ contributor: createdContributor });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contributor' });
  }
};

export { createContributor };
