import * as authExports from "./auth";
import * as apiExports from "./api";

const api = { ...authExports, ...apiExports };

export default api;
