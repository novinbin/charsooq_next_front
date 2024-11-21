import CreateForm from "../components/create-form";

const ManagerDashboardPage = ({ params }) => {
  return (
    <div>
      <CreateForm params={params} />
    </div>
  );
};

export default ManagerDashboardPage;
