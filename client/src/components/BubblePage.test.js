import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

const colorsData = [
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
];

test("Fetches data and renders the bubbles", () => {
  //Render component
  const {
    rerender,
    getAllByTestId,
    queryAllByTestId,
    findAllByTestId,
  } = render(<ColorList colors={[]} />);
  // const colorList = queryAllByTestId(/bubble/i);
  // expect(colorList).toHaveLength(0);

  // // //Rerender w/props (Act)
  rerender(<ColorList colors={colorsData} />);
  const colorsListWithProps = getAllByTestId(/bubble/i);
  // const colorsListWithProps = getAllByTestId(/bubble/i);
  expect(colorsListWithProps).toHaveLength(1);
});

// jest.mock("../utils/axiosWithAuth", () => ({
//   get: jest.fn(),
// }));

// test("Fetches data and renders the bubbles", () => {
//   axiosWithAuth.mockResolvedValueOnce({
//     data: [
//       {
//         color: "aliceblue",
//         code: {
//           hex: "#f0f8ff",
//         },
//         id: 1,
//       },
//       {
//         color: "limegreen",
//         code: {
//           hex: "#99ddbc",
//         },
//         id: 2,
//       },
//       {
//         color: "aqua",
//         code: {
//           hex: "#00ffff",
//         },
//         id: 3,
//       },
//     ],
//   });

//   const { getAllByTestId, queryAllByTestId, rerender } = render(
//     <BubblePage bubbles={[]} />
//   );

//   expect(queryAllByTestId(/bubble/i)).toHaveLength(0);
//   // data-testid="bubblepage"

//   // // We will rerender the component with our dummy data passed in as the new props
//   rerender(<BubblePage bubbles={bubbles} />);

//   // // Assert that we now have dog images rendering!
//   expect(queryAllByTestId(/bubble/i)).toHaveLength(3);
// });

// const { rerender, getAllByTestId, queryAllByTestId } = render(<BubblePage colors={[]} />);

// const colorList = queryAllByTestId(/color/i);
// expect(colorList).toHaveLength(0);

// rerender(<BubblePage colors={colorsData} />);

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

///SPACE X

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
