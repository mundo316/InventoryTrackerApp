using Microsoft.EntityFrameworkCore.Migrations;

namespace InventoryTrackerApp.Migrations
{
    public partial class addorderparts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrderParts",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    transactionId = table.Column<int>(nullable: false),
                    partId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderParts", x => x.id);
                    table.ForeignKey(
                        name: "FK_OrderParts_Parts_partId",
                        column: x => x.partId,
                        principalTable: "Parts",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderParts_Transactions_transactionId",
                        column: x => x.transactionId,
                        principalTable: "Transactions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderParts_partId",
                table: "OrderParts",
                column: "partId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderParts_transactionId",
                table: "OrderParts",
                column: "transactionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderParts");
        }
    }
}
