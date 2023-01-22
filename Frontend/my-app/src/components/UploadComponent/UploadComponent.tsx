import { Input } from "@mui/material";
import React, { useState } from "react";
import { uploadInstancesJsonService } from "../../service/uploadInstancesJsonService";

export interface UploadComponentProps {

}

export const UploadComponent = (props: UploadComponentProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileReader = new FileReader();
        if(e.target.files === null) return;
        setIsLoading(true);
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = event => {
            if (event.target && event.target.result) uploadInstancesJsonService(event.target.result as string);
            setIsLoading(false)
        }
        fileReader.onerror = event => {
            console.log(event);
            setIsLoading(false)
        }
    }

    return (
        <Input
            type={"file"}
            inputProps={{accept: "application/JSON", }}
            onChange={handleChange}
            disabled={isLoading}
            
        />
    )
}