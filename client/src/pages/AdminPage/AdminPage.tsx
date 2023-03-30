import { PropsWithChildren, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/Button/Button";
import { Input } from "../../components/atoms/Input/Input";

type AdminPageProps = {};

export const AdminPage = ({}: PropsWithChildren<AdminPageProps>) => {
	const navigate = useNavigate();
	const passwordRef = useRef<HTMLInputElement>(null);

	const login = async () => {
		if (!passwordRef.current) {
			alert("Error");
			return;
		}

		const password = passwordRef.current.value;

		const res = await fetch("/api/auth/login", {
			method: "POST",
			body: JSON.stringify({ password }),
			headers: {
				"content-type": "application/json",
			},
		});
		const data = await res.json();
		if (data.token) {
			sessionStorage.setItem("adminToken", data.token);
			navigate("/admin/portal");
		} else {
			alert("Invalid password");
			return;
		}
	};

	useEffect(() => {
		const checkLogin = async () => {
			if (!sessionStorage.getItem("adminToken")) return false;
			const res = await fetch("/api/admin/check", {
				method: "GET",
				headers: {
					"content-type": "application/json",
					"x-ds4s-admin": sessionStorage.getItem("adminToken") || "",
				},
			});

			if (res.status !== 200) return;

			navigate("/admin/portal");
		};

		checkLogin();
	}, []);

	return (
		<>
			This page is password protected, please enter password
			<Input ref={passwordRef} />
			<Button onClick={() => login()}>Submit</Button>
		</>
	);
};
