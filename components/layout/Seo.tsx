import Head from "next/head";

interface SeoProps {
  title?: string;
}

export default function Seo({ title }: SeoProps) {
  return (
    <Head>
      <title>{title && `${title} - `} Factorem</title>
      <meta
        name="description"
        content="This fraol lemecha's personal blog about tech called factorem."
      />
    </Head>
  );
}
