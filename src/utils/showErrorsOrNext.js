export default function showErrorsOrNext(errors, next, successMessage = "Operação realizada com sucesso") {
    if(!errors) return next()
    alert(errors[0]) // implementar um popup personalizado
    return
}