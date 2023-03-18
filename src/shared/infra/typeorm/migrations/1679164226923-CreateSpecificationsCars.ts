import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateSpecificationsCars1679164226923
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "spefifications_cars",
        columns: [
          {
            name: "car_id",
            type: "uuid",
          },
          {
            name: "specification_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "spefifications_cars",
      new TableForeignKey({
        name: "FKSpecificationCar",
        referencedTableName: "specifications",
        referencedColumnNames: ["id"],
        columnNames: ["specification_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "spefifications_cars",
      new TableForeignKey({
        name: "FKCarSpecification",
        referencedTableName: "cars",
        referencedColumnNames: ["id"],
        columnNames: ["car_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "spefifications_cars",
      "FKCarSpecification"
    );
    await queryRunner.dropForeignKey(
      "spefifications_cars",
      "FKSpecificationCar"
    );

    await queryRunner.dropTable("spefifications_cars");
  }
}
