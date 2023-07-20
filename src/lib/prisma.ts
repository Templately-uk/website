declare global {
	let prisma: PrismaClient; // This must be a `var` and not a `let / const`
}

import { PrismaClient } from '@prisma/client';
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	// @ts-expect-error cannot fix this - is only a typescript warning
	if (!global.prisma) {
		// @ts-expect-error cannot fix this - is only a typescript warning
		global.prisma = new PrismaClient();
	}
	// @ts-expect-error cannot fix this - is only a typescript warning
	prisma = global.prisma;
}

export default prisma;
