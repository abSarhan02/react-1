import Star from '../Star/Star';

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-6 bg-sky-300">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold uppercase">
        conatct section
        </h1>
        <Star />
      </div>
      <form className="w-full max-w-4xl p-6">
        <div className="mb-4">
          <input 
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="w-full px-2 py-2 bg-transparent border-b-2 border-white form-control focus:outline-none rounded-xl focus:border-sky-500"
          />
        </div>
        <div className="mb-4">
          <input 
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userAge"
            className="w-full px-2 py-2 bg-transparent border-b-2 border-white form-control focus:outline-none rounded-xl focus:border-sky-500"
          />
        </div>
        <div className="mb-4">
          <input 
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userEmail"
            className="w-full px-2 py-2 bg-transparent border-b-2 border-white form-control focus:outline-none rounded-xl focus:border-sky-500"
          />
        </div>
        <div className="mb-4">
          <input 
            id="userPassword"
            type="password"
            placeholder="userPassword"
            name="userPassword"
            className="w-full px-2 py-2 bg-transparent border-b-2 border-white form-control focus:outline-none rounded-xl focus:border-sky-500"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-white rounded-xl text-slate-800 btn">
          Send Message
        </button>
      </form>
    </section>
  );
}
