const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get방식으로 요청된 request의 응답으로 post db를 response로 응답
router.get('/',async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//post방식으로 들어온 json정보로 post객체생성하여 db에 저장
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({messge:err});
    }
});

// id로 특정 post 찾기
router.get('/:postId',async (req,res) =>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

// 특정 post delete
router.delete('/:postId',async (req,res) =>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});

//특정 post의  특정 항목 update
router.patch('/:postId',async (req,res) =>{
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId}, 
            { $set: {title: req.body.title}}
        );

        res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;