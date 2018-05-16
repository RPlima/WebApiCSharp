namespace ApiEntity.Negocio
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ApiEntityNegocio : DbContext
    {
        public ApiEntityNegocio()
            : base("name=ApiEntityNegocio")
        {
        }

        public virtual DbSet<Pessoa> Pessoas { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Nome)
                .IsUnicode(false);

            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Email)
                .IsUnicode(false);

            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Telefone)
                .IsUnicode(false);

            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Cep)
                .IsUnicode(false);

            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Cpf)
                .IsUnicode(false);

            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Sexo)
                .IsUnicode(false);

            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Rg)
                .IsUnicode(false);
        }
    }
}
