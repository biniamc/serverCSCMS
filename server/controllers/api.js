module.exports = class API{
    //fetch all posts
    static async fetchAllPost(req, res){
        res.send("Hello from API");
    }
    //fetch post by id
    static async fetchAllPostByID(req, res){
        res.send("fetch post by id");
    }
    //create posts
    static async createPost(req, res){
        res.send("create post");
    }
    //update posts
    static async updatePost(req, res){
        res.send("update post");
    }
    //Delete posts
    static async deletePost(req, res){
        res.send("Delete post");
    }
};