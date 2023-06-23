import Campaign from '../model/campaignModel.js';

// Create a new campaign
const createCampaign = async (req, res) => {
  try {
    const { fullname, campaignTitle, projectDescription, goalAmount, campaignImage, endDate } = req.body;

    // Create a new campaign instance
    const campaign = new Campaign({
      fullname,
      campaignTitle,
      projectDescription,
      goalAmount,
      campaignImage,
      endDate
    });

    // Save the campaign to the database
    const createdCampaign = await campaign.save();

    res.status(201).json({ campaign: createdCampaign });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create campaign' });
  }
};

export { createCampaign };
