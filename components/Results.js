import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} {...result} />
      ))}
    </div>
  );
}
