async function getProdutos() {
    try {
        const response = await axios.get('http://localhost:8080/produto');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getProdutos();