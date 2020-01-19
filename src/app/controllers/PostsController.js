import PostsSchema from '../schemas/Posts';
import redisConfig from '../../config/redis';

class PostsController {
  async index(req, res) {
    const posts = await PostsSchema.find().limit(50);
    res.json({ data: posts });
  }

  async show(req, res) {
    const { permalink } = req.params;

    const postExists = await redisConfig.get(`posts:${permalink}`);
    // call post from redis
    if (postExists) {
      res.json({ data: JSON.parse(postExists) });
    }
    const posts = await PostsSchema.findOne({ permalink });
    // call post from mongo database and set to redis
    redisConfig.set(`posts:${permalink}`, JSON.stringify(posts));

    res.json({ data: posts });
  }
}
export default new PostsController();
