/**
 * 
 * Title: Teste de Geração de Relatório
 * Description: Este script simula a geração de relatório das folhas de ponto pela aplicação
 * Author: Denis L. Moura
 * Date: 31.01.2020
 * 
 */

 
 import {Selector} from 'testcafe';

 //Dados do usuário

 var ManagerUser = {
    name: "Rayana Leitão", 
    username: "rayanaLeitao",
    password: "admin123"
 };


// Retorna Elementos da tela de login
const GetUsernameInput = ()=> document.querySelectorAll('[testecafe="UserNameInput"]');
const GetPasswordInput = ()=> document.querySelectorAll('[testecafe="PasswordInput"]');
const GetLoginButton = ()=> document.querySelectorAll('[testecafe="LoginButton"]');

// Retorna elementos da home
const GetMenuUsuarios = ()=> document.querySelectorAll('[testecafe="MenuOption_GoUser"]')

//Retona elementos da tela de usuário
const GetBtnGenerateReport = ()=> document.querySelectorAll('[testecafe="BtnGenerateReport_Denis Lopes"]');


 fixture `TruePonto-Web`
    /**Definindo o URL da pagina inicial da aplicação */
    .page `https://denis-moura.outsystemscloud.com/WebTruePonto`;

test('Gerando Relatorio de Pontos', async f =>{
    await f
        .typeText(GetUsernameInput,ManagerUser.username)
        .typeText(GetPasswordInput,ManagerUser.password)
        .click(GetLoginButton)
        .click(GetMenuUsuarios)
        .setTestSpeed(0.3)
        .click(GetBtnGenerateReport);

});