export default function Page() {
  return (
    <>
      <h1>Hva er tallet?</h1>
      <div>{random()}</div>
    </>
  );
}

async function random() {
  "use cache";
  return Math.random();
}
