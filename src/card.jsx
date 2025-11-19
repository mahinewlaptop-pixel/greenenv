export default function Card({ images }) {
    const i=0;
    
  return (
    <div>
      {images.map((image, i) => {
        return (
            
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap md:flex-nowrap " key={i++}>
            <div className=" w-40 rounded-md m-8 animate-bounce hover:animate-none">
                <img
              className=" rounded-md sm:h-auto md:h-auto"
              src={image.url}
              alt="Image"
            />
            </div>
            <div className=" rounded-xl m-4 bg-green-950 pb-2">
              <h2 className="text-center m-4 font-extrabold text-2xl text-purple-400">
                {image.name}
              </h2>
              <p className="pl-4 text-green-50 pb-2">
                {image.description}
                <a href={`https://www.google.com/search?q=${image.name}`} className="hover:border-2 m-2 hover:bg-green-900">Know More...</a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
