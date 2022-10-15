import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    dateCreated: { type: Date, default: Date.now },
    firstName: { type: String },
    lastName: { type: String },
    photo: {
        type: String, default: `https://avatars.dicebear.com/api/human/${Math.floor(
            Math.random() * 999
        )}.svg`
    },
    email: { type: String },
    phone: { type: Number },
    interests: [String],
    description: { type: String },
    activityAreas: [String],
    competencies: [String],
    offer: [String],
    seek: [String],
    website: { type: String },
    organization: { type: String },
});

const User = model('User', userSchema);

export default User;    