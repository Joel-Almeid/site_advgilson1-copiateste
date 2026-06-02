import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen' // Corrigido: sem o /routes/
import './styles.css' // Corrigido: sem o /routes/

// Cria o roteador com a árvore de rotas do projeto
const router = createRouter({ routeTree })

// Registra o roteador para o TypeScript reconhecer as rotas corretamente
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}