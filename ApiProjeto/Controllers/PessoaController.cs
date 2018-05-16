using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using ApiEntity.Negocio;
using ApiEntity.Banco;

namespace ApiProjeto.Controllers
{
    public class PessoaController : ApiController
    {
        
        // GET: api/Pessoa
        public IEnumerable<Pessoa> Get()
        {
            var pessoa = PessoaDB.Get();
            // Retorna o número de anos
            pessoa.ForEach(p => {
                int YearsAge = DateTime.Now.Year - p.Nasc.Year;
                // Se a data de aniversário não ocorreu ainda este ano, subtrair um ano a partir da idade
                if (DateTime.Now.Month < p.Nasc.Month || (DateTime.Now.Month == p.Nasc.Month && DateTime.Now.Day < p.Nasc.Day))
                {
                    p.Idade = YearsAge--;
                }
                p.Idade = YearsAge;
            });
            return pessoa;
        }

        // GET: api/Pessoa/5
        public Pessoa Get(int id)
        {
            return PessoaDB.GetById(id);
        }

        public Pessoa GetCpf(string cpf)
        {
            return PessoaDB.GetByCpf(cpf);
        }

        // POST: api/Pessoa
        public void Post([FromBody]Pessoa pessoa)
        {
         
            PessoaDB.Post(pessoa);
        }

        // PUT: api/Pessoa/5
        public void Put(int id, [FromBody]Pessoa pessoa)
        {
            PessoaDB.Put(id,pessoa);

        }

        // DELETE: api/Pessoa/5
        public void Delete(int id)
        {
            PessoaDB.Delete(id);
        }
    }
}
