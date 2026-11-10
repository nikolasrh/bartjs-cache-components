export default function Page() {
  return (
    <>
      <h1>Hva er klokka?</h1>
      <time>{now()}</time>
    </>
  );
}

async function now() {
  "use cache";
  return new Date().toLocaleString();
}
