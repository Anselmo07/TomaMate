import type { User } from "../types/user";

const STORAGE_KEY = "matehub-user";

export function saveUser(user: User): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function loadUser(): User | null {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

export function clearUser(): void {
  localStorage.removeItem(STORAGE_KEY);
}