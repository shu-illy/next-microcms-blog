import type { NextPage } from 'next';
import { ArticleCard } from 'src/components/ArticleCard';

const Home: NextPage = () => {
  const sampleItem = {
    image: 'https://i.imgur.com/Cij5vdL.png',
    link: 'https://mantine.dev/',
    title: 'Resident Evil Village review',
    rating: 'outstanding',
    description:
      'Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.',
    author: {
      name: 'Bill Wormeater',
      image:
        'https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  };

  return (
    <>
      <h1 className="container mx-auto px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <ArticleCard
          image="https://i.imgur.com/Cij5vdL.png"
          link="https://mantine.dev/"
          title="テストタイトル"
          rating={null}
          description="Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires."
          author={{
            name: 'Bill Wormeater',
            image:
              'https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
          }}
        />
      </div>
    </>
  );
};

export default Home;
