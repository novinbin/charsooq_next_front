import { routes } from "@/routes/routes";
import { redirect } from "next/navigation";

const ManagerPage = () => {
  redirect(routes.author.dashboard);
};

export default ManagerPage;
