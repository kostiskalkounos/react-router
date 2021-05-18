import { Route, useParams } from "react-router";

import HighLightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Kostis", text: "Neovim > Emacs" },
  { id: "q2", author: "Mary", text: "I agree" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>

      {/*
              This works too
      <Route path={`/quotes/:quoteId/comments`}>
        <Comments />
      </Route>
      */}
    </>
  );
};

export default QuoteDetail;
