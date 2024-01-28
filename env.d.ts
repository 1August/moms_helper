/// <reference types="vite/client" />

declare global {
	interface ImportMetaEnv {
		readonly VITE_BACKEND_URL: string
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv
	}
}
