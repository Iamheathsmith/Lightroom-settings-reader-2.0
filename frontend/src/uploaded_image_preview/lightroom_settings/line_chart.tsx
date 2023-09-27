import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ChartOptions,
	LineOptions,
} from "chart.js";
import { Tab } from "semantic-ui-react";

import "./index.scss";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const LineChartArea = ({
	base,
	red,
	blue,
	green,
}: {
	base: Array<string>;
	red: Array<string>;
	blue: Array<string>;
	green: Array<string>;
}) => {
	const panes = [
		{
			menuItem: "Basic",
			render: () => (
				<Tab.Pane className='line-chart-tab'>
					<LineChart lineData={base} lineColor='black' />
				</Tab.Pane>
			),
		},
		{
			menuItem: "Red",
			render: () => (
				<Tab.Pane className='line-chart-tab'>
					<LineChart lineData={red} lineColor='red' />
				</Tab.Pane>
			),
		},
		{
			menuItem: "Blue",
			render: () => (
				<Tab.Pane className='line-chart-tab'>
					<LineChart lineData={blue} lineColor='blue' />
				</Tab.Pane>
			),
		},
		{
			menuItem: "Green",
			render: () => (
				<Tab.Pane className='line-chart-tab'>
					<LineChart lineData={green} lineColor='green' />
				</Tab.Pane>
			),
		},
	];

	return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};

export const LineChart = ({ lineData, lineColor }: { lineData: Array<string> | undefined; lineColor: string }) => {
	const covertedData = lineData?.map((point) => {
		const data = point.split(", ");
		return { x: Number(data[0]), y: Number(data[1]) };
	});

	const data = {
		labels: Array(256)
			.fill(null)
			.map((u, i) => i),
		datasets: [
			{
				label: "",
				data: [
					{ x: 0, y: 0 },
					{ x: 255, y: 255 },
				],
				fill: false,
				backgroundColor: "rgb(50 50 50 / 50%)",
			},
			{
				label: "",
				data: covertedData,
				fill: false,
				backgroundColor: "white",
				borderColor: lineColor,
				tension: 0.4,
			},
		],
	};
	const options: ChartOptions<"line"> = {
		plugins: {
			filler: { propagate: false },
			title: { display: true },
		},

		animation: {
			duration: 0,
		},
		scales: {
			y: {
				beginAtZero: true,
				min: 0,
				max: 255,
				ticks: { display: false, count: 5 },
				grid: { drawTicks: false },
			},
			x: {
				beginAtZero: true,
				min: 0,
				max: 255,
				ticks: { display: false, count: 5 },
				grid: { drawTicks: false },
			},
		},
		interaction: {
			intersect: false,
		},
		events: [],
		aspectRatio: 1,
	};

	return <Line data={data} options={options}></Line>;
};
