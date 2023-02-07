import { CountInstance } from "../../models/CountInstance";
import { getConnection } from "../connection";


/**
 * Inserts an array of instances into the db
 * @param instances 
 * @returns if the command completed without errors
 */
export const selectNumberOfHumans = async () => {
    const connection = getConnection();
    return new Promise<CountInstance[]>(res => {
        const results: CountInstance[] = [];
        connection.execute(
            `SELECT ROUND(instanceTimestamp, -6)    AS bucket,
                    COUNT(distinct(PersonID))       AS COUNT
            FROM   instancetable
            GROUP  BY bucket;
        `,
            (err, rows) => {
                if (err) throw new Error("SQL Exception: " + err);
                rows.forEach(
                    row => {
                        results.push({
                            time: row["bucket"] as number,
                            count: row["COUNT"] as number
                        })
                    }
                )
                res(results)
            }
        )
    })

} 