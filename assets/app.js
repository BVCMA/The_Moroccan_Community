let charts={};

function calcCompound(c,r,y){
let d=[],l=[];
for(let i=0;i<=y;i++){
l.push("Année "+i);
d.push(c*Math.pow(1+r,i));
}
return {labels:l,data:d};
}

/* DCF */
function calcDCF(){
const f=+dcf_fcf.value,g=+dcf_g.value/100,w=+dcf_w.value/100;
if(w<=g){dcf_res.innerHTML="⚠️ Taux invalide";return}
const v=f/(w-g);
dcf_res.innerHTML=`Valeur estimée ≈ <b>${v.toFixed(0)} DH</b>`;
}

/* Yield */
function calcYield(){
const y=(+dy_div.value/+dy_price.value)*100;
dy_res.innerHTML=`Rendement ≈ <b>${y.toFixed(2)} %</b>`;
}

/* WACC */
function calcWACC(){
const w=(1-+w_s.value/100)*(+w_e.value)+(+w_s.value/100)*(+w_d.value);
w_res.innerHTML=`WACC ≈ <b>${w.toFixed(2)} %</b>`;
}

/* Budget */
function budget(){
const r=+rev.value,d=+dep.value;
budget_res.innerHTML = r>d 
? "Situation saine, capacité d’épargne possible." 
: "Attention : dépenses élevées.";
}

/* Objectif */
function objectif(){
const m=+mens.value,o=+obj.value;
obj_res.innerHTML=`Durée estimée ≈ ${(o/m).toFixed(1)} mois`;
}
