import Antonym from "./Antonym";
import Definition from "./Definition";
import Synonym from "./Synonym";

const Meanings = ({ children, mean }) => {
  const synonymsLength = mean.synonyms.length;
  const antonymsLength = mean.antonyms.length;

  return (
    <article className="flex flex-col sm:space-y-10 space-y-8">
      <div className="flex items-center space-x-5">
        <h2 className="sm:text-2xl text-lg font-bold italic">{children}</h2>
        <hr className="flex-1" />
      </div>
      <div>
        <h3 className="text-[#757575] sm:text-xl sm:mb-6 mb-4">Meaning</h3>
        <ul className="list-disc ml-5 sm:text-lg text-[#2D2D2D] space-y-3 divide-y">
          {mean.definitions.map((def) => (
            <Definition key={def.definition} def={def}>{def.definition}</Definition>
          ))}
        </ul>
      </div>
      {!synonymsLength ? null : (
        <div className="flex space-x-4 sm:text-xl">
          <h3 className="text-[#757575] ">Synonyms</h3>
          <div className="flex space-x-4 text-[#A445ED] flex-wrap">
            {mean.synonyms.map((syn) => (
              <Synonym key={syn}>{syn}</Synonym>
            ))}
          </div>
        </div>
      )}

      {!antonymsLength ? null : (
        <div className="flex space-x-4 sm:text-xl">
          <h3 className="text-[#757575] ">Antonyms</h3>
          <div className="flex space-x-4 text-[#A445ED] flex-wrap">
            {mean.antonyms.map((ant) => (
              <Antonym key={ant}>{ant}</Antonym>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default Meanings;
