export const formatNumber = (value: any)=> {
    return parseInt(value);
}

export const formatValuesPtBr = (values: any) => {
    return (Math.trunc((values / 1) * 10) / 10).toLocaleString('pt-BR');
}
