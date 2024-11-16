'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { API } from '@/core';
import { useAuthStore } from '@/stores/auth.store';

export function AuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	const token = useAuthStore((state) => state.token);

	const router = useRouter();

	React.useEffect(() => {
		if (!isAuthenticated && !window.location.pathname.startsWith('/login')) router.push('/login');
		const interceptor = API.interceptors.request.use((config) => {
			if (token) config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
		return () => {
			API.interceptors.request.eject(interceptor);
		};
	}, [isAuthenticated, router, token]);

	return <>{children}</>;
}
