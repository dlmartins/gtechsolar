const extractControlNum = (controlNum) => {
    if (!controlNum) {
        throw new Error('Control number is null or undefined');
    }

    return controlNum.replace(/GT|\d{4}/g, '');
}

const insertControlNum = (controlNum) => {
    if (controlNum === null || controlNum === undefined) {
        throw new Error('Control number is null or undefined');
    }

    const currentYear = new Date().getFullYear();
    return `GT ${controlNum}/${currentYear}`;
}

export { extractControlNum, insertControlNum };