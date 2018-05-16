using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ApiEntity.Negocio;
using System.Text.RegularExpressions;
using System.Data.Entity;
namespace ApiEntity.Banco
{
    
    public class PessoaDB
    {
        public static Pessoa GetById(int chave)
        {
            using (var context = new ApiEntityNegocio())
            {
                return context.Pessoas.Where(p => p.Id == chave).FirstOrDefault();
            }

        }


        public static Pessoa GetByCpf(string cpf)
        {
        

            using (var context = new ApiEntityNegocio())
            {
                return context.Pessoas.Where(p => p.Cpf.Equals(cpf)).FirstOrDefault();
                 

            }

        }

        public static List<Pessoa> Get()
        {


            using (var context = new ApiEntityNegocio())
            {

                return context.Pessoas.ToList();
            }
        }

        // POST api/values
        public static void Post(Pessoa pessoa)
        {


            using (var context = new ApiEntityNegocio())
            {
              
                context.Pessoas.Add(pessoa);

                context.SaveChanges();
            }
        }

        // PUT api/values/5
        public static void Put(int id,Pessoa pessoa)
        {
            using (var context = new ApiEntityNegocio())
            {
                context.Entry(pessoa).State = EntityState.Modified;
                context.SaveChanges();
            }
        }

        // DELETE api/values/5
        public static void Delete(int id)
        {
            using (var context = new ApiEntityNegocio())
            {
                context.Pessoas.Remove(context.Pessoas.Where(p => p.Id == id).FirstOrDefault());
                context.SaveChanges();
            }
        }
    }
}
