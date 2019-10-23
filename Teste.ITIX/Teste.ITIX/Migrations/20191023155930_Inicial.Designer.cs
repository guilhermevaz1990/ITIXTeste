﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Teste.ITIX.Model;

namespace Teste.ITIX.Migrations
{
    [DbContext(typeof(ConsultaContext))]
    [Migration("20191023155930_Inicial")]
    partial class Inicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Teste.ITIX.Model.Consulta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DataHoraFinal")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("DataHoraInicial")
                        .IsRequired()
                        .HasColumnType("varchar(30)");

                    b.Property<string>("DataNascimento")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Obs")
                        .HasColumnType("varchar(500)");

                    b.HasKey("Id");

                    b.ToTable("Consulta");
                });
#pragma warning restore 612, 618
        }
    }
}
