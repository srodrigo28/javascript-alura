const getProdutos = () => {
    const response = axios.get('http://localhost:8080/produto');
    console.log(response.data);
}
getProdutos();