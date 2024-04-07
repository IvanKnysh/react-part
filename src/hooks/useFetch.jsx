import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				setError("");

				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Responce error. Status: " + response.status);
				}

				const jsonData = await response.json();

				setData(jsonData);
			} catch (e) {
				setData([]);
				setError(e.message);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
