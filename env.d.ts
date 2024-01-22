/// <reference types="vite/client" />

declare global {
	interface ImportMetaEnv {
		readonly BACKEND_URL: string
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv
	}
}
