export const validate = (values) => {
	const errors = {};
	const requiredFields = [ 'nome', 'email', 'senha', 'confirmarSenha' ];
	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = 'Obrigatório';
		}
	});
	if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'E-mail inválido';
	}
	if (values.confirmarSenha != values.senha) {
		errors.confirmarSenha = 'As senhas estão diferentes!';
	}
	return errors;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const asyncValidate = (values /*, dispatch */) => {
	return sleep(1000).then(() => {
		// simulate server latency
	});
};
