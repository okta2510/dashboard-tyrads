'use client'
import Layout from '@/layouts/global';

const ErrorPage = (statusCode, message) => {
  return (
    <Layout>
      <h1>Error Page</h1>
      <h1>Error {statusCode}</h1>
      <p>{message}</p>
      {/* Additional error-specific content */}
    </Layout>
  );
};

export default ErrorPage;