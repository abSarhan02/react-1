import Star from './../Star/Star';

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-16 bg-sky-300">
    <div className="px-6 py-6 text-center text-white">
      <h1 className="text-5xl font-bold uppercase">
      about component
      </h1>
      <Star></Star>
      <div className='container flex w-4/5 gap-3 mx-auto text-start'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      
    </div>
  </section>
  );
}
