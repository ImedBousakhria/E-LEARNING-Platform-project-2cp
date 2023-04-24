const Announcement=require('../models/Announcement');
const AnnouncementComment=require('../models/Comment');
const mongoose=require('mongoose');
const { Validator } = require('node-input-validator');


module.exports.create=async (req,res)=>{
	let announcement_id=req.params.announcement_id;

	if(!mongoose.Types.ObjectId.isValid(announcement_id)){
		return res.status(400).send({
	  		message:'Invalid announcement id',
	  		data:{}
	  	});
	}
	Announcement.findOne({_id:announcement_id}).then(async (announcement)=>{
		if(!announcement){
			return res.status(400).send({
				message:'No announcement found',
				data:{}
			});	
		}else{

			try{
				const v = new Validator(req.body, {
					comment:'required',
				});
				const matched = await v.check();
				if (!matched) {
					return res.status(422).send(v.errors);
				}

				let newCommentDocument= new Comment({
					comment:req.body.comment,
					announcement:announcement_id,
					user:req.user._id
				});

				let commentData=await newCommentDocument.save();

				await Announcement.updateOne(
					{_id:announcement},
					{
						$push: { comments :commentData._id  } 
					}
				)


				// let query=[
				// 	{
				// 		$lookup:
				// 		{
				// 		 from: "users",
				// 		 localField: "user_id",
				// 		 foreignField: "_id",
				// 		 as: "user"
				// 		}
				// 	},
				// 	{$unwind: '$user'},
				// 	{
				// 		$match:{
				// 			'_id':mongoose.Types.ObjectId(commentData._id)
				// 		}
				// 	},

				// ];

				// let comments=await AnnouncementComment.aggregate(query);

				return res.status(200).send({
					message:'Comment successfully added',
					data:comments[0]
				});


			}catch(err){
				return res.status(400).send({
			  		message:err.message,
			  		data:err
			  	});
			}

		
		}
	}).catch((err)=>{
		return res.status(400).send({
	  		message:err.message,
	  		data:err
	  	});
	})

}