import { useEffect, useState } from "react";
import verses from "../../bibleVerses"
import QuoteBlock from "../ui/QuoteBlock";
interface IVerse {
  verse: string;
  reference: string;
}

const BibleVerses = () => {
  const [activeVerse, setActiveVerse] = useState<IVerse | undefined>();
  const totalVerses = verses.length;

  // const activeVerses = verses[Math.floor(Math.random() * totalVerses)];
  // console.log(activeVerses);

  useEffect(() => {
    const verse = verses[Math.floor(Math.random() * totalVerses)];
    setActiveVerse(verse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuoteBlock><p>The Lord Jesus Christ told us in {activeVerse?.reference},</p><q>{activeVerse?.verse}</q></QuoteBlock>
    // <Col xs={12} className="donate-verse-img mb-5 mb-md-0">
    //   <Col xs={12} className="verse order-lg-2">
    //     <p>{activeVerse?.verse}</p>
    //     <span>{activeVerse?.reference}</span>
    //   </Col>
    // </Col>
  );
};

export default BibleVerses;