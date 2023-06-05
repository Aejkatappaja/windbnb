import Fetching from "@/components/Fetching";

export default async function Home() {
  return (
    <main className="bg-slate-50 text-black">
      <div className="flex items-center justify-between px-20 py-14">
        <h1 className="text-2xl font-bold">Stays in Finland</h1>
      </div>
      {/* <section className="mx-auto flex h-full w-[95vw] flex-wrap justify-around">
        {data.map((stay: StayType, index: number) => {
          return <Card key={index} stay={stay} />;
        })}
      </section> */}
      <Fetching />
    </main>
  );
}
