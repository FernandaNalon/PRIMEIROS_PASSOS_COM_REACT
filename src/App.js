import './App.css';

function App() {
    let nome = 'Fernanda Nalon';
    let novonome = nome.toUpperCase();
    let idade = 34;
    let n1 = 10;
    let n2 = 2;
    let soma = n1+n2;

    function sum(a,b) {
        return a+b; 
    }
    function sub(a,b) {
        return a-b; 
    }
    function div(a,b) {
        return a/b; 
    }
    function mult(a,b) {
        return a*b; 
    }
    
    return ( 
    <div className = "App" >
        <h3>Exibição de uma saudação.</h3>
        <p>Olá, {novonome}.</p>
        <p>A sua idade é: {idade}.</p>
        <br/>
        <p><b>Efetuando operações dentro das chaves: </b></p>
        <p>A soma de dois valores são sendo eles 2 e 8 é: {2+8}</p>
        <p>A subtração de dois valores são sendo eles 2 e 8 é: {2-8}</p>
        <p>A divisão de dois valores são sendo eles 2 e 8 é: {2/8}</p>
        <p>A multiplicação de dois valores são sendo eles 2 e 8 é: {2*8}</p>
        <br/>
        <p><b>Efetuando operação dentro da variável: </b></p>
        <p>A soma dinâmica de dois valores armazenados sendo eles n1 e n2 é igual a: {soma}</p>
        <br/>
        <p><b>Efetuando operações utilizando funções: </b></p>
        <p>A soma dos valores pela function é igual a: {sum(1,2)}</p>
        <p>A subtração dos valores pela function é igual a: {sub(1,2)}</p>
        <p>A divisão dos valores pela function é igual a: {div(1,2)}</p>
        <p>A multiplicação dos valores pela function é igual a: {mult(1,2)}</p>
        <br/>
    </div>
    );
}

export default App;