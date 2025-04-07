export async function getCepData(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await response.json();
  }  