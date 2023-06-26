import Card from "@component/components/card.client";
import styles from "./page.module.css";

const getBlogData = () => {
  return [
    {
      title: "Blog post RSC",
      description: "Covers RSC in depth",
      formattedDate: "1999",
    },
  ];
};

export default function Home() {
  const data = getBlogData();

  return (
    <main className={styles.main}>
      {data.map(({ title, description, formattedDate }, idx) => (
        <Card
          key={idx}
          title={title}
          description={description}
          date={formattedDate}
        />
      ))}
    </main>
  );
}
