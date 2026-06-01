// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    const botaoSaberMais = document.getElementById("btnSaberMais");

    // Evento de clique para rolar suavemente até os pilares
    botaoSaberMais.addEventListener("click", () => {
        const secaoPilares = document.getElementById("pilares");
        
        secaoPilares.scrollIntoView({ 
            behavior: "smooth" 
        });
    });
});
