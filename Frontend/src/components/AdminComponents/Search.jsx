import { FaSearch } from "react-icons/fa";
import { SearchBox } from "../../styles/componentStyles/Admin/AdminStyles";

const Search = ({ value, onChange, placeholder }) => {
   return (
      <SearchBox>
         <i>
            <FaSearch />
         </i>
         <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
      </SearchBox>
   );
};

export default Search;
