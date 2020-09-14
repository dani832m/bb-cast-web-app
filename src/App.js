import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import Quote from "./components/ui/Quote";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const fetchQuote = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/quote/random`);
    setQuote(result.data);
  };
  //fetchQuote();

  return (
    <div className="container">
      <Header />
      <Quote quote={quote} />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
