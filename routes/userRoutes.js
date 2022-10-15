import express from "express"
import User from '../model/User.js';

const router = express.Router();
router.post("/create", async (req, res) => {
    try {
        const createUser = await User.create(req.body);
        return res.status(200).json({ message: "User created", createUser });
    } catch (error) {
        //if there's an error
        return res.status(500).json({ message: error.message });
    }
})
router.get("/", async (req, res) => {
    try {
        const allUser = await User.find();
        return res.status(200).json(allUser);
    } catch (error) {
        //if there's an error
        return res.status(500).json({ message: error.message });
    }
})
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const userId = await User.findById(id);
        return res.status(200).json(userId);
    } catch (error) {
        //if there's an error
        return res.status(500).json({ message: error.message });
    }
})
router.get("/location/:region", async (req, res) => {
    try {
        const region = req.params.region;
        const allUserRegion = await User.find({ "activityAreas": region })
        return res.status(200).json(allUserRegion);
    } catch (error) {
        //if there's an error
        return res.status(500).json({ message: error.message });
    }
})
router.get("/offer/:offer", async (req, res) => {
    try {
        const offer = req.params.offer;
        const allUserOffer = await User.find({ "offer": offer })
        return res.status(200).json(allUserOffer);
    } catch (error) {
        //if there's an error
        return res.status(500).json({ message: error.message });
    }
})
export default router;