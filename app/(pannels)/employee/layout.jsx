import EmployeeLayout from "@/components/layouts/employee-layout";

const MainUserLayout = ({ children }) => {
  return <EmployeeLayout>{children}</EmployeeLayout>;
};

export default MainUserLayout;
