import { useEffect } from "react";
import { useAPIDataStates } from "./useAPIDataStates";

type Props = {
	id: string;
	resource:
		| "implementations"
		| "buildingblocks"
		| "standards"
		| "specifications";
};

export function useUniqueObjectData<T>({ id, resource }: Props) {
	const { data, error, loading, setData, setError, setLoading } =
		useAPIDataStates<T | null>(null);

	useEffect(() => {
		if (!id) return;
		if (!resource) return;

		let isMounted = true;
		setLoading(true);

		const getData = async () => {
			try {
				const res = await fetch(`/api/${resource}/${id}`);

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
	}, [id, resource]);

	return { data, loading, error };
}
