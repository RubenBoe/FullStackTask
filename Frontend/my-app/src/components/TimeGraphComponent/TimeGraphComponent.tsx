import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { CountInstance } from "../../models/CountInstance";
import { useEffect, useState } from "react";
import { getHumansPerTime } from "../../service/getHumansPerTime";

export interface TimeGraphComponentProps {

}

export const TimeGraphComponent = (props: TimeGraphComponentProps) => {

    const [data, setData] = useState<CountInstance[]>([]);

    useEffect(() => {
        getHumansPerTime().then(res => setData(res));

    }, [])


    return (
        <div>
            {data.length > 0 && <LineChart
                data={data}
                width={1000}
                height={400}
            >
                <Line
                    dataKey={"count"}
                />
                <Tooltip
                    labelFormatter={(number) => new Date(number).toLocaleDateString("de", {hour: "2-digit", minute: "2-digit"})}
                />
                <CartesianGrid stroke="#ccc" />
                <XAxis
                    dataKey="time"
                    type="number"
                    domain={[data[0].time - 10000000, data[data.length - 1].time + 10000000]}
                    tickFormatter={(number) => new Date(number).toLocaleDateString("de", {dateStyle: "medium"})}
                />
                <YAxis label={"Number of people"} />
            </LineChart>}
        </div>
    )

}