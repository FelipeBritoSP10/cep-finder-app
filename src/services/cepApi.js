export async function getCepData(cep) {
  const sanitizedCep = cep.replace(/\D/g, '');

  if (sanitizedCep.length !== 8) {
    throw new Error('CEP inválido. Deve conter 8 números.');
  }

  const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${sanitizedCep}`);

  if (!response.ok) {
    throw new Error(`Erro de rede ao buscar CEP. Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
