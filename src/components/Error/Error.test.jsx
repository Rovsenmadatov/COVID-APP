import { render } from "@testing-library/react"
import Error from "."
import  userEvent  from '@testing-library/user-event';


describe("error bileşeni testleri", () => {
    const user = userEvent.setup();
    const mockFn = jest.fn();
    let comp;

    beforeEach(()=>{
        comp = render(<Error message={"Failed with status code of 404"} retry={mockFn} />)
    })



    it("error bileşeni doğru hata mesajını gösterir",  () => {
        comp.getByText(/failed with/i)
    })

    it("error bileşini tekrar dene butonu çalışır",async  () => {
        const button = comp.getByRole("button")

        await user.click(button);

        expect(mockFn).toHaveBeenCalled()
    })

})
