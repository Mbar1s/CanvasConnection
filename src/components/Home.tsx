import React, { useEffect, useState } from "react";
import axios from "axios";

type Art = {
  title: string;
  image_id: string;
  artist_title: string;
  thumbnail: object;
};
export default function Home() {
  const [art, setArt] = useState<Art | null>(null);

  useEffect(() => {
    axios
      .get(`https://api.artic.edu/api/v1/artworks/27993`)
      .then((res) => {
        console.log(res);
        setArt(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(art);
  return (
    <div className="grow">
      <article className="bg-black text-white h-screen grid grid-cols-3 grid-rows-3">
        <div className="h-full border col-span-2 row-span-2 border-white flex items-center justify-center">
          <img
            className="h-full w-full"
            src={`https://www.artic.edu/iiif/2/${art?.image_id}/full/843,/0/default.jpg`}
          />
        </div>
        <div className="h-full border row-span-2 border-white flex items-center justify-center">
          <p>{art?.thumbnail.alt_text}</p>
        </div>
        <div className="h-full border col-span-2 border-white flex gap-4 items-center justify-center">
          <h1>{art?.title}</h1>
          <h1>{art?.artist_title}</h1>
        </div>
        <div className="h-full border border-white flex gap-4 items-center justify-center">
          <button>Back</button>
          <button>Next</button>
        </div>
      </article>
    </div>
  );
}
{
  /* 
<p>{art?.thumbnail.alt_text}</p>

<h1>{art?.title}</h1>
<div>
<button>back</button>
<button>next</button>
</div> */
}
