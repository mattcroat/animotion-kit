declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare namespace svelteHTML {
	interface HTMLAttributes {
		'on:in'?: (event: CustomEvent) => void
		'on:out'?: (event: CustomEvent) => void
	}
}

export {}
