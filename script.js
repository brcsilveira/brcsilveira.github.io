document.addEventListener("DOMContentLoaded", function() {
    // Obtém todos os links dentro das tags <li>
    var links = document.querySelectorAll('li a');

    // Itera sobre cada link
    links.forEach(function(link) {
        // Adiciona um ouvinte de evento de clique a cada link
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();

            // Obtém o alvo da âncora (o valor do atributo href)
            var targetId = this.getAttribute('href').substring(1);

            // Obtém a seção correspondente
            var targetSection = document.getElementById(targetId);

            // Rola suavemente para a seção
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
