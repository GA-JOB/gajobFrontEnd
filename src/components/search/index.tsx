import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
export const Search = () => {
  return (
    <>
      <SearchWrapper>
        <SearchField
          label="Search"
          variant="standard"
          type="text"
          // value={keyword}
          // onChange={onChangeKeyword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
        />
      </SearchWrapper>

      {/* <span>
        <button type="button" className="btn btn-danger">
          danger
        </button>
        <button type="button" className="btn btn-warning">
          warning
        </button>
        <button type="button" className="btn btn-success">
          success
        </button>
        <AlertDismissible />
      </span> */}
    </>
  );
};

const SearchWrapper = styled.div`
  margin-top: 2vw;
`;
const SearchField = styled(TextField)`
  width: 35vw;
  height: 3vw;
  padding: 1vw;
`;
