// libs
import { createContext, useContext } from "react";
import { Applicant } from "./types";

interface IApplicantContextProps {
  isLoading: boolean;
  applicantList: Array<Applicant>;
}

const initialValue: IApplicantContextProps = {
  isLoading: false,
  applicantList: [],
};

const ApplicantContext = createContext(initialValue);

export const useApplicantContext = () => useContext(ApplicantContext);

export default ApplicantContext;
