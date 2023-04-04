import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Styles from "./ProjectFilter.module.scss";

type FilterType = "publisher" | "implemented_mims" | "scope" | "maturity";

type ProjectFilterProps = {
	type: FilterType;
	filter: string;
	filters: any;
	placeholder: string;
	options: { label: string; value: string }[];
	onChange: (type: FilterType, value: string) => any;
	onClear: (type: FilterType) => any;
};

export const ProjectFilter = ({
	filter,
	filters,
	options,
	type,
	onChange,
	onClear,
}: ProjectFilterProps) => {
	const [currentValue, setCurrentValue] = useState(filters[type]);

	const handleChange = (value: string) => {
		setCurrentValue(value);
		onChange(type, value);
	};

	const handleClear = () => {
		setCurrentValue("");
		onClear(type);
	};

	return (
		<div className={Styles.ProjectFilter}>
			<div className={Styles.Header}>
				<h5>{filter}</h5>
				<span onClick={() => handleClear()}>Clear</span>
			</div>
			<Dropdown
				options={options}
				placeholder={"Select..."}
				onChange={(value: string) => handleChange(value)}
				value={currentValue}
			>
				{type === "maturity" && (
					<div data-circle className={Styles.circle}></div>
				)}
			</Dropdown>
		</div>
	);
};

const Icon = () => {
	return (
		<svg height="20" width="20" viewBox="0 0 20 20">
			<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
		</svg>
	);
};

type DropdownProps = Pick<ProjectFilterProps, "options" | "placeholder"> & {
	value: string;
	onChange: (value: string) => any;
};

const Dropdown = ({
	placeholder,
	options,
	value,
	onChange,
	children,
}: PropsWithChildren<DropdownProps>) => {
	const [showMenu, setShowMenu] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handler = (e: any) => {
			if (selectRef.current && !selectRef.current.contains(e.target)) {
				setShowMenu(false);
			}
		};

		window.addEventListener("click", handler);

		return () => {
			window.removeEventListener("click", handler);
		};
	}, [window]);

	return (
		<div className={Styles.Dropdown}>
			<div
				className={Styles.selected}
				onClick={() => {
					setShowMenu(!showMenu);
				}}
				ref={selectRef}
			>
				{(value === "Quite mature" ||
					value === "Evolving" ||
					value === "Few mature") && (
					<div
						className={`${Styles.item} ${
							Styles[value?.toLowerCase().replaceAll(" ", "_") || ""]
						}`}
						data-circle
					>
						<div className={Styles.circle} data-circle></div>
					</div>
				)}
				<span style={{ display: "flex", alignItems: "center" }}>
					{value || placeholder}
				</span>
				<Icon />
			</div>
			{showMenu && (
				<div className={Styles.menu}>
					{options.map((option) => (
						<div
							className={`${Styles.item} ${
								Styles[option.value.toLowerCase().replaceAll(" ", "_")]
							}`}
							key={option.value}
							onClick={() => {
								onChange(option.value);
							}}
						>
							{children} {option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
