export function formatDisplayValue(value: string): string {
  if (!value) {
    return "0";
  }

  return value;
}

export function formatResult(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return "Erro";
  }

  const stringValue = value.toString();

  if (stringValue.length > 12) {
    return value.toPrecision(8);
  }

  return stringValue;
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/\s+/g, "");
}