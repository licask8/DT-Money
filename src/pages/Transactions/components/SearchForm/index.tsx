import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SeachFormContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string()
})

type SeachFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const {  fetchTransactions } = useContext(TransactionContext)


    const { register, handleSubmit, formState: { isSubmitting }} = useForm<SeachFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

   async function handleSearchTransactions(data: SeachFormInputs) {
        await fetchTransactions(data.query)
    }


    return (
        <SeachFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
            type="text" 
            placeholder="Buscque por transações"
            {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SeachFormContainer>
    )
}