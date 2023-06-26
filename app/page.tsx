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

/*
getBlogData is a server call for data, it can be a DB query as well
*/

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

/*
This page is SSR by default
we can use `use-server` OR `use-client` directives as well to specify rendering
but by default it is going to SSR only for a page/component
*/

/*
1. any client component shows up inside the source files but server components donot showup.
2. if a client component is inside a server component then it stays a client side component.
3. if a server component is inside a client component then it shows i the bundle i.e. not a server component
*/
