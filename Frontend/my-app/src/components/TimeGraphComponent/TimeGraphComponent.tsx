import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export interface TimeGraphComponentProps {

}

export const TimeGraphComponent = (props: TimeGraphComponentProps) => {
    const data = [{name: "Page A", uv: 400},{name: "Page A", uv: 500},{name: "Page A", uv: 200},{name: "Page A", uv: 700},{name: "Page A", uv: 800},{name: "Page A", uv: 900}]
    return (
        <div>
            <LineChart
                data={data}
                width={400}
                height={400}
            >
                <Line 
                    dataKey={"uv"}
                />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    )

}