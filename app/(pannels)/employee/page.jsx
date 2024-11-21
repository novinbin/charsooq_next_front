import { routes } from "@/routes/routes";
import { redirect } from "next/navigation";

const ManagerPage = () => {
  redirect(routes.employee.dashboard);
};

export default ManagerPage;
