import mongoose from 'mongoose';

const userDetailSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    awards: {
        type: Array,
        default: []
    },
    address: {
        type: String,
        default: ''
    },

},
    {
        timestamps: true,
    }
)

const userFollow = mongoose.Schema({
    facebook: {
        type: Number,
        default: ''
    },
    twitter: {
        type: Number,
        default: ''
    },
    instagram: {
        type: Number,
        default: ''
    },
    tiktok: {
        type: Number,
        default: ''
    },
    youtube: {
        type: Number,
        default: ''
    },
},
    {
        timestamps: true,
    }
)

export const UserFollow = mongoose.model('UserFollow', userFollow);


export const UserDetails = mongoose.model('UserDetails', userDetailSchema);