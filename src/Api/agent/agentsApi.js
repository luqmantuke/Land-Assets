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

export const trackReferralClick = async (referralCode) => {
  const formdata = new FormData();
  formdata.append("referral_code", referralCode);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow"
  };

  try {
    const response = await fetch(`${SERVER_URL}/api/agent/track_click/`, requestOptions);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error("Error tracking referral click:", error);
  }
};
