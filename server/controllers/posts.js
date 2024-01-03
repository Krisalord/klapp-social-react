const Post = require('../models/Post')
const User = require('../models/User')
module.exports = {
    getFeed: async(req,res) => {
        try{
            const posts = await Post.find().sort({createdAt: 'desc'}).populate('user', ['userName', 'profilePic', 'id']) .lean()
            res.json(posts)
        }catch(err){
            console.log(err)
        }
    }
}