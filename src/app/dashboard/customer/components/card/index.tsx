


export function CardCustomer() {

    return (
        <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300">
            <h2>
                <a className="font-bold">Nome:</a>Teste
            </h2>
            <p><a className="font-bold">Email:</a>Teste@teste.com</p>
            <p><a className="font-bold">Telefone:</a>4949494949</p>

            <button className="bg-red-500 px-4 rounded text-white mt-2 self-start hover:bg-blue-500 hover:scale-110 duration-200">
                Deletar
            </button>
        </article>
    )


}