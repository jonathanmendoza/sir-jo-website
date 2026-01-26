// Returns salary ranges as strings
export function getSalaryRange(salary: number): string {
    if (salary < 20000) return "<20k";
    if (salary < 40000) return "20k-39k";
    if (salary < 60000) return "40k-59k";
    if (salary < 80000) return "60k-79k";
    if (salary < 100000) return "80k-99k";
    return "100k+";
}

// Returns emergency fund ranges as strings
export function getFundRange(fund: number): string {
    if (fund === 0) return "0";
    if (fund < 50000) return "1-49k";
    if (fund < 100000) return "50k-99k";
    if (fund < 200000) return "100k-199k";
    return "200k+";
}
