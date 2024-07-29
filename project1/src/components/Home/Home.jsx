import avatar from '../../assets/avataaars.svg';
import Star from '../Star/Star';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-16 bg-sky-300">
      <img src={avatar} alt="avatar img" className="w-64" />
      <div className="px-6 py-6 text-center text-white">
        <h1 className="text-4xl font-bold">
          START <span className="text-slate-700">FRAMEWORK</span>
        </h1>
        <Star />
        <p>
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}
