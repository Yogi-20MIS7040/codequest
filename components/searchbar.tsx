"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search"
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchBox;
