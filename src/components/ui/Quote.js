import React from "react";

const Quote = ({ quote }) => {
  return (
    <section>
      {quote.map((quote) => (
        <article className="quote" key={quote.quote_id}>
          <i>"{quote.quote}"</i>
          <strong>
            - {quote.author}, <span>{quote.series}</span>.
          </strong>
        </article>
      ))}
    </section>
  );
};

export default Quote;
