import axios from "axios";
import React from "react";
import { UploadExcelView } from "./uploadexcelView";
import { API_KIWI } from "@utils/Const/Api";

interface UploadExcelViewProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => Promise<void>;
}

const UploadExcelContainer = (): JSX.Element => {

  const [selectedFile, setSelectedFile] = React.useState(null);

  
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('file added')
    setSelectedFile(e.target.files[0])
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    console.log('successfully added')
    try {
      const fetchData=await axios.post(API_KIWI+"exports/upload",formData)
      console.log(fetchData.data.data)
      console.log('success')
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };

  

  return (
    <UploadExcelView
    onChange={onChange}
    handleSubmit={handleSubmit}
    />
  );
};

export { UploadExcelContainer };
export type { UploadExcelViewProps };

