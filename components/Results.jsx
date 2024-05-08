import Heading from "./Heading";
import Meanings from "./Meanings";
import Source from "./Source";

const Results = ({ data }) => {
  return (
    <div className="w-full flex flex-col sm:space-y-10 space-y-8">
      <Heading word={data.word} phonetic={data.phonetic} />
      {data.meanings.map((mean) => (
        <Meanings key={mean.partOfSpeech} mean={mean}>
          {mean.partOfSpeech}
        </Meanings>
      ))}
      <Source url={data.sourceUrls} />
    </div>
  );
};

export default Results;
