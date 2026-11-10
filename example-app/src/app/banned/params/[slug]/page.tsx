import { connection } from "next/server";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  await connection();
  const { slug } = await params;
  return (
    <>
      <h1>Hva er params?</h1>
      <div>{slug}</div>
    </>
  );
}

// export const instant = false;

export function generateStaticParams() {
  return [{ slug: "__placeholder__" }];
}
