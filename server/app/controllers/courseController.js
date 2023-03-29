const Course = require('../models/Activity') ;
const User = require("../models/User");

module.exports.get = async (req, res) =>{
    const _id = req.params.id;
    try{
        const activity = await Activity.findById({_id})
        .populate('mainManager managers teamLeaders organizers')

        if(activity){

            res.status(200).json(activity);
        }else{
            res.status(404).json("Not found");
        }

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports.post = async (req, res) =>{
    /*
    req.body = {
        name: string,
        type: string,
        description: string,
        mainManager: objectID,
        teamLeaders: [objectID],
        organizers: [objectID],
    }
    */

    try{
        //create the activity document
        const activity = await Activity.create(req.body);

        //add the activity to each member by their role + add automatic points

        //add to main manager
        const mainManager = await User.findById(req.body.mainManager);
        mainManager.contributions.push({activityID: activity._id, role: "main-manager"});
        mainManager.save();

        const mainManagerRank = await Rank.findById(mainManager.rank);
        mainManagerRank.totalAddedPoints += 20;
        mainManagerRank.generalPoints += 20;
        mainManagerRank.save();

        //add to leaders
        req.body.teamLeaders.forEach(async teamLeaderID => {
            const teamLeader = await User.findById(teamLeaderID);
            teamLeader.contributions.push({activityID: activity._id, role: "team-leader"})
            teamLeader.save();

            const teamLeaderRank = await Rank.findById(teamLeader.rank);
            teamLeaderRank.totalAddedPoints += 15;
            teamLeaderRank.generalPoints += 15;
            teamLeaderRank.save();
        })

        //add to organizers
        req.body.organizers.forEach(async organizerID => {
            const organizer = await User.findById(organizerID);
            organizer.contributions.push({activityID: activity._id, role: "organizer"});
            organizer.save();

            const organizerRank = await Rank.findById(organizer.rank);
            organizerRank.totalAddedPoints += 10;
            organizerRank.generalPoints += 10;
            organizerRank.save();
        })

        res.status(200).json(activity);
    }catch(err){
        console.log("creation failed ");
        res.status(500).json({message: err.message});
    }

}

module.exports.put = async (req, res) =>{
    const _id = req.params.id;
    try{
        const activity=await Activity.findOneAndUpdate({_id}, req.body);
        
        if(activity){
                
            res.status(200).json(activity);
        }else{
            res.status(404).json({message: "Activity not found"});
        }

    }catch(err){
        console.log("Activity update succeed");
        res.status(500).json({message: err.message});
    }
}

module.exports.delete = async (req, res) =>{
    try{
        const activity=await Activity.findOneAndDelete({_id}, req.body);
        if(activity){
            res.status(200).json(activity);
        }else{
            res.status(401).send({message: "Activity not found"});
        }
    }catch(err){
        console.log("suppression failed");
        res.status(500).json({message: err.message});
    }

}