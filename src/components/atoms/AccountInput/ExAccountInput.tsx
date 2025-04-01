import Divider from "@/components/atoms/Divider";
import AccountInput from "@/components/atoms/AccountInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface ExAccountInputProps {
  title?: string;
  accountPlaceholder?: string;
  bankPlaceholder?: string;
  description?: string;
  name: string;
  onReset: () => void;
}

const ExAccountInput = ({
  title,
  accountPlaceholder,
  bankPlaceholder,
  description,
}: ExAccountInputProps) => {
  const formSchema = z.object({
    account: z.string(),
  });

  type FormData = z.infer<typeof formSchema>;

  const { control, resetField } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
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
        <p>- AccountInput UI 및 form control 테스트 적용 상태</p>
        <p>
          - name, onReset Prop은 내부 Schema 적용으로 작동합니다. 스토리북에서는
          수정이 불가합니다.
        </p>
        <p>
          - 은행 찾기, 계좌 노출 등의 기능은 비즈니스 로직인 관계로 하드코딩되어
          있습니다.
        </p>
      </div>
      <Divider />
      <AccountInput
        name="account"
        control={control}
        title={title}
        accountPlaceholder={accountPlaceholder}
        bankPlaceholder={bankPlaceholder}
        description={description}
        onReset={() => resetField("account")}
      />
    </div>
  );
};

export default ExAccountInput;
