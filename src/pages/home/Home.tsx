function Home() {
  return (
    <>
      <div className="bg-auto flex justify-center">
        <div className="container grid grid-cols-2 text-cyan-700">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">FarmVIDA</h2>
            <p className="text-xl">Tudo o que você procura, em um só lugar!</p>
            <div className="flex justify-around gap-4"></div>
          </div>
          <div className="flex justify-center ">
            <img
              src="./images/logo.png"
              alt="Logo de Farmácia"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
