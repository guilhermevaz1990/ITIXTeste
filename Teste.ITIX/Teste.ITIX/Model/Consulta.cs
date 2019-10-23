using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Teste.ITIX.Model
{
    public class Consulta
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Nome { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")]
        public string DataNascimento { get; set; }
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string DataHoraInicial { get; set; }
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string DataHoraFinal { get; set; }
        [Column(TypeName = "varchar(500)")]
        public string Obs { get; set; }
    }
}
