import Divider from "@/components/atoms/Divider";
import CurrencyInput from "@/components/atoms/CurrencyInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface ExCurrencyInputProps {
  placeholder?: string;
  description?: string;
}

const ExCurrencyInput = ({
  description,
  placeholder,
}: ExCurrencyInputProps) => {
  const formSchema = z.object({
    content: z.string(),
  });

  type FormData = z.infer<typeof formSchema>;

  const { control } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        lineHeight: "1.4",
      }}
    >
      <div>
        <h2>
          해당 컴포넌트는 react-hook-form 테스트를 위한 테스트 세팅입니다.
        </h2>
        <p>
          - Input Component를 재사용 한 UserInfoInput Component의 예시
          스토리입니다.
        </p>
        <p>- ContentsInput UI 및 form control 테스트 적용 상태</p>
        <p>
          - name, onReset Prop은 내부 Schema 적용으로 작동합니다. 스토리북에서는
          수정이 불가합니다.
        </p>
      </div>
      <Divider />
      <CurrencyInput
        name="content"
        control={control}
        description={description}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ExCurrencyInput;
