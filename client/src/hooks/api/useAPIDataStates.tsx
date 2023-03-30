import React, { useState } from "react";

export function useAPIDataStates<T>(initialValue: T) {
	const [data, setData] = useState<T>(initialValue);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	return { data, setData, loading, setLoading, error, setError };
}
