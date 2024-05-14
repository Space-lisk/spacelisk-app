import mongoose from 'mongoose';
import { Document, Model, Schema, model } from 'mongoose';

export interface UserPaymasterFundingSchema extends Document {
  user_id: Schema.Types.ObjectId;
  wallet_address: string;
  funded_address: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

const userPaymasterFundingSchema = new Schema<UserPaymasterFundingSchema>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  wallet_address: {
    type: String,
    required: true
  },
  funded_address: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const UserPaymasterFunding: Model<UserPaymasterFundingSchema> = mongoose.models.UserPaymasterFunding || mongoose.model<Model<UserPaymasterFundingSchema>>('UserPaymasterFunding', userPaymasterFundingSchema);
