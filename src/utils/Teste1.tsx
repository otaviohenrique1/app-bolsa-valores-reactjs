import React, { useEffect } from 'react';
import IndexedDb from './IndexedDb'

const Teste = () => {
  useEffect(() => {
    const runIndexDb = async () => {
      const indexedDb = new IndexedDb('api_usuarios');
      await indexedDb.createObjectStore(['usuarios']);
      await indexedDb.putValue('usuarios', {
        nome: 'Juca',
        email: 'juca@email.com',
        senha: '0123456789',
      });
      await indexedDb.putBulkValue('usuarios', [
        {
          nome: 'Jeca',
          email: 'jeca@email.com',
          senha: '9876543210',
        },
        {
          nome: 'Jaca',
          email: 'jaca@email.com',
          senha: '7410852963',
        }
      ]);
      await indexedDb.getValue('usuarios', 1);
      await indexedDb.getLoginValue('usuarios', 'juca@email.com', '0123456789');
      await indexedDb.getAllValue('usuarios');
      // await indexedDb.deleteValue('usuarios', 1);
    }
    runIndexDb();
  }, []);

  return (
    <div>
      <h1>Teste 1</h1>
    </div>
  );
}

export default Teste;