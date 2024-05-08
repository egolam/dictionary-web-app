import NotFound from "@/components/NotFound";
import Results from "@/components/Results";
import getData from "@/helper/getData";

export default async function Home({ searchParams }) {

  const data = await getData(searchParams.search);

  if (data.statusCode === 404) {
    return <NotFound error={data.content} />;
  }
  return (
    <section className={`w-full flex flex-col ${searchParams.font}`}>
      <Results data={data[0]} />
    </section>
  );
}
