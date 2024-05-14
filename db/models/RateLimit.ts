import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface RateLimitSchema extends Document {
  api_key: string;
  limit_count: number;
  createdAt: Date;
  updatedAt: Date;
}

const rateLimitSchema = new Schema<RateLimitSchema>({
  api_key: {
    type: String,
    required: true,
    unique: true
  },
  limit_count: {
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

export const RateLimit: Model<RateLimitSchema> = mongoose.models.RateLimit || mongoose.model<Model<RateLimitSchema>>('RateLimit', rateLimitSchema);
