import dictionaryData from '../../../data/dictionary.json';

export async function generateStaticParams() {
  return Object.keys(dictionaryData).map(slug => ({ slug }));
}

export default function WordPage({ params }) {
  const { slug } = params;
  const meaning = dictionaryData[slug];

  if (!meaning) {
    return <p className="p-8 text-red-500">Kata tidak ditemukan</p>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">{slug}</h1>
      <p className="mt-4 text-lg">{meaning}</p>
    </div>
  );
}

