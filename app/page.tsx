import { Card } from "@/components/Card";
import { getAllStays } from "./lib/stays";
import { StayType } from "@/types/stay";

export default async function Home() {
  const data = await getAllStays();
  return (
    <main className="text-black bg-white">
      <div className="py-14 px-20 flex items-center justify-between border-2">
        <h1 className="text-2xl font-bold">Stays in Finland</h1>
      </div>
      <section className="flex h-full w-[95vw] border-2 mx-auto flex-wrap justify-around ">
        {data.stays.map((stay: StayType, index: number) => {
          return <Card key={index} stay={stay} />;
        })}
      </section>
    </main>
  );
}
