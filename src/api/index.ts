import * as authenticationModule from "./modules/auth";
import * as researchModule from "./modules/researchs";
import * as usersModule from "./modules/users";
import * as utilitiesModule from "./modules/utilities";

const api = {
  authentication: authenticationModule,
  research: researchModule,
  users: usersModule,
  utilities: utilitiesModule,
};

export default api;
