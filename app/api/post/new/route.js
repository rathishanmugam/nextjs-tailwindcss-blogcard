import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, food, post, tag } = await request.json();
console.log('*****request********====>',{ userId, food, post, tag })
    try {
        await connectToDB();
        const newPost = new Post({ creator: userId,food, post, tag });

        await newPost.save();
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new post", { status: 500 });
    }
}