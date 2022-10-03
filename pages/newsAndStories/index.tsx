import React from "react";
import StoriesList from "../../components/stories/StoriesList";
import Header from "../../components/ui/Header";
// import articles from "../../storiesData";
import { getAllStories } from "../../storiesData";
import heroImg from "../../public/images/programs/light-of-hope-hair-style.jpg"

const BlogPage = () => {
// const [searching, setSearching] = useState(false)
// const [filteredStories, setFilteredStories] = useState<any>([])

  // const handleSearch = (e: { target: { value: string } }) => {
  //   setSearching(true)
  //   const input = e.target.value;

  //   const filteredStory = articles.filter((article: any) =>
  //     article.name.toLowerCase().includes(input.toLowerCase())
  //   );

  //   setFilteredStories(filteredStory)
  //   setSearching(false)
  // };

const story = getAllStories()

  return (
    <>
      <Header
        title="Meet Some Of Our Beneficiaries"
        description="We have a variety of programs that benefit different communities, from the little ones to the elderly. We help the needed with tools, assistance, love, adn God's word" image={heroImg} altText="Beneficiarie of light of hope program, receiving tools to open their heir style business"
      />
      <main>
        {/* <div>
          <input
            type="search"
            placeholder="type search"
            onChange={(e) => handleSearch(e)}
          />
        </div> */}
        {/* <div><h2>filtered stories:</h2>
          {!searching ? articles.map((item: any) => { return (<li key={item.name}>{item.name}</li>)} ) : setFilteredStories.length > 0 && filteredStories.map((item: any) => { return (<li key={item.name}>{item.name}</li>)} )}
        </div> */}

        {/* {articles.map((item: any) => {
          return <p key={item.name}>{item.name}</p>;
        })} */}

        <StoriesList stories={story} listTitle='Beneficiaries' />

      </main>
    </>
  );
};

export default BlogPage;
