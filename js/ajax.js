


function GetPessoas() {
    console.log('chamou o evento send api');

    //Send Api GET
    return $.ajax({
        type: "GET",
        url: "http://localhost:56627/api/Pessoa"
        /*success: function(r){
            console.log('deu boa');
        
        },
        error: function(ex){
            console.log('deu ruim');   
        }*/
    });
    console.log('terminou criacao ajax.');
}




function Post(ob) {
    $.ajax({
        type: "POST",
        url: "http://localhost:56627/api/Pessoa",
        data: JSON.stringify(ob),
        contentType: "application/json; charset=utf-8",
        
        success: function (r) {
            location.href= "index.html";
            console.log(ob);
            console.log(r);
        },
        error: function (ex) {
            
            console.log(ob);
            alert(ex);
            alert('deu ruim');
        }

    });
}



function Delete(id) {
    id = '?id='+id; 
    $.ajax({
        type: "DELETE",
        url: "http://localhost:56627/api/Pessoa"+id,
        success: function (r) {
            location.href= "index.html";
          //  console.log(r);
           // alert('deu boa');
        },
        error: function (ex) {

            alert(ex);
          //  alert('deu ruim');
        }
        
    });
    
}


    function Put(id,pessoa){
        console.log(id);
        
       //n  
        id = "?id="+id;
       console.log(id);
        console.log(pessoa);
        $.ajax({
            type:"PUT",
            url:"http://localhost:56627/api/Pessoa"+id,
            data: JSON.stringify(pessoa),
            contentType:"application/json; charset=utf-8",
            success: function(r){
                location.href="index.html";
            },
            error: function(ex){
                console.log(pessoa);
                    alert(ex);
            }
        });
        
    }

        function GetPeloId(id) {
            console.log('chamou o evento send api');
            id='?id='+id;
            console.log(id);
            //Send Api GET
            return $.ajax({
                type: "GET",
                url: "http://localhost:56627/api/Pessoa"+id,
                contentType:"application/json; charset=utf-8",
                /*success: function(r){
                    console.log('deu boa');
                
                },
                error: function(ex){
                    console.log('deu ruim');   
                }*/
            });
            console.log('terminou criacao ajax.');
        }


        function GetPeloCpf(cpf) {
            console.log('chamou o evento send api');
            cpf='?cpf='+cpf;
            console.log(cpf);
            //Send Api GET
            return $.ajax({
                type: "GET",
                url: "http://localhost:56627/api/Pessoa"+cpf,
                success: function(r){
                    console.log('deu boa');
                },
                error: function(ex){
                    console.log('deu ruim');   
                }
            });
            console.log('terminou criacao ajax.');
        }

    


