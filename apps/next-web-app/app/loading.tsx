import Spinner from '../components/Spinner/Spinner';

export default function Loading() {
  return (
    <Spinner isFullScreen theme="ClipLoader">
      <div className="flex flex-col items-center justify-center h-full" />
    </Spinner>
  );
}
