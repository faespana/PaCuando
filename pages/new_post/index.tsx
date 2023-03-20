import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const newPostPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>
        {' '}
        this page is <span className="text-app-red text-6xl">Publicación</span>
      </h1>
    </div>
  );
};

newPostPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default newPostPage;
