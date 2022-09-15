import React, { useState } from "react";
import Header from "../../components/ui/Header";
import articles from "../../storiesData";

const BlogPage = () => {
const [searching, setSearching] = useState(false)
const [filteredStories, setFilteredStories] = useState<any>([])

  const handleSearch = (e: { target: { value: string } }) => {
    setSearching(true)
    const input = e.target.value;

    const filteredStory = articles.filter((article: any) =>
      article.name.toLowerCase().includes(input.toLocaleLowerCase())
    );

    setFilteredStories(filteredStory)
    console.log(input, "input");
    console.log(filteredStory);
    setSearching(false)
  };



  return (
    <>
      <Header
        title="Meet Some Of Our Beneficiaries"
        description="We have a variety of programs that target different communities, from the little ones to the elderly. We help the needed with tools, assistance, love, adn God's word"
      />
      <main>
        <div>
          <input
            type="search"
            placeholder="type search"
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div><h2>filtered stories:</h2>
          {setFilteredStories.length > 0 && filteredStories.map((item: any) => { return (<li key={item.name}>{item.name}</li>)} )}
        </div>

        {/* {articles.map((item: any) => {
          return <p key={item.name}>{item.name}</p>;
        })} */}
      </main>
    </>
  );
};

export default BlogPage;
