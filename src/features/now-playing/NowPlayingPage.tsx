import { imageUrl } from '../../lib/api';
import { useGetNowPlaying } from './hooks';

export default function NowPlayingPage() {
  const { data, isLoading, isError } = useGetNowPlaying();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Data gagal di ambil</div>;

  return (
    <div>
      {data?.results.map((movie) => {
        return (
          <div>
            <p>{movie.original_title}</p>

            <img
              alt={movie.title}
              src={`${imageUrl}${movie.poster_path}`}
            />
          </div>
        );
      })}
    </div>
  );
}
