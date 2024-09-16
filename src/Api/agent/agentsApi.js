import { SERVER_URL } from "../../utilities/constant/api/api_constant";

export const fetchAgentStatistics = async (agentId) => {
  const formdata = new FormData();
  formdata.append("agent_id", agentId);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
  };

  try {
    const response = await fetch(`${SERVER_URL}/api/agent/statistics/`, requestOptions);
    const result = await response.json();
    if (result.status === "success") {
      return result.data;
    } else {
      throw new Error("Failed to fetch agent statistics");
    }
  } catch (error) {
    console.error("Error fetching agent statistics:", error);
    return null;
  }
};
