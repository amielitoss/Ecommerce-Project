/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom" />

interface Window {
  axios: typeof import("axios").default;
}