import React, { MouseEventHandler, useState } from "react";

export const Login = () => {

    const [message, setMessage] = useState<string>("")

    const submit = () => {
        setMessage("Nome de usuário deve ser informado")
    }

    return (
        <form>
            {
                message ? (
                    <div>
                        <p>
                            {message}
                        </p>
                    </div>
                ) : null
            }
            <div>
                <label htmlFor="username">Usuário</label>
                <input type="text" name="username" id="username" placeholder="Please, inform the username" />
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" placeholder="******"/>
            </div>
            <button 
            type="button"
            onClick={() => submit()}>
                Entrar
            </button>
        </form>
    )
}