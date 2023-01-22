import { Instance } from "../../models/Instance";
import { getConnection } from "../connection";


// simple query
export const insertInstances = (instances: Instance[]) => {
    const connection = getConnection()
    instances.forEach(
        inst => connection.execute(
            "INSERT INTO instancetable (oID, instanceTimestamp, PersonID, PositionX, PositionY) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE oID=VALUES(oID), PositionX=VALUES(PositionX), PositionY=VALUES(PositionY);",
            [inst.oID, inst.instanceTimestamp, inst.PersonID, inst.PositionX, inst.PositionY]
        )
    )
} 