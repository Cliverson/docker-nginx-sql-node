const express = require('express')
const app = express()
const port = 3000

//jdbc:mysql://db:3306
const configdb = {
    host :'db',
    user :'root',
    password :'root',
    database: 'dbnode'
}
const mysql = require('mysql2/promise');

app.get('/',async  (req, res) => {
    let nomes = await oberNomes()
     res.send(nomes);
})

app.get('/:nome', async (req,res) =>{
    const { nome } = req.params;
    await inserir(nome)
    res.send(`OK - ${nome}`)
})

async function inserir(parNome) {

  const pool = await mysql.createPool(configdb);
  let ret = await pool.getConnection()
    .then(async conn => {
      const stmSql =`insert into tbnome (name)   values ('${parNome}')`
      const ret  = await conn.query(stmSql);
      await conn.release();
      return ret ;
    }).catch(err => {
      console.log(err); 
    });
    return ret;
    
}

async function oberNomes() {
  const pool = await mysql.createPool(configdb);
  let ret = await pool.getConnection()
    .then(async conn => {
      const [rows, fields]  = await conn.query('SELECT * FROM tbnome');
      await conn.release();
      return rows;
    }).then(async result => {
      console.log(result);
      let retNomes ='<br>'
      await result.forEach(row => {
        retNomes += row.name+'<br>'
        //console.log(retNomes)
      });           
      return retNomes;

    }).catch(err => {
      console.log(err); 
    });
    return ret;
}


app.listen(port,()=>{
    console.log('Rodando porta :'+port)
})