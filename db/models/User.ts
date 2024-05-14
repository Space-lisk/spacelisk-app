import mongoose, { Document, Model, Schema, model } from 'mongoose';
import { PackageSchema } from './Package';

export interface UserSchema extends Document {
  wallet_address: string;
  package: PackageSchema;
  api_key: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserSchema>({
  wallet_address: {
    type: String,
    required: true,
    unique: true
  },
  package: {
    type: Schema.Types.ObjectId,
    ref: 'Package',
    required: true
  },
  api_key: {
    type: String,
    required: true,
    unique: true
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

export const User: Model<UserSchema> = mongoose.models.User || mongoose.model<Model<UserSchema>>('User', userSchema);