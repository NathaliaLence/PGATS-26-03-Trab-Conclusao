import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert';

/* 
Cenários validados
1) Adicionar pagamento na lista de pagamentos com valor maior que 100 (Cara)
2) Adicionar pagamento na lista de pagamentos com valor fronteira 100 (Padrão)
3) Adicionar pagamento na lista de pagamentos com valor menor que 100 (Padrão)
4) Validar consulta do último pagamento na lista de pagamentos
*/

describe('Validar lista de pagamentos', function(){
    it('Adicionar pagamento na lista de pagamentos com valor maior que 100 (Cara)', function(){
        //arrange
        const servicoDePagamentos = new ServicoDePagamento();
        //act
        servicoDePagamentos.pagar('0987-7656-3475','Samar', 100.1);
        const pagamento = servicoDePagamentos.consultarUltimoPagamento();
        //assert
        assert.equal(pagamento.codigoBarras, '0987-7656-3475');
        assert.equal(pagamento.empresa, 'Samar');
        assert.equal(pagamento.valor, 100.1);
        assert.equal(pagamento.categoria, 'cara');
    });   
    it('Adicionar pagamento na lista de pagamentos com fronteira 100 (Padrão)', function(){
        //arrange
        const servicoDePagamentos = new ServicoDePagamento();
        //act
        servicoDePagamentos.pagar('0987-7656-3475','Samar', 100);
        const pagamento = servicoDePagamentos.consultarUltimoPagamento();
        //assert
        assert.equal(pagamento.codigoBarras, '0987-7656-3475');
        assert.equal(pagamento.empresa, 'Samar');
        assert.equal(pagamento.valor, 100);
        assert.equal(pagamento.categoria, 'padrão');
    });     
    it('Adicionar pagamento na lista de pagamentos com valor menor que 100 (Padrão)', function(){
        //arrange
        const servicoDePagamentos = new ServicoDePagamento();
        //act
        servicoDePagamentos.pagar('0987-7656-3475','Samar', 99.9);
        const pagamento = servicoDePagamentos.consultarUltimoPagamento();
        //assert
        assert.equal(pagamento.codigoBarras, '0987-7656-3475');
        assert.equal(pagamento.empresa, 'Samar');
        assert.equal(pagamento.valor, 99.9);
        assert.equal(pagamento.categoria, 'padrão');
    }); 
    it('Validar consulta do último pagamento na lista de pagamentos', function(){
        //arrange
        const servicoDePagamentos = new ServicoDePagamento();
        //act
        servicoDePagamentos.pagar('3030-1111-3894','Microsoft', 10.5);
        servicoDePagamentos.pagar('4040-2222-4905','OpenAI', 1500);
        servicoDePagamentos.pagar('1234-1234-1234','Google', 0);
        const pagamento = servicoDePagamentos.consultarUltimoPagamento();
        //assert
        assert.equal(pagamento.codigoBarras, '1234-1234-1234');
        assert.equal(pagamento.empresa, 'Google');
        assert.equal(pagamento.valor, 0);
        assert.equal(pagamento.categoria, 'padrão');
    }); 
})
 