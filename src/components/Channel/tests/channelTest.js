import { fireEvent, queryByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddMembers from "../AddMembers";

test("Test list item click", () => {
  render(<App />);
  userEvent.keyboard('hello')
  expect (queryByText('hello@gmail.com')).toBeInTheDocument
})