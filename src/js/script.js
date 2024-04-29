const conselhoAleatorio = document.querySelector(".botao");
const codConselho = document.querySelector(".cod-conselho");
const conselho = document.querySelector(".conselho");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    /* 
      A propriedade .ok é responsável por verificar se a resposta (Response) foi feita com sucesso ou não, 
  
      nesse caso estamos negando a resposta, ou seja, se a resposta não foi feita com sucesso, retornamos um erro.
    
      Ela está presente no objeto Response, que é retornado pela função fetch. 
    */

    if (!response.ok) {
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    codConselho.innerText = adviceId;
    conselho.innerText = adviceText;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }

}

conselhoAleatorio.addEventListener("click", getAdvice);

getAdvice();