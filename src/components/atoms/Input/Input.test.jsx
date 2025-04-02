/**
 * ! 해당 컴포넌트의 주석은 학습 및 적용 과정에서 남긴 주석입니다.
 * ! v0.1.0 배포 전, 삭제 예정입니다. by JungHo
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// describe는 해당 컴포넌트의 테스트를 그룹화 시켜 테스트를 실행시키는 역할
describe("Input Component", () => {
  // beforeEach는 본격적인 테스트 실행 전, 작업을 실행
  beforeEach(() => {
    // 이전 테스트에서 DOM에 마운트된 컴포넌트들을 제거하는 역할
    // 메모리 누수 방지, 깨끗한 상태에서 테스트 진행, 이전 테스트의 부작용이 현재 테스트에 영향 X
    cleanup();
  });

  // 1. 기본 렌더링 테스트
  it("기본 렌더링 테스트를 실행합니다.", () => {
    // Rendering, componentn id 적용
    render(<Input id="test-input" name="testInput" />);

    // componentn id 사용 -> 조회
    const inputElement = screen.getByTestId("test-input");

    /**
     * * ToBeInTheDocument 정의
     * * 특정 요소가 DOM에 존재하는지 확인하는 역할
     * * 'document.body...' 으로 접근하는 구문을 추상화 한 메서드로 추측
     * ? jest-dom에서 제공하는 matcher 메서드 => setup 파일에 jest-dom을 import하는 이유를 파악
     */
    expect(inputElement).toBeInTheDocument();

    // input type 적용 테스트 => 기대값 'text'
    expect(inputElement.type).toBe("text");

    // input value 적용 테스트 => 기대값 ""
    expect(inputElement.value).toBe("");

    // input disabled 상태 적용 테스트 => 기대값 false
    expect(inputElement.disabled).toBe(false);
  });

  // 2. 레이블 렌더링 테스트
  it("레이블 렌더링 테스트를 실행합니다.", () => {
    render(<Input id="test-input" label="Test Label" />);

    // 렌더링된 컴포넌트 내에서 지정된 텍스트를 포함하는 요소를 찾아서 반환
    // 일반적으로 레이블,제목,문단,레이블 등의 텍스트 콘텐츠를 찾을 때 사용
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();

    // '.tageName'은 DOM 요소의 태그 이름 조회 -> DOM API -> tagName 속성은 항상 대문자로 반환
    // Label 가져온 태그 이름이 정확히 'LABEL' 태그와 일치하는지 확인
    expect(labelElement.tagName).toBe("LABEL");

    // DOM 요소의 'for' 속성 값을 조회(input tag의 id 값과 일치) -> for 속성 값이 'test-input'과 일치하는지 확인
    // 접근성 측면 테스트 : label 요소가 같은 ID를 가진 input 필드와 올바르게 연결되어 있는지 확인.
    // label for 속성과 연결된 입력 필드의 id가 일치해야 레이블 클릭 시, 필드에 포커스가 이동
    expect(labelElement.getAttribute("for")).toBe("test-input");
  });

  // 3. 필수 필드 표시 테스트
  it("Input의 필수 필드 표시 테스트를 진행합니다.", () => {
    render(<Input id="test-input" label="Required Field" required={true} />);

    const inputElement = screen.getByTestId("test-input");
    expect(inputElement).toBeRequired();
  });

  // 4. 초기값 테스트
  it("Input의 defaultValue 테스트를 진행합니다.", () => {
    render(<Input id="test-input" value="Initial Value" />);

    const inputElement = screen.getByTestId("test-input");
    expect(inputElement.value).toBe("Initial Value");
  });

  // 5. 사용자 입력 테스트(user.type이 비동기 메서드라서 async 적용)
  it("유저의 폼 타이핑 테스트를 진행합니다.", async () => {
    /**
     * * 유저의 상호작용을 위한 세팅
     * * userEvent는 @testing-library 라이브러리의 일부, 사용자 상호작용 시뮬레이션에 사용
     * * setup(): userEvent 인스턴스를 초기화 -> 해당 인스턴스를 통해 각종 사용자 이벤트(클릭, 입력 등)를 시뮬레이션
     * * fireEvent보다 더 실제 사용자 행동에 가깝게 이벤트 시뮬레이션이 가능하다.
     */
    const user = userEvent.setup();
    render(<Input id="test-input" />);

    const inputElement = screen.getByTestId("test-input");

    /**
     * * user.type은 지정된 요소에 텍스트를 입력하는 사용자 동작을 시뮬레이션
     * * user.type(입력할 요소, 입력할 text)
     * * userEvent의 type메서드는 실제 브라우저에서처럼 각 문자를 순차적으로 입력하여 키보드 이벤트를 발생시킨다.
     */
    await user.type(inputElement, "Hello World");

    expect(inputElement.value).toBe("Hello World");
  });

  // 6. onChange 콜백 테스트(type의 비동기 적용으로 async 추가)
  it("onChange 콜백 테스트를 진행합니다.", async () => {
    // mock function / jest.fn()과 동일한 기능 / 함수 호출 추적, 호출 횟수, 전달 인자 기록
    // input의 onChange prop으로 전달
    const handleChange = vi.fn();
    // userEvent 인스턴스 초기화
    const user = userEvent.setup();

    render(<Input id="test-input" onChange={handleChange} />);

    const inputElement = screen.getByTestId("test-input");
    //
    await user.type(inputElement, "a");

    // expect(handleChange) : 모의 함수에 대한 검증 시작
    // toHaveBeenCalledTimes : 모의 함수가 호출된 횟수 확인
    expect(handleChange).toHaveBeenCalledTimes(1);

    /**
     * * handleChange.mock.calls : 모의 함수의 모든 호출 기록을 담은 배열
     * * handleChange.mock.calls[0] : 첫 번째 호출 선택
     * * handleChange.mock.calls[0][0] : 첫 번째 호출의 첫 번째 인자를 선택(이벤트 객체 : e)
     * * toBe("a") : 타이핑 된 값 검증
     * * onChange 이벤트 핸들러에 전달된 이벤트 객체의 value와 userEvent.type으로 입력된 값이 일치 하는지 테스트
     */
    expect(handleChange.mock.calls[0][0].target.value).toBe("a");
  });

  // 7. onBlur 콜백 테스트
  it("Input의 focus-out 콜백 테스트를 진행합니다.", () => {
    const handleBlur = vi.fn();

    render(<Input id="test-input" onBlur={handleBlur} />);

    const inputElement = screen.getByTestId("test-input");

    /**
     * * fireEvent는 더 낮은 수준의 API로, 개별 DOM 이벤트를 직접 발생시킴
     * * 간단한 이벤트 시뮬레이션에 적합
     * * 일관성 측면에서는 userEvent로 통합하는 것도 방법
     * ? fireEvent와 userEvent의 성능, 속도 등의 차이점을 분석할 필요가 있다.
     */
    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  // 8. 비활성화 상태 테스트
  it("Input의 disabled 테스트를 진행합니다.", () => {
    render(<Input id="test-input" disabled={true} />);

    const inputElement = screen.getByTestId("test-input");
    expect(inputElement).toBeDisabled();
  });

  // 9. placeholder 테스트
  it("Input의 placeholder 테스트를 진행합니다.", () => {
    render(<Input id="test-input" placeholder="Enter your name" />);

    const inputElement = screen.getByTestId("test-input");
    expect(inputElement.placeholder).toBe("Enter your name");
  });

  // 10. maxLength 제한 테스트
  it("Input의 maxLength 테스트를 진행합니다.", () => {
    render(<Input id="test-input" maxLength={5} />);

    const inputElement = screen.getByTestId("test-input");
    expect(inputElement).toHaveAttribute("maxLength", "5");
  });

  // 11. 접근성(aria) 속성 테스트
  it("Input의 접근성 속성 테스트를 진행합니다.", () => {
    render(<Input id="test-input" error="Invalid input" />);

    const inputElement = screen.getByTestId("test-input");
    expect(inputElement).toHaveAttribute("aria-invalid", "true");
  });
});
