import { Route, useParams } from "react-router";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
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
