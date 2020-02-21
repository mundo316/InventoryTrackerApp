using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class AddParts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Parts",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    modelNo = table.Column<string>(nullable: true),
                    partName = table.Column<string>(nullable: true),
                    price = table.Column<double>(nullable: false),
                    onHand = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parts", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Parts");
        }
    }
}
