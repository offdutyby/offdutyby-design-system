import { userEvent } from "@storybook/test";
import Button from "./index";
import { render, screen, cleanup } from "@testing-library/react";
import { beforeEach, describe, expect, vi } from "vitest";

describe("Button Component", () => {
  beforeEach(() => {
    cleanup();
  });

  it("기본 렌더링 테스트를 실행합니다.", () => {
    render(
      <Button id="test-button" name="testButton">
        테스트 확인
      </Button>
    );

    const buttonEl = screen.getByTestId("test-button");

    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveTextContent("테스트 확인");
  });

  it("유저의 버튼 클릭(onClick) 콜백 테스트를 진행합니다.", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button id="test-button" name="testButton" onClick={handleClick}>
        테스트 확인
      </Button>
    );

    const buttonEl = screen.getByTestId("test-button");

    await user.click(buttonEl);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
