import React, { useEffect } from "react";
import Helmet from "../header/helmet";
import { downloadReports } from "../../firebase/firestore/getReport";

const ReportPage: React.FunctionComponent<{}> = () => {
  useEffect(() => {
    downloadReports();
  });
  return (
    <>
      <Helmet
        title="Report"
        description="Page for downloading the latest hour summary report"
      />
      <div className="mb-auto">
        <h1
          className={
            "text-center text-white py-2 lg:py-3 text-4xl sm:text-4xl lg:text-5xl xl:text-6xl"
          }
        >
          Hour Summaries
        </h1>

        <h2
          className={
            "text-center text-white py-2 lg:py-3 text-base sm:text-xl lg:text-2xl xl:text-3xl"
          }
        >
          The hour summaries and awards report from all students should begin
          downloading as a csv file which can be opened in excel etc.
          Occasionally, browsers such as Chrome may block files from being
          downloaded. In this case, check the top right of the adress bar to
          allow file downloads. Additionally, please ensure that you are using
          the latest version of chrome/edge. If all fails, contact
          eastlakekey@gmail.com. Note that report are automatically generated
          every 24 hours so they may not be fully up-to-date.
        </h2>
      </div>
    </>
  );
};

export { ReportPage };
