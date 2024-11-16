import { defineStore } from 'pinia';
import axios from 'axios';

interface Transaction {
  id: number;
  type: 'revenue' | 'expense';
  value: number;
  description: string;
  date: string;
}

export const useFinanceStore = defineStore('finance', {
  state: () => ({
    transactions: [] as Transaction[], // Lista de receitas e despesas
  }),
  actions: {
    // Busca todas as transações da API
    async fetchTransactions() {
      const response = await axios.get<Transaction[]>(
        'http://localhost:3001/transactions'
      );
      this.transactions = response.data;
    },
    // Adiciona uma nova transação
    async addTransaction(transaction: Transaction) {
      const response = await axios.post<Transaction>(
        'http://localhost:3001/transactions',
        transaction
      );
      this.transactions.push(response.data);
    },
  },
});
