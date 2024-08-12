import { Schema, model, models } from "mongoose";

const CampaignsSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  campaignId: {
    type: String,
    required: true,
    unique: true
  },
  campaignName: {
    type: String,
    required: true
  },
  campaignDescription: {
    type: String
  },
  campaignType: {
    type: String
  },
  createdAt: {
    type: Number, default: Date.now()
  }
});

const Campaigns = models?.Campaigns || model("Campaigns", CampaignsSchema);

export default Campaigns;
