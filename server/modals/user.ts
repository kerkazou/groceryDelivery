import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';

const UserSchema: Schema = new Schema(
    {
        username: String,
        email: { type: String, unique: true },
        password: String,
        role: String,
        status: { type: Boolean, default: false }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUser>('User', UserSchema);