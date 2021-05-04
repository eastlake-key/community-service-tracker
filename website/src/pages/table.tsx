import React from "react";

import Helmet from "../components/header/helmet";
import TableController from "../components/table/tableController";
import InfoPage from "../components/info/infoPage";
import { useSelector } from "react-redux";
import { selectSignedInState } from "../redux/signedInSlice";

const Table: React.FC<{}> = () => {
  const signedInstate = useSelector(selectSignedInState);

  if (!signedInstate.signedIn) {
    return (
      <>
        <Helmet
          title="Edit Page"
          description="Page for editing and creating new and created volunteer hour entries."
        />
        <div className="mb-auto">
          <InfoPage
            title="You Are Not Signed In!"
            message="Click here to sign in"
            link="/login"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Helmet
        title="Table"
        description="Page showing your current submitted hours."
      />
      <div className="mb-auto">
        {
          // mb - auto forces the footer to be at the bottom
        }
        <TableController />
      </div>
    </>
  );
};

export { Table };
