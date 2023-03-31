import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "localhost"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host,
      database:
        process.env.NODE_ENV === "test"
          ? "rentx_test"
          : defaultOptions.database,
    })
  );
};

// interface IOptions {
//   host: string;
// }

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = "localhost"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });
