import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import Quote from "./components/ui/Quote";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/quote/random`);
      setQuote(result.data);
    };
    fetchQuote();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

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
