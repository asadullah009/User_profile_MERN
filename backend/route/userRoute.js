import express from 'express';
import { UserDetails,UserFollow } from '../Models/userDetails.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.experience ||
            !request.body.gender ||
            !request.body.profession ||
            !request.body.rating ||
            !request.body.awards
        ) {
            response.status(400).send('Missing fields');
        } else {
            const newUserDetails = {
                name: request.body.name,
                experience: request.body.experience,
                gender: request.body.gender,
                profession: request.body.profession,
                rating: request.body.rating,
                awards: request.body.awards,
                address: request.body.address
            }

            const userDetails = await UserDetails.create(newUserDetails);
            return response.status(201).json(userDetails);
        }

    } catch (error) {
        console.log("Error: ", error.message)
        response.status(500).send(error.message)
    }
});


 // ** Get all books data from database ** //

router.get('/', async (request, response) => {
    try {
        const userDetails = await UserDetails.find({});

        return response.status(200).json({
            count: userDetails.length,
            data: userDetails
        });

    } catch (error) {
        console.log("Error: ", error.message)
        response.status(500).send(error.message)
    }
})




 // ** Get book data from database by name ** //
 router.get('/:name', async (request, response) => {
    try {
        const { name } = request.params;

        // Assuming UserDetails is the model/schema representing user details
        const userDetails = await UserDetails.findOne({ name });

        if (!userDetails) {
            return response.status(404).json({ message: 'User details not found' });
        }

        return response.status(200).json(userDetails);

    } catch (error) {
        console.log("Error: ", error.message);
        response.status(500).send(error.message);
    }
});


 // ** dlete book data from database by ID ** //

 router.delete('/:name', async (request, response) => {
    try {
        const { name } = request.params;

        // Assuming UserDetails is the model/schema representing user details
        const deletedUser = await UserDetails.findOneAndDelete({ name });

        if (!deletedUser) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response.status(200).json({ message: 'User deleted successfully', deletedUser });

    } catch (error) {
        console.log("Error: ", error.message);
        response.status(500).send(error.message);
    }
});


router.post('/follow', async (request, response) => {
    try {
        if (
            !request.body.facebook ||
            !request.body.twitter ||
            !request.body.instagram ||
            !request.body.tiktok ||
            !request.body.youtube
        ) {
            response.status(400).send('Missing fields');
        } else {
            const newUserFollow = {
                facebook: request.body.facebook,
                twitter: request.body.twitter,
                instagram: request.body.instagram,
                tiktok: request.body.tiktok,
                youtube: request.body.youtube
            }

            const userFollow = await UserFollow.create(newUserFollow);
            return response.status(201).json(userFollow);
        }

    } catch (error) {
        console.log("Error: ", error.message)
        response.status(500).send(error.message)
    }
});

router.get('/follow', async (request, response) => {
    try {
        const userFollow = await UserFollow.find({});

        return response.status(200).json({
            count: userFollow.length,
            data: userFollow
        });

    } catch (error) {
        console.log("Error: ", error.message)
        response.status(500).send(error.message)
    }
}
);




export default router;
