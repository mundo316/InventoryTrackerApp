using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class RemoveBadParts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Parts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Parts",
                columns: table => new
                {
                    modelNo = table.Column<string>(type: "TEXT", nullable: false),
                    onHand = table.Column<int>(type: "INTEGER", nullable: false),
                    partName = table.Column<string>(type: "TEXT", nullable: true),
                    price = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parts", x => x.modelNo);
                });
        }
    }
}
