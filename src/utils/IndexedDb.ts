import { IDBPDatabase, openDB, DBSchema } from "idb";

interface IndexedDbSchema extends DBSchema {
  usuarios: {
    value: {
      nome: string;
      email: string;
      senha: string;
    };
    key: string;
  };
}

export default class IndexedDb {
  private database: string;
  private db: any;

  /**
   * Classe IndexedDb com o construtor que exige o nome do banco de dados.
   */
  constructor(database: string) {
    this.database = database;
  }

  /**
   * Função openDB requer um nome de banco de dados e um número de versão. db.createObjectStore cria uma tabela e estamos usando alguma funcionalidade embutida de IndexedDB onde ele adicionaria automaticamente uma chave com o id do nome da chave e a incrementaria automaticamente a cada operação de inserção.
   */
  public async createObjectStore(tableNames: string[]) {
    try {
      this.db = await openDB(this.database, 1, {
        upgrade(db: IDBPDatabase) {
          for (const tableName of tableNames) {
            if (db.objectStoreNames.contains(tableName)) {
              continue;
            }
            db.createObjectStore(tableName, { autoIncrement: true, keyPath: 'id' });
          }
        }
      });
    } catch (error) {
      return false;
    }
  }

  /**
   * getValue => Função que retorna o valor de um par de valores-chave e requer o nome da tabela e id (que seria gerado automaticamente quando inserimos qualquer valor porque definimos o caminho-chave: 'id' ao criar as tabelas) do campo.
   */
  public async getValue(tableName: string, id: number) {
    const tx = this.db.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    const result = await store.get(id);
    console.log('Get Data ', JSON.stringify(result));
    return result;
  }

  /**
   * getLoginValue => Função que valida o login
   */
  public async getLoginValue(tableName: string, email: string, senha: string) {
    const tx = this.db.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    // const result = [];
    // const resultEmail = await store.get(email);
    // const resultSenha = await store.get(senha);
    // result.push(resultEmail);
    // result.push(resultSenha);
    // const result = await store.get([email,senha]);
    const result = await store.get(1);
    console.log('Get login Data ', JSON.stringify(result));
    return result;
  }

  /**
   * getAllValue => Função que retorna todos os valores em uma tabela e requer apenas o nome da tabela.
   */
  public async getAllValue(tableName: string) {
    const tx = this.db.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    const result = await store.getAll();
    console.log('Get All Data', JSON.stringify(result));
    return result;
  }

  /**
   * putValue => Função que adiciona os valores no campo e requer o nome da tabela e o valor.
   */
  public async putValue(tableName: string, value: object) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const result = await store.put(value);
    console.log('Put Data ', JSON.stringify(result));
    return result;
  }

  /**
   * putBulkValue => Função onde podemos inserir valores em massa, ela requer que o nome da tabela e um array de valores sejam inseridos.
   */
  public async putBulkValue(tableName: string, values: object[]) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    for (const value of values) {
      const result = await store.put(value);
      console.log('Put Bulk Data ', JSON.stringify(result));
    }
    return this.getAllValue(tableName);
  }

  /**
   * deleteValue => Função para deletar um valor da tabela, ela precisa do nome da tabela e do id.
   */
  public async deleteValue(tableName: string, id: number) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const result = await store.get(id);
    if (!result) {
      console.log('Id not found', id);
      return result;
    }
    await store.delete(id);
    console.log('Deleted Data', id);
    return id;
  }
}
