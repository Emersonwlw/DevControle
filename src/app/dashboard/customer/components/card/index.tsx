
"use client"

import { CustomerProps } from '@/utils/customer.type'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

export function CardCustomer({customer} : { customer: CustomerProps}) {

    const router = useRouter();


    async function handleDeleteCustomer(){

        try {
            const response = await api.delete("/api/customer", {
                params:{
                    id: customer.id
                }
            })
            console.log(response.data);
            router.refresh();
            

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300">
            <h2>
                <a className="font-bold">Nome:</a>{customer.name}
            </h2>
            <p><a className="font-bold">Email:</a>{customer.email}</p>
            <p><a className="font-bold">Telefone:</a>{customer.phone}</p>

            <button 
            className="bg-red-500 px-4 rounded text-white mt-2 self-start hover:bg-blue-500 hover:scale-110 duration-200"
            onClick={handleDeleteCustomer}
            >
                Deletar
            </button>
        </article>
    )


}