import { useEffect } from "react";
import { useAPIDataStates } from "./useAPIDataStates";

type Props = {
	resource: "implementations" | "standards" | "specifications";
};

export function useObjectArrayData<T>({ resource }: Props) {
	const { data, error, loading, setData, setError, setLoading } =
		useAPIDataStates<T[]>([]);

	useEffect(() => {
		let isMounted = true;
		setLoading(true);

		const getData = async () => {
			try {
				const res = await fetch(`/api/${resource}`);

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

	return { data, loading, error };
}
