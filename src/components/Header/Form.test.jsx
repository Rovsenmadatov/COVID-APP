import { fireEvent, getByPlaceholderText, render } from "@testing-library/react";
import Form from "./Form"
import userEvent from "@testing-library/user-event"


it("Form gönderildiğinde detay sayfasına yönlendirir", async ()=>{

    const user = userEvent.setup();

   const mockFn = jest.fn();
   const {getByPlaceholderText,getByRole} =  render(<Form handleSumbit={mockFn} />);

    const input = getByPlaceholderText("Ülke ismine Göre Ara");

    await user.type(input,"Azerbaijan");

   const button = getByRole("button");

   await user.click(button);

   expect(mockFn).toHaveBeenCalled();
})