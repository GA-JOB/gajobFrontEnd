import { AlertDismissible } from "components/alert";
import "bootstrap/dist/css/bootstrap.min.css";
export const Search = () => {
  return (
    <>
      <span>
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
      </span>
    </>
  );
};
