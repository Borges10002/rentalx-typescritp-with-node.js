import { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection();

  const id = uuidv4();
  const password = await hash("admin", 8);

  await connection.query(`
  INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
  values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXXX-XXXXXX-XXX' )
  `);

  await connection.close;
}

create().then(() => console.log("User admin created!"));
