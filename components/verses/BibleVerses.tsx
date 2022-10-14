import { useEffect, useState } from "react";
import verses from "../../bibleVerses";
import QuoteBlock from "../ui/QuoteBlock";

interface IVerse {
  verse: string;
  reference: string;
}

const BibleVerses = () => {
  const [activeVerse, setActiveVerse] = useState<IVerse | undefined>();

  useEffect(() => {
    const totalVerses = verses.length;
    const verse = verses[Math.floor(Math.random() * totalVerses)];
    setActiveVerse(verse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuoteBlock verse>
      <p>The Lord Jesus Christ told us in {activeVerse?.reference},</p>
      <q>{activeVerse?.verse}</q>
    </QuoteBlock>
  );
};

export default BibleVerses;
