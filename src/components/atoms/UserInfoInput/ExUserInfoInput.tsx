import UserInfoInput from "@/components/atoms/UserInfoInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Divider from "@/components/atoms/Divider";

interface ExUserInfoInputProps {
  title?: string;
  placeholder?: string;
  description?: string;
  name: string;
  onReset: () => void;
}

const ExUserInfoInput = ({
  title,
  placeholder,
  description,
}: ExUserInfoInputProps) => {
  const formSchema = z.object({
    username: z
      .string()
      .min(3, "사용자 이름은 최소 3자 이상이어야 합니다.")
      .max(20, "사용자 이름은 최대 20자까지 가능합니다."),
  });

  type FormData = z.infer<typeof formSchema>;

  const { control, resetField } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div>
        <h2>
          해당 컴포넌트는 react-hook-form 테스트를 위한 테스트 세팅입니다.
        </h2>
        <p>
          * Input Component를 재사용 한 UserInfoInput Component의 예시
          스토리입니다.
        </p>
        <p>* UserInfoInput UI 및 form control 테스트 적용 상태</p>
        <p>
          * name, onReset Prop은 내부 Schema 적용으로 작동합니다. 스토리북에서는
          수정이 불가합니다.
        </p>
      </div>
      <Divider />
      <UserInfoInput<FormData>
        name="username"
        control={control}
        title={title}
        placeholder={placeholder}
        description={description}
        onReset={() => resetField("username")}
      />
    </div>
  );
};

export default ExUserInfoInput;
