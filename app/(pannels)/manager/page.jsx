import { routes } from "@/routes/routes";
import { redirect } from "next/navigation";

const ManagerPage = () => {
  redirect(routes.manager.dashboard);
};

export default ManagerPage;