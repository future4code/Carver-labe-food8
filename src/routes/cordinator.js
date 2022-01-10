export const irParaInicio = (history) => {
    history.push('/')
}

export const irParaLogin = (history) => {
    history.push('/login')
}

export const irParaCadastro = (history) => {
    history.push('/cadastro')
}

export const irParaCarrinho = (history) => {
    history.push('/carrinho')
}

export const irParaPerfil = (history) => {
    history.push('/perfil')
}

export const irParaEditarPerfil = (history) => {
    history.push('/editarperfil')
}
export const irParaRestaurante = (history, id) => {
    history.push(`/restaurante/${id}`)
}