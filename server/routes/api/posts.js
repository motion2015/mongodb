const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
    //res.send('Hello')
});

// Add Post


// Delete Post

async function loadPostsCollection() {
    const client =  await mongodb.MongoClient.connect(
        'mongodb://duna111:duna111@ds119598.mlab.com:19598/vue_express2', 
        {
            useNewUrlParser: true
        }
    );

    return client.db('vue_express2').collection('posts');
}

module.exports = router;