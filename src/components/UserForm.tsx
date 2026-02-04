import {
  Button,
  TextField,
  Stack,
} from "@mui/material";

import { userFormSchema } from "../config/userFormSchema";
import type { User } from "../types/User";
import { useEffect, useState } from "react";



interface Props {
  initialData?: User;
  onSubmit: (data: User) => void;
}

export default function UserForm({ initialData, onSubmit }: Props) {
  const [formData, setFormData] = useState<User>(
    initialData || ({} as User)
  );
  const [errors, setErrors] = useState<any>({});
  
  useEffect(() => {
  if (initialData) {
    setFormData(initialData);
  } else {
    setFormData({} as User); // 👈 clear form
    setErrors({});           // 👈 clear validation errors
  }
}, [initialData]);



  const validate = () => {
    const newErrors: any = {};
    userFormSchema.forEach((field) => {
      const value = (formData as any)[field.name];

      if (field.required && !value) {
        newErrors[field.name] = "Required";
      }

      if (field.pattern && !field.pattern.test(value)) {
        newErrors[field.name] = field.errorMessage;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (validate()) onSubmit(formData);
  };

  return (
    <Stack spacing={2}>
      {userFormSchema.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          type={field.type}
          value={(formData as any)[field.name] || ""}
          onChange={(e) =>
            handleChange(field.name, e.target.value)
          }
          error={!!errors[field.name]}
          helperText={errors[field.name]}
          fullWidth
        />
      ))}

      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </Stack>
  );
}
