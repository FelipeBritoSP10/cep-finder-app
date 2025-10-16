export async function getCepData(cep) {
  try {
    const sanitizedCep = cep.replace(/\D/g, ""); 

    if (sanitizedCep.length !== 8) {
      return { error: "CEP inválido. Deve conter 8 números." };
    }

    const response = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);

    if (!response.ok) {
      throw new Error("Erro ao buscar CEP");
    }

    const data = await response.json();

    if (data.erro) {
      return { error: "CEP não encontrado." };
    }

    return data;
  } catch (error) {
    return { error: error.message || "Erro desconhecido" };
  }
}