import { getPoliciesData } from "@/helpers/api";
import { Policies } from "@/containers/PolicyPage";
import { notFound } from "next/navigation";

const PolicyPage = async () => {
  const policies = await getPoliciesData();

  if (!policies) {
    notFound();
  }

  return <Policies policies={policies} />;
};

export default PolicyPage;
