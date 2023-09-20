import ValidacaoServices from "../services/ValidacaoServices";

describe("validaNome", () => {
    test("Quando a validação do nome retorna false", () => {
        expect(ValidacaoServices.validaNome("")).toBe(false)
        expect(ValidacaoServices.validaNome("1")).toBe(false)
        expect(ValidacaoServices.validaNome("12")).toBe(false)
        expect(ValidacaoServices.validaNome(1245678)).toBe(false)
        expect(ValidacaoServices.validaNome(true)).toBe(false)
        expect(ValidacaoServices.validaNome([])).toBe(false)
        expect(ValidacaoServices.validaNome({})).toBe(false)
        expect(ValidacaoServices.validaNome(NaN)).toBe(false)
        expect(ValidacaoServices.validaNome()).toBe(false)
    });

    test("Quando a validação do nome retorna true", () => {
        expect(ValidacaoServices.validaNome("Denise")).toBe(true);
    });
});

describe("validarExistencia", () => {
    test("Quando o cliente existe na base de dados", () => {
        expect(ValidacaoServices.validarExistencia(1)).toBe(true);
    });

    test("Quando o cliente não existe na base de dados", () => {
        expect(ValidacaoServices.validarExistencia()).toBe(false);
    });
});

describe("validaEmail", () => {
    test("Quando o email não segue o formato correto", () => {
        expect(ValidacaoServices.validaEmail("email.invalido")).toBe(false);
    });

    test("Quando o email segue o formato correto", () => {
        expect(ValidacaoServices.validaEmail("cliente@example.com")).toBe(true);
    });
});

describe("validaTelefone", () => {
    test("Quando o telefone tem menos de 9 caracteres", () => {
        expect(ValidacaoServices.validaTelefone("12345678")).toBe(false);
    });

    test("Quando o telefone tem 9 ou mais caracteres", () => {
        expect(ValidacaoServices.validaTelefone("123456789")).toBe(true);
    });
});

describe("validaCamposCliente", () => {
    test("Quando um ou mais campos são inválidos", () => {
        expect(() => {
            ValidacaoServices.validaCamposCliente("Jo", "jo@example.com", "123456789");
        }).toThrowError("Campos invalidos");
    });

    test("Quando todos os campos são válidos", () => {
        expect(() => {
            ValidacaoServices.validaCamposCliente("Alice", "alice@example.com", "123456789");
        }).not.toThrowError("Campos invalidos");
    });
});
