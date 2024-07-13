import { GET_POSTS } from '@/Services/api';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Posts = () => {
  //translation
  const { t } = useTranslation();

  const texts = {
    loading: t('loading'),
    anError: t('anError'),
    retry: t('retry'),
    home: t('home'),
  };
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['posts'], // Adjusted query key to 'posts'
    queryFn: GET_POSTS,
    staleTime: 50000000,
  });

  if (isLoading) return `${texts.loading}....`;

  if (error)
    return (
      <div>
        {texts.anError}: {error.message}{' '}
        <button onClick={() => refetch()}>{texts.retry}</button>
      </div>
    );

  return (
    <div>
      <Link to="/">{texts.home}</Link>
      {data &&
        data.data.length > 0 &&
        data.data.map((post: { id: string; title: string }) => (
          <div key={post.id} className="flex items-center gap-4">
            <div>{post.id}</div>
            <div>{post.title}</div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
