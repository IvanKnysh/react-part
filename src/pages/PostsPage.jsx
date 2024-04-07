import useFetch from "../hooks/useFetch";

const PostsPage = () => {
	const { data, isLoading, error } = useFetch(
		"https://jsonplaceholder.typicode.com/posts"
	);

	return (
		<>
			<h1 className="post-title">Posts</h1>
			<div className="posts-wrapper">
				{error && <p className="error-message">{error}</p>}
				{isLoading && <p>Loading...</p>}
				{data?.map((post) => (
					<div className="post" key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default PostsPage;
