import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  food: {
    type: String,
    required: [true, 'Food Item is required.'],
  },
  post: {
    type: String,
    required: [true, 'Post is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Post = models.Post || model('Post', PostSchema);

export default Post;