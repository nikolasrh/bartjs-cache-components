export default async function Page() {
  const name = await getName();
  return <h1>Velkommen, {name}!</h1>;
}

async function getName() {
  "use cache";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Nikolas";
}
