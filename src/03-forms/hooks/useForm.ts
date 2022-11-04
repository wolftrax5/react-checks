import { ChangeEvent, useState } from "react";


export const useForm = <T>(initialState:T) =>{
    const [formData, setFormData] = useState(initialState);
    
    
      const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const resetForm= ()=> {
        setFormData({...initialState})
      }
    
    return { ...formData, formData, onChange, resetForm}
}