import Location from "./Location";
import PickerDate from "./PickerDate";
import SearchBar from "./SearchBar";

export function Menu() {
  return (
    <div className="bg-white w-full p-5 shadow-md rounded-[24px] flex flex-col md:flex-row">
      <Location />
      <PickerDate />
      <SearchBar />
    </div>
  );
}
