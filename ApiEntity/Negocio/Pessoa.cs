namespace ApiEntity.Negocio
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Pessoa")]
    public partial class Pessoa
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Nome { get; set; }

        [Required]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(15)]
        public string Telefone { get; set; }

        [Required]
        [StringLength(15)]
        public string Cep { get; set; }

        [Required]
        [StringLength(15)]
        public string Cpf { get; set; }

        [Required]
        [StringLength(15)]
        public string Sexo { get; set; }

        [Column(TypeName = "date")]
        public DateTime Nasc { get; set; }

        public int? Idade { get; set; }

        [Required]
        [StringLength(20)]
        public string Rg { get; set; }
    }
}
