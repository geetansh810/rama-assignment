import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { Oval } from "react-loader-spinner"

const Home = () => {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchText = (value) => {
    getResults(value)
  }

  const getResults = async (value) => {
    setLoading(true);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.key,
        'X-RapidAPI-Host': 'g-search.p.rapidapi.com'
      }
    };

    fetch(`https://g-search.p.rapidapi.com/search?q=${value}&location_name=London%2COntario%2CCanada&location_parameters_auto=true`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResults(data.data.organic_results);
        setLoading(false)
      })
      .catch(err => console.error(err));

  };

  return (
    <>
      <Navbar searchText={searchText} />
      <div className="sm:px-56 flex flex-wrap justify-center space-y-6" style={{ marginTop: "5%" }}>
        {loading ?
          <Oval
            height={80}
            width={80}
            color="white"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="black"
            strokeWidth={2}
            strokeWidthSecondary={2}
          /> :

          results.map(({ desc, title, url }, index) => (
            <div key={index} className="w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url} :</p>
                <p className="text-lg text-primary hover:underline dark:text-blue-300  ">{title}</p>
                <p className="text-lg">{desc}</p>
              </a>
            </div>
          ))}
      </div>
      <Footer />
    </>
  )
}

export default Home