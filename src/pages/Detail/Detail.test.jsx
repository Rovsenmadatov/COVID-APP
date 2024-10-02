import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import {getAllByAltText,getByRole,getByText,getByTestId, render, screen   } from "@testing-library/react"
import  configureStore from 'redux-mock-store';
import {thunk} from "redux-thunk"
import Detail from "."
import { storeData } from "../../constants";

const mockStore = configureStore([thunk])


it("yüklenme durumunda doğru bileşenler ekrana basılır", () => {

 const store = mockStore({
        isLoading:true,
        error:null,
        date:null,
    })


    render(
        <Provider store={store}>
            <BrowserRouter >
                <Detail />
            </BrowserRouter >
        </Provider>)



    screen.getAllByTestId("card-loader")
    screen.getByTestId("header-loader")
})


it("hata durumunda hata bileşeni ekrana basılır", ()=>{
  const store = mockStore({
        isLoading:false,
        error:"Server responded with status code of 404 (undefined)",
        data:null,
    });


    render(
        <Provider store={store}>
            <BrowserRouter>
              <Detail />
            </BrowserRouter>
        </Provider>
    )

    screen.getByText(/Server responded with/i)
})

it("veri gelme durumunda kart bileşenleri ekrana basılır", ()=>{
    const store = mockStore(storeData);
    
    render(
        <Provider store={store}>
            <BrowserRouter>
              <Detail />
            </BrowserRouter>
        </Provider>
    );


})