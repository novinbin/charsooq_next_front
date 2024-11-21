import { routes } from "@/routes/routes";
import { redirect } from "next/navigation";

const OrganPage = () => {
  redirect(routes.organ.dashboard);
};

export default OrganPage;
