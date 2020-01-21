/**
 * Author: Denis Lopes
 * Date: 21.01.20
 * 
 */

//importando o módulo testcafe
import {Selector} from 'testcafe';

//adicionando um dipositivo eletrico
fixture `Getting Started`
    //O teste será criado para a página abaixo
    .page `http://devexpress.github.io/testcafe/example`

//Função que irá conter o código de test
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        
        // Verifica se o conteúdo do cabeçalho é igual a "Thank you, John Smith"
        .expect(
            Selector('#article-header').innerText
        ).eql(
            'Thank you, John Smith!'
        );

        //permite acesso a elementos a outra página.
        const articleHeader = await Selector('.result-content').find('h1');

        //Obtem o text no cabeçalho da página aberta
        let headerText = await articleHeader.innerText;

        console.log("Esse é o resultado: " + headerText);

}); 