import { useEffect } from "react";
import { SuggestionAPIResponse } from "../../types";
import { useAPIDataStates } from "./useAPIDataStates";

export const useSuggestions = () => {
	const { data, error, loading, setData, setError, setLoading } =
		useAPIDataStates<SuggestionAPIResponse | null>(null);

	useEffect(() => {
		let isMounted = true;
		setLoading(true);

		const getData = async () => {
			try {
				const res = await fetch("/api/suggestions");

				if (res.status !== 200 && res.status !== 304)
					throw new Error("Failed to get data");

				const data = await res.json();

				if (!isMounted) return;
				setData(data);
			} catch (err) {
				console.log(err);
				if (!isMounted) return;
				setError(true);
			} finally {
				if (!isMounted) return;
				setLoading(false);
			}
		};

		getData();

		return () => {
			isMounted = false;
		};
	}, []);

	return { suggestions: data, loading, error };
};
