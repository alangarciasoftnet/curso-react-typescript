'use client';
import { useState } from "react";
import type {MouseEventHandler} from "react";
import { RandomFox2 } from "./components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => crypto.randomUUID();

type ImageItem = {id:string; url:string}

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox : MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newImageItem : ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    }

    setImages([
      ...images,
      newImageItem
    ])
  }

  return (
    <div className="">
      <main className="">
       <h1 className="text-4xl font-bold underline">Hola desde Platzi</h1>
       <button onClick={addNewFox}>Add new fox</button>
        {
          images.map(({id, url}) => (
            <div key={id}>
              <RandomFox2 image={url}/>
            </div>
          ))
        }
      </main>
    </div>
  );
}
