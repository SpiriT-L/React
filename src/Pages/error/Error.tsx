import { Helmet } from 'react-helmet-async';

export default function Error() {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <h1>Error 404</h1>
    </>
  );
}
