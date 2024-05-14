import mongoose from 'mongoose';
import { Document, Model, Schema, model } from 'mongoose';

export interface AccessTokenSchema extends Document {
  user_id: Schema.Types.ObjectId;
  token: string;
  expiresAt: Date;
  scopes: string[];  // Added field for scopes
  createdAt: Date;
  updatedAt: Date;
}

const accessTokenSchema = new Schema<AccessTokenSchema>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  },
  expiresAt: {
    type: Date,
    required: true
  },
  scopes: {
    type: [String],
    required: true  // Mark scopes as required as well
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

export const AccessToken: Model<AccessTokenSchema> = mongoose.models.AccessToken || mongoose.model<Model<AccessTokenSchema>>('AccessToken', accessTokenSchema);