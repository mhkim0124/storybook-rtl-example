import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./button.stories";

describe("Button", () => {
  const { DefaultButton, DisabledButton } = composeStories(stories);

  it("renders the Button", () => {
    // 버튼 컴포넌트를 렌더링합니다.
    render(<DefaultButton />);
    const button = screen.getByText("default");
    expect(button).toBeVisible();
  });

  it("button click event", () => {
    // jest에서 버튼의 onClick에 전달할 가짜함수를 생성합니다.
    const handleClick = jest.fn();
    render(<DefaultButton onClick={handleClick} />);

    // 렌더링된 항목중 text가 "default"인 컴포넌트를 가져옵니다.
    const button = screen.getByText("default");

    // click event를 발생시킵니다.
    fireEvent.click(button);

    // 버튼의 클릭이벤트가 1번 발생했다면 테스트가 통과됩니다.
    expect(handleClick).toBeCalledTimes(1);
  });

  it("disabled button click event", () => {
    const handleClick = jest.fn();
    render(<DisabledButton onClick={handleClick} />);
    const button = screen.getByText("disabled");
    fireEvent.click(button);

    // 버튼의 클릭이벤트가 발생하지 않았다면 테스트가 통과됩니다.
    return expect(handleClick).toBeCalledTimes(0);
  });
});
