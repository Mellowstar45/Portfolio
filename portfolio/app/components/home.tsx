"use client";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h2 className=" aptos text-2xl  md:text-5xl font-bold">Hello, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Nicolas Ramanantsoa
        </h1>

        <p className=" aptos font-semibold text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
          A full stack developer passionate about clean and functional
          solutions​
        </p>
      </div>
    </section>
  );
};

export default Home;
