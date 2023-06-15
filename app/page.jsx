import Post from '@components/Post'
 const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> All Favorite Food Posts</span>
    </h1>
    <p className='desc text-center'>
      Food Post is  is an open-source food  world to
      discover, create and share your Favorite food posts
    </p>

    <Post />
  </section>
  )
}
export default Home
