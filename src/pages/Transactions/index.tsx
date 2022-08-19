import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { dateFormatter, priceFormatter } from '../../utils/formatter'




export function Transactions() {
    const { transactions } = useContext(TransactionContext)


    return (
    <div>
            <Header />
            <Summary />

        <TransactionsContainer>
            <SearchForm />

            <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description} </td>
                                    <td>
                                        <PriceHighlight variant={transaction.type} >
                                            {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        )
                    })}

                    {/* <tr>
                        <td width="50%">Desenvolvimento de sites </td>
                        <td>
                            <PriceHighlight variant="income">
                            R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>venda</td>
                        <td>13/04/2022</td>
                    </tr>
                   */}
                 
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    </div>
    )
}