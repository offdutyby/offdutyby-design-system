import { useForm, FormProvider } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormWrapper = ({ children, defaultValues, ...props }: any) => {
  const methods = useForm({ defaultValues, ...props });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormWrapper;
