"use client";
import { CardType } from "@component/types/types";

export default function Card({ title, description, date }: CardType) {
  const handleOnClick = () => {};
  return (
    <div>
      <h2> {title}</h2>
      <p>{description}</p>
      <time dateTime={date}>{date}</time>
      <div>
        <button onClick={handleOnClick}>Go</button>
      </div>
    </div>
  );
}

/*
Card is a CSR component, since we have used the directive for client.
client components can have a state and click handlers wheras server components cannot have that  
*/
