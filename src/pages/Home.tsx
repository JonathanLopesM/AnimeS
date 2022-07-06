import { useEffect, useState } from "react"
import { SearchInput } from "../components/SearchInput"

const api = "https://kitsu.io/api/edge/"

interface ImageFormat {
  small: string;
}
interface AnimeDataFormat{
  id:string;
  posterImage: ImageFormat;
  canonicalTitle: string;
  description: string;

}
interface AnimeProps {
  id: string;
  attributes: AnimeDataFormat;
  links: string;
}
interface InfoData {
  data: AnimeProps[];
}

export function Home () {
  const [info, setInfo] = useState({} as InfoData);
  const [text, setText] = useState('')

  useEffect(() => {
    if(text){
      console.log(text)
      setInfo({} as InfoData)

      fetch(`${api}anime?filter[text]=${text}&page[limit]=12`
      )
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })
    }
  },[text])
  
  return (
    <div className="flex flex-col mx-autojustify-center mt-20 mx-auto max-w-[720px] items-center">
      <h1 className="bg-gray.900 text-gray-100 flex text-4xl p-4">AnimeS</h1>
      <SearchInput 
        value={text} 
        onChange={(search)=> setText(search) as unknown as React.FormEvent<HTMLInputElement>} 
      /> 

      <div>
        {text && !info.data && <span>Carregando...</span>}
      </div>
      <div>
        {info.data && (
          <ul className="grid grid-cols-3 mt-5">
            {info.data.map((anime:AnimeProps) => (
              // <a href={anime.links}>
                <li key={anime.id} className="flex flex-col p-2 ">
                <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              <h1 className="text-gray-100 text-center">
              {anime.attributes.canonicalTitle}
              </h1>
              <p className="text-gray-100">
                {anime.attributes.description.slice(0, 100, )}...
              </p>
              </li>
              // </a>
            ))}
          </ul>
        )}

      </div>
    </div>
  )
}