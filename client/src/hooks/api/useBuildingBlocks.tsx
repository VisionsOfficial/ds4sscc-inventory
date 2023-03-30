import { useEffect } from "react";
import { IBuildingBlock } from "../../types";
import { useAPIDataStates } from "./useAPIDataStates";

type Props = {
	related_standards?: string[];
	related_specifications?: string[];
	reference_implementations?: string[];
	implemented_mims?: string[];
	recommended_by_dssc?: boolean;
	scope?: string;
	maturity?: string;
};

export const useBuildingBlocks = (props: Props = {}) => {
	const { data, error, loading, setData, setError, setLoading } =
		useAPIDataStates<IBuildingBlock[]>([]);
	const {
		related_specifications,
		implemented_mims,
		maturity,
		recommended_by_dssc,
		reference_implementations,
		related_standards,
		scope,
	} = props;

	useEffect(() => {
		let isMounted = true;
		setLoading(true);

		let url = "/api/buildingblocks?a=1";
		if (related_specifications)
			url += `&related_specifications=${encodeURIComponent(
				JSON.stringify(related_specifications)
			)}`;
		if (related_standards)
			url += `&related_standards=${encodeURIComponent(
				JSON.stringify(related_standards)
			)}`;
		if (reference_implementations)
			url += `&reference_implementations=${encodeURIComponent(
				JSON.stringify(reference_implementations)
			)}`;
		if (implemented_mims)
			url += `&implemented_mims=${encodeURIComponent(
				JSON.stringify(implemented_mims)
			)}`;
		if (recommended_by_dssc)
			url += `&implemented_mims=${recommended_by_dssc.toString()}`;
		if (maturity) url += `&maturity=${maturity}`;
		if (scope) url += `&scope=${scope}`;

		const getData = async () => {
			try {
				const res = await fetch(url);

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
	}, [props]);

	return { buildingBlocks: data, loading, error };
};
