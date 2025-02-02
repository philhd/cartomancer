import { randomBytes } from "crypto";

export function generateRandomString(length: number) {
    // Generate random bytes
    const buffer = randomBytes(length);
    // Convert to a hexadecimal string
    return buffer.toString('hex');
}