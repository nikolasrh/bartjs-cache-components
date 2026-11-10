import { cacheLife, cacheTag } from "next/cache";

type PageProps = {
  searchParams: Promise<{ navn: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  return (
    <h1>
      Velkommen, <Navn searchParams={searchParams} />
    </h1>
  );
}

async function Navn({ searchParams }: PageProps) {
  const { navn } = await searchParams;
  return navn;
}

// export default function Page() {
//   return <h1>Velkommen til hjemmesiden min! 🔥</h1>;
// }

async function getData(): Data {
  "use cache";
  try {
    const response = await fetch("");

    if (response.ok) {
      const data = await response.json();
      cacheTag(data.id); // Kan kalles med flere args
      cacheLife("hours");
    } else {
      cacheLife("minutes");
    }
  } catch {
    cacheLife("minutes");
  }
}
