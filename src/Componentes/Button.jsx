
function Button() {
    function mostrarMensagem() {
    alert("Você clicou no Button!")
    }
    return <button onClick={mostrarMensagem}>Clique aqui</button>
    }
    export default Button 