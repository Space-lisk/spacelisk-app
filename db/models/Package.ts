import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface PackageSchema extends Document {
  name: string;
  price: number;
  limit: number;
  createdAt: Date;
  updatedAt: Date;
}

const packageSchema = new Schema<PackageSchema>({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  limit: {
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

export const Package: Model<PackageSchema> = mongoose.models.Package || mongoose.model<Model<PackageSchema>>('Package', packageSchema);