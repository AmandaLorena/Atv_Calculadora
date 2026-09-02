export type Operator = "+" | "-" | "*" | "/";

const OPERATORS: Operator[] = ["+", "-", "*", "/"];

export function isOperator(value: string): value is Operator {
  return OPERATORS.includes(value as Operator);
}

export function getLastCharacter(value: string): string {
  return value.charAt(value.length - 1);
}

export function hasOperator(value: string): boolean {
  return OPERATORS.some((operator) => value.includes(operator));
}

export function calculate(
  firstValue: number,
  secondValue: number,
  operator: Operator
): number | null {
  switch (operator) {
    case "+":
      return firstValue + secondValue;

    case "-":
      return firstValue - secondValue;

    case "*":
      return firstValue * secondValue;

    case "/":
      if (secondValue === 0) {
        return null;
      }

      return firstValue / secondValue;

    default:
      return null;
  }
}

export function calculateExpression(expression: string): number | null {
  const operator = OPERATORS.find((item) => expression.includes(item));

  if (!operator) {
    const value = Number(expression);

    return Number.isFinite(value) ? value : null;
  }

  const parts = expression.split(operator);

  if (parts.length !== 2) {
    return null;
  }

  const firstValue = Number(parts[0]);
  const secondValue = Number(parts[1]);

  if (!Number.isFinite(firstValue) || !Number.isFinite(secondValue)) {
    return null;
  }

  return calculate(firstValue, secondValue, operator);
}

export function calculateSquareRoot(value: string): number | null {
  const number = Number(value);

  if (!Number.isFinite(number) || number < 0) {
    return null;
  }

  return Math.sqrt(number);
}

export function canAddOperator(value: string): boolean {
  if (!value || value === "0") {
    return false;
  }

  return !isOperator(getLastCharacter(value));
}

export function canAddDecimal(value: string): boolean {
  if (!value) {
    return true;
  }

  const operatorIndex = Math.max(
    value.lastIndexOf("+"),
    value.lastIndexOf("-"),
    value.lastIndexOf("*"),
    value.lastIndexOf("/")
  );

  const currentNumber =
    operatorIndex === -1 ? value : value.substring(operatorIndex + 1);

  return !currentNumber.includes(".");
}
