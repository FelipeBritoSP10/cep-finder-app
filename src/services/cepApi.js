export async function getCepData(cep) {
  try {
    const sanitizedCep = cep.replace(/\D/g, ""); 

    if (sanitizedCep.length !== 8) {
      throw new Error("CEP inválido. Deve conter 8 números.");
    }

    const response = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);

    if (!response.ok) {
      throw new Error(`Erro de rede ao buscar CEP. Status: ${response.status}`);
    }

    const data = await response.json();

    return data; 
    
  } catch (error) {
    throw error;
  }
}