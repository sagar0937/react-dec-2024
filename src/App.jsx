import { useState } from "react";

import "./App.css";
import PostDataExample from "./pages/customHooks/fetchHooksUse";
import GetDataExample from "./pages/customHooks/fetchHooksGet";
import ClickCounter from "./pages/hoc/clickCounter";
import Mouseovercount from "./pages/hoc/Mouseovercount";
import ParentComponent from "./pages/memo/ParentComponent";
import UseMemo2 from "./pages/usememo/Usememo2";
import FilterList from "./pages/usememo/Usememo";
import ExpensiveCalculation from "./pages/usememo/ExpensiveCalculation";
import useWindowresize from "./hooks/useWindowresize";
import DebounceUse from "./pages/customHooks/DebounceUse";
import ToggleUsecase from "./pages/customHooks/ToggleUsecase";
import Previoususecase from "./pages/customHooks/Previoususecase";
import Timer from "./pages/Timer";
import Radiobtn from "./pages/Radiobtn";
import ForwardRef from "./pages/ForwardRef";
import DebouncedInput from "./pages/Debounced";
import TextAreaRef from "./pages/TextAreaRef";
import DropdownSelectCountry from "./pages/DropdownSelectCountry";
import PracticeJs from "./pages/PracticeJs";
import SelectAllCheckbox from "./pages/selectAllCheckbox/SelectAllCheckbox";
import SelectCountryStateCity from "./pages/selectCountryStateCity/SelectCountryStateCity";
import FolderStructure from "./pages/folderstructure/FolderStructure";
import { data } from "./data/folder";

function App() {
  // const {
  //   data: { height, width },
  // } = useWindowresize();

  return (
    <>
      <h1>
        Hello
        {/* Hello height{height}-width{width} */}
      </h1>
      <FolderStructure data={data} />
      {/* <SelectCountryStateCity /> */}
      {/* <PracticeJs /> */}
      {/* <PostDataExample />
      <GetDataExample /> */}
      {/* <ClickCounter buttonName="Click Me!" />
      <Mouseovercount buttonName="MouseOver Me!" /> */}
      {/* <ParentComponent /> */}
      {/* <UseMemo2 /> */}
      {/* <FilterList /> */}
      {/* <ExpensiveCalculation /> */}
      {/* <DebounceUse /> */}
      {/* <ToggleUsecase /> */}
      {/* <Previoususecase /> */}
      {/* <Timer /> */}
      {/* <Radiobtn /> */}
      {/* <ForwardRef /> */}
      {/* <DebouncedInput />  */}
      {/* <TextAreaRef /> */}
      {/* <DropdownSelectCountry /> */}
      {/* <SelectAllCheckbox /> */}
    </>
  );
}

export default App;
