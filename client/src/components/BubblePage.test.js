import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth } from "../utils/axiosWithAuth";

jest.mock("../utils/axiosWithAuth", () => ({
  get: jest.fn(),
}));

test("Fetches data and renders the bubbles", () => {
  axiosWithAuth.mockResolvedValueOnce({
    data: [
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff",
        },
        id: 1,
      },
      {
        color: "limegreen",
        code: {
          hex: "#99ddbc",
        },
        id: 2,
      },
      {
        color: "aqua",
        code: {
          hex: "#00ffff",
        },
        id: 3,
      },
    ],
  });

  const { getAllByTestId, queryAllByTestId, rerender } = render(
    <BubblePage bubbles={[]} />
  );

  expect(queryAllByTestId(/bubble/i)).toHaveLength(0);
  // data-testid="bubblepage"

  // // We will rerender the component with our dummy data passed in as the new props
  rerender(<BubblePage bubbles={bubbles} />);

  // // Assert that we now have dog images rendering!
  expect(queryAllByTestId(/bubble/i)).toHaveLength(3);
});

// test("Renders without errors", () => {
//   render(<Login />)
// })

// test("Renders without errors", () => {
//   render(<BubblePage />);
// })

// test("Fetches data and renders the bubbles", () => {
//   // Finish this test
//   render(<BubblePage getColors={[]}/> )
// });

// test("")

// test("Renders without errors", () => {
//   render(<MissionsList missions={[]} />);
// });

// test("Rerenders with new props", () => {
//   const { rerender } = render(<MissionsList missions={[]} />);

//   // rerender with missions data passed in
//   rerender(<MissionsList missions={missionsData} />);

//   // query for the missions that are being rendered
//   // assertions
//   const missionsList = screen.getAllByTestId(/missions/i);

//   expect(missionsList).toHaveLength(3);
// });
