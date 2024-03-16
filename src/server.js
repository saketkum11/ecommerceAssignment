import { createServer, Model, RestSerializer } from "miragejs";
import { users } from "./backend/db/users";
import { signupHandlers } from "./backend/controllers/authControllers";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    serializers: {
      application: RestSerializer,
    },
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.logging = false;
      users.forEach((user) => {
        server.create("user", { ...user });
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/users", signupHandlers.bind(this));
    },
  });

  return server;
}
