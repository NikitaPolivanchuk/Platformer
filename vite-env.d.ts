/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_EULA_URL: string;
  readonly VITE_PRIVACY_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
