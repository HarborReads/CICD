// profileController.js
const UserProfile = require('../models/userProfile');
const User = require('..//models/User'); // Assuming your user model file is in the models directory

getUserDetails = async (username) => {
    try {
        const user = await User.findById(username);
        if (!user) {
            throw new Error('User not found');
        }
        return {
            username: user.username,
            email: user.email,
            password: user.password
        };
    } catch (error) {
        throw new Error('Failed to fetch user details');
    }
};

exports.getEditProfileForm = async (req, res) => {
    try {
        const {userSession}= req.body;
        const userId = userSession.user.id;
        const username=userSession.user.id;
        let userProfile = await UserProfile.findOne({ user: userId });

        if (!userProfile) {
            // Create a new user profile based on the schema in userProfile.js
            userProfile = new UserProfile({
                user: userId,
                gender: '',
                dob: new Date()
            });
            await userProfile.save();
        }
        const userDetails = await getUserDetails(username);

        res.json({ userProfile, userDetails});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateProfile = async (req, res) => {
    const {email,gender, dob } = req.body;
    const {userSession}= req.body;
    const userId = userSession.user.id;

    try {
        let userProfile = await UserProfile.findOne({ user: userId });
        let user = await User.findById(userId);

        if (!userProfile) {
            userProfile = new UserProfile({
                user: req.session.user.id,
                gender,
                dob
            });
        } else {
            userProfile.gender = gender;
            userProfile.dob = dob;
            User.email=email;
        }

        await userProfile.save();
        await user.save();

        res.status(200).json({ message: 'Profile updated successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


