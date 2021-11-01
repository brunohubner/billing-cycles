export default function showErrorsOrNext(resp, next, successMessage = "Operação realizada com sucesso") {
    if(!resp.errors) return next()
    alert(resp.errors[0]) // implementar um popup personalizado
    return
}