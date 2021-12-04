import React, { useEffect, useMemo, useState } from "react";
import { fetchData } from "../../api/fetch";
import { FETCH_CANDIDATE } from "../../constants/url";
import ApplicantContext from "./context";
import { Applicant } from "./types";

interface IApplicantProviderProps {
  children: React.ReactNode;
}

function ApplicantProvider({ children }: IApplicantProviderProps) {
  const [applicantList, setApplicantList] = useState<Array<Applicant>>([]);
  const [isLoading, setLoadingState] = useState<boolean>(false);
  const fetchApplicant = async () => {
    try {
      setLoadingState(true);
      const response = await fetchData(FETCH_CANDIDATE);
      const parsedResponse = response.data.data;
      if (parsedResponse) {
        setApplicantList(parsedResponse as Array<Applicant>);
      }
      setLoadingState(false);
    } catch (error) {
      setLoadingState(false);
    }
  };
  useEffect(() => {
    fetchApplicant();
  }, []);
  const values = useMemo(
    () => ({
      applicantList,
      isLoading,
    }),
    [applicantList, isLoading]
  );
  return (
    <ApplicantContext.Provider value={values}>
      {children}
    </ApplicantContext.Provider>
  );
}

export default ApplicantProvider;
