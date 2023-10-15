'use client'

import { useState, useEffect } from "react"

const page = () => {
  return (
    <div className="text-center">
      <h1>Cadastre-se para postar</h1>
      <p className="text-[#aaa]">Crie seu usuario e compartilhe as suas historias</p>
      <form className="flex flex-col">
        <label>
          <span>Nome:</span>
          <input 
            type="text" 
            name="displayName"
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label>
        <span>Email:</span>
          <input 
            type="email" 
            name="email"
            required
            placeholder="Email do usuario"
          />
        </label>
        <label>
        <span>Senha:</span>
          <input 
            type="password" 
            name="passoword"
            required
            placeholder="digite a sua senha"
          />
        </label>
        <label>
        <span>Confirmação de senha:</span>
          <input 
            type="password" 
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default page