function Blog({ params, searchParams }) {
  return (
    <main className="content p-[30px] h-92 bg-[#F7F5FD]" style={{height: 'auto'}}>
      <h1>My Page {JSON.stringify(params)}</h1>
      <p>This is the About page content.</p>
    </main>
  );
}

export default Blog;