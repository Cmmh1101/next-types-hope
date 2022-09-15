import React from "react";
import Header from "../../components/ui/Header";
import articles from "../../storiesData";

const BlogPage = () => {
  const handleSearch = (e: { target: { value: string } }) => {
    const input = e.target.value;

    const filteredStory = articles.filter((article: any) =>
      article.name.toLowerCase().includes(input.toLocaleLowerCase())
    );
    console.log(input, "input");
    console.log(filteredStory);
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
        {articles.map((item: any) => {
          return <p key={item.name}>{item.name}</p>;
        })}
      </main>
    </>
  );
};

export default BlogPage;
