const Homepage = () => {
  
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-60 w-60 lg:h-3/5 lg:w-1/3  relative border border-black border-8 rounded-full overflow-hidden mt-35 lg:mt-20">
        <img src="/perfil.jpeg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Desenvolvedor FullStack
        </h1>

        <div className="w-full flex gap-4">
  <a href="https://drive.usercontent.google.com/u/0/uc?id=1D21HQqEGsnfFQQVPNRP68pcvb4b0L8Es&export=download" download="cv.pdf" className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:text-black hover:bg-white hover:border-black">
    Download CV
  </a>
  <a href="mailto:lucassantanapgsp@gmail.com.com" className="p-4 rounded-lg ring-1 ring-black hover:text-white hover:bg-black">
    Contato
  </a>
</div>
      </div>
    </div>
  );
};

export default Homepage;
