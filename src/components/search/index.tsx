import {
  useEffect,
  useState,
  useMemo,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import styled from "styled-components";
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { INewsCrawling } from "types";
import { debounce } from "lodash";

interface ISearchDataProps {
  newsData: INewsCrawling[] | undefined;
  setSearchedData: Dispatch<SetStateAction<INewsCrawling[]>>;
}

export const SearchData = ({ newsData, setSearchedData }: ISearchDataProps) => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchedKeyword, setSearchedKeyword] = useState<string>("");

  const debouncedUpdateKeyword = useMemo(
    () =>
      debounce((value: string) => {
        setSearchedKeyword(value);
      }),
    []
  );

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);

    // 호출
    debouncedUpdateKeyword(value);
  };

  useEffect(() => {
    const updateSearchedData = () => {
      if (!newsData) return;
      if (searchedKeyword.length === 0) {
        setSearchedData(newsData);
        return;
      }
      const tempData: INewsCrawling[] = [];
      newsData.forEach((news) => {
        if (
          news.title.includes(searchedKeyword) ||
          news.contents.includes(searchedKeyword)
        ) {
          tempData.push(news);
        }
      });
      setSearchedData(tempData);
    };
    updateSearchedData();
  }, [newsData, searchedKeyword, setSearchedData]);

  return (
    <>
      <SearchWrapper>
        <SearchField
          label="Search"
          variant="standard"
          type="text"
          value={keyword}
          onChange={onChangeKeyword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
        />
      </SearchWrapper>
    </>
  );
};

const SearchWrapper = styled.div`
  margin: 2vw;
`;
const SearchField = styled(TextField)`
  width: 35vw;
  height: 3vw;
  padding: 1vw;
`;
