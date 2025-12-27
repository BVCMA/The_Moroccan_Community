let dcfChartInstance = null;

function runDCF() {
    const fcf = parseFloat(document.getElementById('fcf').value);
    const g = parseFloat(document.getElementById('g').value) / 100;
    const wacc = parseFloat(document.getElementById('wacc').value) / 100;

    if (wacc <= g) {
        alert("Le WACC doit être supérieur au taux de croissance.");
        return;
    }

    const value = fcf / (wacc - g);
    
    // 1. Affichage de l'analyse
    document.getElementById('analysis-text').innerHTML = `
        <strong>Constat de l'Analyste :</strong> La valeur intrinsèque estimée est de <b>${value.toLocaleString()} DH</b>. 
        Si le prix actuel en bourse est inférieur à ce montant, l'action est potentiellement sous-évaluée.
    `;

    // 2. Graphique
    const ctx = document.getElementById('dcfChart').getContext('2d');
    if(dcfChartInstance) dcfChartInstance.destroy();
    
    dcfChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Capitalisation Actuelle (Hypothèse)', 'Valeur Intrinsèque'],
            datasets: [{
                label: 'Valeur en DH',
                data: [value * 0.8, value], // Exemple visuel
                backgroundColor: ['#333', '#c9a227']
            }]
        }
    });
}
