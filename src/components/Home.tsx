import React, { useEffect, useState } from "react";
import axios from "axios";
import Spin from "../assets/spin";

type Art = {
  title: string;
  image_id: string;
  artist_title: string;
  thumbnail: any;
};
export default function Home() {
  const [art, setArt] = useState<Art | null>(null);
  const [page, setPage] = useState(1);
  const [previousPage, setPreviousPage] = useState([page]);

  const nextPage = () => {
    setArt(null);
    setPage(Math.floor(Math.random() * 119563));
    setPreviousPage([...previousPage, page]);
  };
  const prevPage = () => {
    setPage(previousPage[previousPage.length - 1]);
    previousPage.pop();
  };
  console.log(page);
  console.log(previousPage);
  useEffect(() => {
    axios
      .get(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=1`)
      .then((res) => {
        console.log(res);
        setArt(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  console.log(art);
  return (
    <div className="grow font-Courgette">
      {art ? (
        <article className=" bg-gray-800 text-white h-screen grid grid-cols-7 grid-rows-3">
          <div className="h-full border col-span-6 row-span-3 border-slate-700 flex items-center justify-center">
            <img
              className="h-full"
              src={`https://www.artic.edu/iiif/2/${art?.image_id}/full/843,/0/default.jpg`}
            />
          </div>
          <div className="h-full border row-span-2 border-slate-700 flex-col text-center items-center justify-center">
            <h1 className=" text-amber-300 text-4xl">{art?.artist_title}</h1>
            <h1 className="text-3xl p-2">{art?.title}</h1>
            <p className="text-3xl p-4">{art?.thumbnail?.alt_text}</p>
          </div>

          <div className="h-full grid grid-cols-2  border border-slate-700  items-center justify-center">
            <button
              className="h-full border-slate-700 border-r-2 hover:bg-slate-800 duration-300"
              onClick={prevPage}
            >
              Back
            </button>
            <button
              className="h-full hover:bg-slate-800 duration-300"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </article>
      ) : (
        <Spin />
      )}
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
