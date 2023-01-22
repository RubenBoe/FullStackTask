export interface Instance {
    oID: string;
    instanceTimestamp: number;
    PersonID: number;
    PositionX: number;
    PositionY: number;
}

export interface JSONInstance {
    timestamp: {
        $date: {
            $numberLong: string;
        }
    },
    _id: {
        $oid: string;
    },
    instances: Record<string,
        {
            pos_x: number,
            pos_y: number
        }
    >
}