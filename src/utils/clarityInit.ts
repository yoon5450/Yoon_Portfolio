import Clarity from "@microsoft/clarity";

const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

Clarity.init(projectId);

Clarity.identify("custom-id", "friendly-name");

