import { useParams } from "react-router";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
    </>
  );
};

export default QuoteDetail;
