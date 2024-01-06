"use client"

import { Input } from "@/components/input"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const schema = z.object({
    name: z.string().min(1, "O campo nome do chamado é obrigatório."),
    description: z.string().min(1, "Descreva o seu problema...")
})
type FormData = z.infer<typeof schema>

export function FormTicket(){

    const {register, handleSubmit, setValue, formState:{errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    })
    
    return(
        <form className="bg-slate-200 mt-6 py-6 px-4 rounded border-2">
            <label className="font-medium text-lg mb-1"> Nome do chamado </label>
            <Input
                name="name"
                placeholder="Digite o nome do chamado..."
                type="text"
                error={errors.name?.message}
                register={register}
            />
             <label className="font-medium text-lg mb-1">Descreva o problema</label>
             <textarea
                className="w-full border-2 rounded-md h-24 resize-none mb-2 px-2"
                placeholder="Descreva o problema..."
                id="description"
                {...register("description")}
             >                
             </textarea>
            {errors.description?.message && <p className="text-red-500 m-1">{errors.description?.message}</p>}

            <button className="bg-blue-500 w-full rounded-md px-2 h-11 text-white font-bold">
                Cadastrar
            </button>

        </form>
    )

}